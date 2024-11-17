(ns website.pages.mind-map
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


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


(defn draw
  [_]
  (q/background 200)
  (q/rect 10 10 10 10))


(defnc mind-map-view []
  (d/div
   ($ static-sketch {:host "sketch1"
                     :draw draw})))
