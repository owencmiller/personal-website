(ns website.app
  (:require
    ["react-dom/client" :as rdom]
    [helix.core :refer [defnc $]]
    [helix.dom :as d]))


(defnc app
  []
  (d/div {:style {:display "flex"
                  :flex-direction "column"
                  :height "100%"
                  :width "100%"
                  :align-items "center"}}
         (d/h1 "----- Site Under Construction -----")
         (d/p "updated Jun 15th 2024")
         (d/p "come back later :) - Owen Miller")))


(defn ^:export init
  []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))


(defn- ^:dev/after-load re-render
  []
  (init))
