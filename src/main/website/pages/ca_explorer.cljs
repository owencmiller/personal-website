(ns website.pages.ca-explorer
  (:require
   [helix.core :refer [$ defnc]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [quil.middleware :as m]
   [quil.core :as q :include-macros true]
   [website.util.ca :as ca]
   [clojure.string :as str]))

(defnc static-sketch
  [{:keys [host rules] :as options}]
  (hooks/use-effect
   [rules]
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

(def HEIGHT 600)
(def WIDTH 300)
(def CENTER [(half WIDTH) (half HEIGHT)])

(def data (ca/string->bits "crane"))
(def half-data-count (half (count data)))

(defn general-reverse-ca [rules]
  (ca/run-general-reverse-ca rules (-> (partition half-data-count half-data-count data) vec) 40))


(defn draw 
  [state]
  (let [rules (:rules state)
        ca-data (general-reverse-ca rules)
        cell-width (/ WIDTH (count (first ca-data)))
        cell-height (/ HEIGHT (count ca-data))]
    (doseq [[y row] (map vector (iterate inc 0) ca-data)]
      (doseq [[x cell] (map vector (iterate inc 0) row)]
        (q/fill (if (zero? cell) 
                  255
                  0))
        (q/rect (* x cell-width) (* y cell-height) cell-width cell-height))))
  (q/no-loop))



(defn setup
  [rules]
  (fn []
    {:rules rules}))

(defnc ca-explorer-view []
  (let [[state set-state] (hooks/use-state {:rules [110 110]})]
    (d/div {:style {:display "flex" 
                    :flex-direction "row"}} 
           (d/div {:style {:margin "10px 40px"}}
            (d/p "Rules:")
            (d/div {:style {:display "flex"
                            :flex-direction "column"}}
                   (d/input
                    {:type      "text"
                     :value     (str/join "," (:rules state))
                     :on-change (fn [e]
                                  (let [raw  (.. e -target -value)
                                        parts (str/split raw #",")
                                        nums  (mapv #(js/parseInt (str/trim %)) parts)]
                                    (set-state #(assoc % :rules nums))))})
                   (d/div {:style {:margin-top "20px"}}
                    (d/input
                     {:type "number"
                      :value (str (first (:rules state)))
                      :on-change (fn [e]
                                   (set-state #(assoc-in % [:rules 0]
                                                         (js/parseInt (.. e -target -value)))))})
                    (d/input
                     {:type "number"
                      :value (str (second (:rules state)))
                      :on-change (fn [e]
                                   (set-state #(assoc-in % [:rules 1]
                                                         (js/parseInt (.. e -target -value)))))}))))
     ($ static-sketch {:host "sketch1"
                       :draw draw
                       :size [WIDTH HEIGHT]
                       :setup (setup (:rules state))
                       :rules (:rules state)}))))


(update-in {:rules [1 2]} [:rules 0] ())