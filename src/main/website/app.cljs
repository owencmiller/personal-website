(ns website.app
  (:require
    ["react-dom/client" :as rdom]
    [helix.core :refer [defnc $]]
    [helix.dom :as d]
    [helix.hooks :as hooks]
    [quil.core :as q :include-macros true]
    [quil.middleware :as m]))


(defn draw
  [state]
  (if state
    (do
      (q/background 100 0 100)
      (q/fill 255)
      (q/text "A little graphic written to test the Quil library"
              35 150))
    (q/background 255)))


(defn make-sketch
  []
  (q/sketch
    :draw draw
    :host "sketch-id"
    :setup (fn [] false)
    :mouse-pressed (fn [state] (not state))
    ;; :mouse-released (fn [_] false)
    ;; :mouse-clicked (fn [state] (not state))
    :middleware [m/fun-mode]
    :size [300 300]))


(defnc app
  []
  (hooks/use-effect :once (make-sketch))
  (d/div {:style {:display "flex"
                  :flex-direction "column"
                  :height "100%"
                  :width "100%"
                  :align-items "center"}}
         (d/h1 "Site Under Construction")
         (d/p "updated Jun 15th 2024")
         (d/p {:style {:margin-bottom "0"}} "i'm working on moving this site to cljs, come back later :)")
         (d/p {:style {:margin-top "5px"}} " - Owen")
         (d/div {:id "sketch-id"})))


(defn ^:export init
  []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))


(defn- ^:dev/after-load re-render
  []
  (init))
