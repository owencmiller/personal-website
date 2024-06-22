(ns website.pages.page
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc page1
  []
  (d/h1 "This is page 1"))