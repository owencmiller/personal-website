(ns website.app
  (:require
   ["react-dom/client" :as rdom]
   ["react-router-dom" :refer (Route  Routes) :rename {BrowserRouter Router}]
   [helix.core :refer [$ defnc]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   [website.components.nav-bar :refer [nav-bar]]
   [website.pages.ca-explorer :refer [ca-explorer-view]]
   [website.pages.ca-graphs :refer [ca-graphs-index]]
   [website.pages.game :refer [game2]]
   [website.pages.mind-map :refer [mind-map-view]]
   [website.pages.quil-game :refer [quil-game-view]]
   [website.pages.svg :refer [svg]]))


(defn eqfn
  [v]
  (fn [v2]
    (= v2 v)))


(def initial-state
  {:state (vec (repeat 9 nil))
   :player "x"
   :result nil})


(def game-state
  (atom initial-state))


(def controller (atom 0))


(def end-states [[0 1 2] [3 4 5] [6 7 8] [0 3 6] [1 4 7] [2 5 8] [0 4 8] [2 4 6]])


(defn game-over?
  []
  (let [x (map (fn [lines]
                 (let [values (map #(nth (:state @game-state) %) lines)]
                   (prn values)
                   (cond
                     (every? (eqfn "x") values) "x"
                     (every? (eqfn "o") values) "o"
                     :else nil))) end-states)
        result (apply str x)]
    (seq result)))


(defn get-next-player
  [state]
  (if (= (:player state)
         "x")
    "o"
    "x"))


(defn make-move
  [x y]
  (when-not (:result @game-state)
    (prn "making move: " x ", " y)
    (let [pos (+ x (* 3 y))]
      (when (and (> x -1)
                 (> y -1)
                 (< x 3)
                 (< y 3))
        (swap! game-state
               (fn [state]
                 (-> state
                     (assoc-in [:state pos] (:player state))
                     (assoc :player (get-next-player state)))))
        (when (game-over?)
          (prn "game-over")
          (swap! game-state (fn [state]
                              (-> state
                                  (assoc :result (get-next-player state))))))))))


(defn draw
  [_]
  (q/background 255)
  (q/stroke-weight 4)
  (q/line [100 0] [100 300])
  (q/line [200 0] [200 300])
  (q/line [0 100] [300 100])
  (q/line [0 200] [300 200])
  (q/fill 120)
  (q/text-size 90)
  (q/text-align :center :center)
  (doseq [x (range 0 3 1)
          y (range 0 3 1)]
    (q/text (str (nth (:state @game-state)
                      (+ x (* y 3))))
            (+ (* x 100) 50)
            (+ (* y 100) 50)))
  (when (:result @game-state)
    (q/fill 40 115 118 99)
    (q/rect 0 0 300 300)
    (q/fill 182 49 68)
    (q/text-size 90)
    (q/text-align :center :center)
    ;; (q/rect-mode :center)
    (q/with-translation [150 150]
      (q/with-rotation [(/ q/PI 6)]
        (q/text "You win!" 0 0)))))


(defn make-sketch
  []
  (q/sketch
   :draw draw
   :host "sketch-id"
   :setup (fn [] false)
    ;; :mouse-pressed (fn [_] (swap! game-state dec))
    ;; :mouse-released (fn [_] false)
   :mouse-clicked (fn [_]
                    (let [[x y] [(Math/floor (/ (q/mouse-x) 100))
                                 (Math/floor (/ (q/mouse-y) 100))]]
                      (make-move x y)))
   :middleware [m/fun-mode]
   :size [300 300]))


(defnc app1
  []
  (let [sketch (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (do
       (reset! sketch (make-sketch))
       (fn []
         (when @sketch
           (.remove @sketch)))))
    (d/div {:style {:display "flex"
                    :flex-direction "row"
                    :width "100%"
                    :height "100%"
                     :align-items "flex-start"
                     :justify-content "flex-start"
                    :margin-left "30px"
                    }}
           (d/div {:style {:display "flex"
                           :flex-direction "column"
                           :width "50%"
                           :align-items "flex-start"
                           :justify-content "flex-start"
                           :margin-left "30px"}}
                  (d/h1 "Owen Miller")
                  (d/h3 "Who I am")
                  (d/ul
                   (d/li "Founding Engineer @ " (d/a {:href "https://joinattain.com/"} "Attain") " - Building software for distributors")
                   (d/li "Living in Pittsburgh, PA")
                   (d/li "Interested in:"
                         (d/ul 
                          (d/li "Combinatorial Game Theory")
                          (d/li "Economics")
                          (d/li "Aesthetics")))
                   (d/li "Contactable at:"
                         (d/ul
                          (d/li (d/a "mail [at] owenmiller.me"))
                          (d/li (d/a {:href "http://linkedin.com/in/owen-c-miller"} "linkedin")))))
                  (d/h3 "Who I was")
                  (d/ul

                   (d/li "Software Engineer @ " (d/a {:href "https://amperity.com/"} "Amperity")
                         (d/ul
                          (d/li "Worked on identity resolution at scale")))
                   (d/li "Software Engineering Intern @ " (d/a {:href "https://www.intuit.com/"} "Intuit")
                         (d/ul
                          (d/li "Built internal data pipelines and tooling")))
                   (d/li "Studied Computational Mathematics at Rochester Institute of Technology"
                         (d/ul
                          (d/li "President of Computer Science House"))))
                  (d/h3 "What I use")
                  (d/p "Clojure(script), Typescript, and all the other software tools"))
           (d/div {:style {:display "flex"
                           :flex-direction "column"
                           :width "50%"
                           :height "100%"
                           :align-items "center"
                           :justify-content "center"
                           }} 
            (d/p "Play some tic-tac-toe against yourself while you're here:")
            (d/div {:style {:display "flex"
                            :flex-direction "column"
                            :align-items "center"}}
                   (d/div {:id "sketch-id"})
                   (d/button {:style {:width "70px"
                                      :margin-top "24px"}
                              :on-click #(reset! game-state initial-state)} "Reset Game"))))))

(defnc app []
  ($ Router
     ($ Routes
        ($ Route {:path "/" :element ($ app1)})
        ;; ($ Route {:path "/game" :element ($ game2)})
        ;; ($ Route {:path "/svg" :element ($ svg)})
        ;; ($ Route {:path "/ca-graphs" :element ($ ca-graphs-index)})
        ;; ($ Route {:path "/mind-map" :element ($ mind-map-view)})
        ;; ($ Route {:path "/ca-explorer" :element ($ ca-explorer-view)})
        ;; ($ Route {:path "/quil-game" :element ($ quil-game-view)})
        )))



(defn ^:export init
  []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))


(defn- ^:dev/after-load re-render
  []
  (init))
