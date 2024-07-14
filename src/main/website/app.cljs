(ns website.app
  (:require ["react-dom/client" :as rdom]
            ["react-router-dom" :refer (Route  Routes) :rename {BrowserRouter Router}]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [website.components.nav-bar :refer [nav-bar]]
            [website.pages.ca-graphs :refer [ca-graphs-index]]
            [website.pages.game :refer [game]]
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
    (not (empty? result))))


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


;; (swap! game-state (fn [state] (-> state (assoc :result "x"))))


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
        (q/text (str (:result @game-state) " wins!")
                0 0)))))


(defnc static-sketch
  [{:keys [host] :as options}]
  (hooks/use-effect
   []
   (prn "static-sketch built")
   (apply q/sketch
          (concat [:renderer :p2d
                   :middleware [m/fun-mode]]
                  (interleave (keys options) (vals options)))))
  (d/div
   {:style {:width "100%"
            :display "flex"
            :align-items "center"
            :justify-content "center"}}
   (d/div {:id host})))

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
                    :flex-direction "column"
                    :height "100%"
                    :width "100%"
                    :align-items "center"}}
           (d/h1 "Site Under Construction")
           (d/p "updated Jun 15th 2024")
           (d/p {:style {:margin-bottom "0"}} "i'm working on moving this site to cljs, come back later :)")
           (d/p {:style {:margin-top "5px"}} " - Owen")
           (d/div {:style {:display "flex"
                           :flex-direction "column"
                           :align-items "center"}}
                  (d/div {:id "sketch-id"})
                  (d/button {:style {:width "70px"
                                     :margin-top "24px"}
                             :on-click #(reset! game-state initial-state)} "Reset Game")))))

(defnc app []
  ($ Router
     ($ nav-bar)

     ($ Routes
        ($ Route {:path "/" :element ($ app1)})
        ($ Route {:path "/game" :element ($ game)})
        ($ Route {:path "/svg" :element ($ svg)})
        ($ Route {:path "/ca-graphs" :element ($ ca-graphs-index)}))))



(defn ^:export init
  []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))


(defn- ^:dev/after-load re-render
  []
  (init))
