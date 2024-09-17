(ns website.components.nav-bar
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            ["react-router-dom" :refer [Link]]))

(def nav-style
  {:height "40px"
   :margin "30px 0px"
   :display "flex"
   :flex-direction "row"
   :gap "30px"
   :align-items "center"
   :justify-content "center"})


(def link-style
  {:textDecoration "none"
   :color "black"
   :fontSize "18px"
   :fontWeight "300"
   :fontFamily "Inter"
   :textAlign "center"})

(def title-style
  {:fontSize "24px"
   :fontFamily "Inter"
   :fontWeight "300"
   :lineHeight "1.05"})

(defnc nav-bar []
  (d/nav
   {:style nav-style}
   ($ Link {:style (cljs.core/clj->js (merge link-style title-style)) :to "/"} "Owen Miller")
   #_($ Link {:style (cljs.core/clj->js link-style) :to "/game/"} "Game")
   #_($ Link {:style (cljs.core/clj->js link-style) :to "/svg/"} "SVG Builder")
   #_($ Link {:style (cljs.core/clj->js link-style) :to "/ca-graphs/"} "CA Graphs")))