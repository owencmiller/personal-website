(ns website.pages.mind-map
  (:require
   [helix.core :refer [$ defnc]]
   [helix.hooks :as hooks]
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   [helix.dom :as d]
   [quil.core :as q]))

(defnc static-sketch
  [{:keys [host] :as options}]
  (hooks/use-effect
   []
   (apply q/sketch
          (concat [:renderer :p2d
                   :middleware [m/fun-mode]]
                  (interleave (keys options) (vals options)))))
  (d/div
   {:style {:display "flex"
            :align-items "center"
            :justify-content "center"}}
   (d/div {:id host})))

(defn half [x] (/ x 2))

(def HEIGHT 400)
(def WIDTH 400)
(def CENTER [(half WIDTH) (half HEIGHT)])

(defn setup 
  []
  (let [screen-width (.. js/window -innerWidth)
        screen-height (.. js/window -innerHeight)]
   {:screen-ratio (/ screen-width screen-height)}))


(defn key-pressed 
  [state]
  (-> state))

(defn update-fn
  [state]
  (-> state))


(defn draw [_] 
  (q/rect 0 0 50 50))


(defnc mind-map-view []
  (d/div
   ($ static-sketch {:host "sketch1"
                     :draw draw
                     :size [WIDTH HEIGHT]
                     :update update-fn
                     :setup setup
                     :key-pressed key-pressed})))