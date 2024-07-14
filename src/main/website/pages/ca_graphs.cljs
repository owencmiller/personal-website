(ns website.pages.ca-graphs
  (:require [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ["reagraph" :refer [GraphCanvas]]
            [website.util.grid :refer [build-grid-fns]]))

(def circle-ca {:structure {1 [2]
                            2 [1 3 10]
                            3 [2 4]
                            4 [3 5 7]
                            5 [2 4]
                            6 [9 7 8]
                            7 [4 6 8]
                            8 [6 7 10]
                            9 [8]
                            10 [2 8]}
                :state {1 0
                        2 0
                        3 1
                        4 0
                        5 0
                        6 0
                        7 1
                        8 1
                        9 0
                        10 1}
                :rule (fn [curr-state neighbor-states]
                        (let [s (apply + neighbor-states)
                              curr-on (= 1 curr-state)
                              curr-off (not curr-on)]
                          ;; try out rule 90
                          (cond
                            (and curr-on (= s 2)) 0
                            (and curr-on (= s 1)) 1
                            (and curr-on (= s 0)) 0
                            (and curr-off (= s 2)) 0
                            (and curr-off (= s 1)) 1
                            (and curr-off (= s 0)) 0)))})

(def init-ca {:structure {1 [2 4 3]
                          2 [3 5 1 4]
                          3 [1 5 2]
                          4 [1 2 4]
                          5 [2 3]}
              :state {1 1
                      2 0
                      3 0
                      4 1
                      5 1}
              :rule (fn [current-state neighbor-states]
                      (if (= 1 (apply + neighbor-states))
                        1
                        0))})

(def simple-ca {:structure {1 [2]
                            2 [3]
                            3 [1 2]
                            ;; 4 [2 1]
                            }
                :state {1 0
                        2 1
                        3 1
                        ;; 4 0
                        }
                :rule (fn [curr neighs]
                        (if (= 1 (apply + neighs))
                          1
                          0))})


(defn step-ca
  [{:keys [structure state rule] :as ca}]
  (let [new-state (->> structure
                       (map (fn [[k v]]
                              [k (rule (get-in ca [:state k])
                                       (map #(get-in ca [:state %]) v))]))
                       (into {}))
        new-node (inc (apply max (keys state)))
        _ (prn new-node)]
    (-> ca
        (assoc :state new-state)
        ;; (update :state assoc new-node 0)
        ;; (update-in [:structure (dec new-node)] conj new-node)
        ;; (update :structure assoc new-node [])
        )))


(defn run-ca
  [ca steps]
  (last (take steps (iterate step-ca ca))))

;; Different ways to define rules
;; 1. exact - explicitly define all permutations of neighbors 
;; 2. compressed - specify outputs for cmopressed information (i.e. addition/parity)

(defn ca->graph
  [ca]
  {:nodes (->> (:state ca)
               (map (fn [[k v]]
                      {:id (str k)
                       :label (str k)
                       :fill (if (zero? v)
                               "#c7c7c7"
                               "#000000")})))
   :edges (->> (:structure ca)
               (mapcat (fn [[k v]]
                         (map (fn [neighbor]
                                {:id (str k "->" neighbor)
                                 :source (str k)
                                 :target (str neighbor)
                                 :label (str "Edge " k "-" neighbor)}) v))))})

(defn switch-value
  [x]
  (if (zero? x)
    1
    0))

(defnc GraphComponent
  [{:keys [ca set-ca]}]
  (let [{:keys [nodes edges]} (ca->graph ca)
        js-nodes (clj->js nodes)
        js-edges (clj->js edges)]
    ($ GraphCanvas {:onNodeClick (fn [node _ _]
                                   (let [n (parse-double (get (js->clj node) "id"))]
                                     (set-ca (update-in ca [:state n] switch-value))))
                    :layoutType "forceDirected2d"
                    :nodes js-nodes
                    :edges js-edges})))



(defnc ca-graphs-index
  []
  (let [[ca set-ca] (hooks/use-state simple-ca)
        [hist set-hist] (hooks/use-state [])]
    (d/div
     (d/p "Many peoples first introduction to cellular automata is through the Game of Life. 
         A grid of cells which turn on and off depending on their neighbors.")
     (d/button {:on-click #(let [new-state (run-ca ca 2)]
                             (set-ca new-state)
                             (set-hist conj (:state new-state)))} "Step Automata")
     (d/div {:style {:display "flex"
                     :flex-direction "row"}}

            (d/div {:style {:position "fixed"
                            :width "75%"
                            :height "75%"}}
                   ($ GraphComponent {:ca ca
                                      :set-ca set-ca}))
            (d/div {:style {:position "fixed"
                            :display "flex"
                            :flex-direction "column"}}
                   (for [h hist]
                     (d/p {:style {:margin 0}} (vals h))))))))