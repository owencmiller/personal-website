(ns website.pages.svg
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [website.util.grid :refer [build-grid-fns]]))

(def WIDTH 400)
(def HEIGHT 400)

(def nrows 4)
(def ncols 4)

(def cell-width (/ WIDTH ncols))
(def cell-height (/ HEIGHT nrows))

(def grid-fns (build-grid-fns 0 0 WIDTH HEIGHT nrows ncols))


(defn get-neighbors
  [grid x y wrap?]
  (let [[dx dy ix iy] (if wrap?
                        [(if (= x 0) (dec (count grid)) (dec x))
                         (if (= y 0) (dec (count (first grid))) (dec y))
                         (if (= x (dec (count grid))) 0 (inc x))
                         (if (= y (dec (count (first grid)))) 0 (inc y))]
                        [(dec x) (dec y) (inc x) (inc y)])]
    (->> [[ix y]
          [ix iy]
          [ix dy]
          [x iy]
          [x dy]
          [dx y]
          [dx iy]
          [dx dy]]
         (map (partial get-in grid)))))

(comment
  (-> (fill-grid (constantly 1) 5 5)
      (get-neighbors 4 4 false)))

(defn fill-grid
  [f w h]
  (vec (repeatedly h #(vec (repeatedly w f)))))

(defn initial-state
  []
  {:board (fill-grid (fn [] (rand-int 2)) ncols nrows)
   :run false
   :step false})

(defn setup-fn
  []
  (initial-state))


(defn draw-fn
  [state]
  (q/clear)
  (q/background 255)
  (let [board (:board state)]
    (doseq [y (range (count board))
            x (range (count (get board y)))]
      (let [cell (get-in board [y x])]
        (q/fill (if (= cell 1) 0 255))
        (q/rect (* x cell-width) (* y cell-height) cell-width cell-height)))))

(defn update-fn
  [state]
  (if (or (:running state)
          (:step state))
    (-> state
        (update :board (fn [board]
                         (vec (map-indexed
                               (fn [row-id row]
                                 (vec (map-indexed
                                       (fn [col-id v]
                                         (let [n (apply + (get-neighbors board row-id col-id true))]
                                           (if (= v 1)
                                             (case n
                                               (2 3) 1
                                               0)
                                             (case n
                                               (3) 1
                                               0))))
                                       row)))
                               board))))
        (assoc :step false))
    state))

(defn mouse-clicked
  [state {:keys [x y] :as event}]
  (let [{:keys [pos->cell cell->pos]} grid-fns
        [cx cy] (pos->cell x y)
        current-val (get-in (:board state) [cy cx])]
    (-> state
        (update :board (fn [board]
                         (assoc-in board [cy cx] (if (zero? current-val)
                                                   1 0)))))))

(defn key-pressed
  [state {:keys [key] :as event}]
  (case key
    :t (do (q/frame-rate 5)
           (assoc state :running true))
    :y (assoc state :step true)
    :s (do (q/frame-rate 60)
           (assoc state :running false))
    :c (do (q/frame-rate 60))
    :r (do (q/frame-rate 60)
           (initial-state))
    state))

(defn make-sketch
  []
  (q/sketch
   :host "game-id"
   :draw draw-fn
   :update update-fn
   :setup setup-fn
   :mouse-clicked mouse-clicked
   :key-pressed key-pressed
   :renderer :p2d
   :features [:no-start]
   :middleware [m/fun-mode]
   :size [WIDTH HEIGHT]))


(defnc key-guide
  [{:keys [children]}]
  (d/p {:style {:margin "4px 0px"}}
       children))

(defnc svg
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
           (d/h1 "Build SVG")
           ($ key-guide "t = run")
           ($ key-guide "s = stop")
           ($ key-guide "y = step")
           (d/div {:id "game-id"}))))
