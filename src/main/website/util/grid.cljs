(ns website.util.grid)

(defn build-grid-fns
  "x,y are the top left of the grid; 
   w,h are the width and height of the grid
   :grid->pos returns the center of the cell"
  [x y w h nrows ncols]
  (let [cell-w (/ w ncols)
        cell-h (/ h nrows)]
    {:pos->cell (fn [x2 y2]
                  [(Math/floor (/ (- x2 x) cell-w))
                   (Math/floor (/ (- y2 y) cell-h))])
     :cell->pos (fn [x-coord y-coord]
                  [(+ x (/ cell-w 2) (* cell-w x-coord))
                   (+ y (/ cell-h 2) (* cell-h y-coord))])}))


(def f (:cell->pos (build-grid-fns 100 100 100 100 3 3)))

