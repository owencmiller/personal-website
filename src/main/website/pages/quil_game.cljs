(ns website.pages.quil-game
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [website.util.grid :as grid]))

(def HEIGHT 500)
(def WIDTH 800)
(def ROWS 20)
(def COLS 20)
(def CELL-W (/ WIDTH COLS))
(def CELL-H (/ HEIGHT ROWS))
(let [{:keys [pos->cell cell->pos]} (grid/build-grid-fns 0 0 WIDTH HEIGHT ROWS COLS)]
  (def pos->cell pos->cell)
  (def cell->pos cell->pos))

(def colors {:white (q/color 255 255 255)
             :red (q/color 230 0 0)})

(defn half [x] (/ x 2))


(defnc static-sketch
  [{:keys [host] :as options}]
  (hooks/use-effect
   []
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


(defn draw-grid
  [width height nrows ncols]
  (let [cell-width (/ width ncols)
        cell-height (/ height nrows)]
    (doseq [line (range 1 ncols)]
      (q/line (* cell-width line) 0 (* cell-width line) height))
    (doseq [line (range 1 nrows)]
      (q/line 0 (* cell-height line) width (* cell-height line)))))

(defn draw-cell
  [xpos ypos color]
  (q/fill color)
  (let [[x y] (cell->pos xpos ypos)]
   (q/rect (- x (half CELL-W)) (- y (half CELL-H)) CELL-W CELL-H)))

(defn draw-groups 
  [{:keys [groups]}]
  #_(doseq [{:keys [color loc]} groups]
    (let []
      (doseq [xs (range )]))))

(defn draw
  [state]
  (q/background 200)
  (draw-grid WIDTH HEIGHT ROWS COLS)
  (let [[x y] (:pos state)]
    (draw-cell x y (:white colors)))
  (draw-groups state))

(defn update-fn 
  [state]
  state)


(defn key-pressed
  [state {:keys [key]}]
  (cond-> state
    (= key :w) (update :pos (fn [[x y]] [x (dec y)]))
    (= key :a) (update :pos (fn [[x y]] [(dec x) y]))
    (= key :s) (update :pos (fn [[x y]] [x (inc y)]))
    (= key :d) (update :pos (fn [[x y]] [(inc x) y]))))

(defn setup 
  []
  (let [font (q/load-font "assets/Inter_24pt-Regular.ttf")] 
    (q/text-font font)
    (q/text-size 20)
    {:font font
     :pos [5 5]
     :groups [{:id 1 
               :color :red
               :loc [[1 1] [3 3]]}]}))

(defnc quil-game-view []
  (d/div
   ($ static-sketch {:host "sketch1"
                     :draw draw
                     :size [WIDTH HEIGHT]
                     :update update-fn
                     :setup setup
                     :key-pressed key-pressed})))
