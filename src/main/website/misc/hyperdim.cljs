(ns website.misc.hyperdim)

(def max-size 1000)


(defn rand-bin
  []
  (if (> 0.5 (rand))
    1
    -1))


(defn hvd
  []
  (repeatedly max-size #(rand-bin)))


(defn bundle
  [v1 v2]
  (->> (mapv + v1 v2)
       (map (fn clipping
              [x]
              (cond
                (< x -1) -1
                (> x 1) 1
                :else x)))))


(defn bind
  [v1 v2]
  (mapv * v1 v2))


(defn protect
  "TODO: Implement"
  [v1]
  (throw (js/Error "not implemented")))


(defn unprotect
  "TODO: Implement"
  [v1]
  (throw (js/Error "not implemented")))


(def cleanup-mem (atom {}))


(defn reset-mem!
  []
  (reset! cleanup-mem {}))


(defn add-to-cleanup-mem
  [k v]
  (swap! cleanup-mem merge {k v}))


(defn get-hvd
  [k]
  (get @cleanup-mem k))


(defn add-hvd
  [k]
  (add-to-cleanup-mem k (hvd)))


(defn similarity-score
  "Find the similarity between two hdvs by dot product and also
  by cosine similarity"
  [query-v v]
  (let [dotx (apply + (mapv * v query-v))]
    {:dot dotx
     :cos-sim (/ dotx
                 (* (count v)
                    (count query-v)))}))


(defn query-cleanup-mem-verbose
  "Finds the nearest neighbor to the hdv by using the dot product and cosine.
   Then returns the cleaned vector - returns all results and score"
  [query-v]
  (->> @cleanup-mem
       (map (fn [[k v]]
              (merge {k v} (similarity-score query-v v))))
       (sort-by :dot)))


(defn query-cleanup-mem
  "Finds the nearest neighbor to the hdv by using the dot product.
   Then returns the cleaned vector. If given a theshold, uses cosine simalarity (0-1) and returns all the possible matches if they are greather than or equal to the threshold. Or none if there are no matches."
  ([query-v]
   (query-cleanup-mem nil nil query-v))
  ([threshold verbose? query-v]
   (let [sorted-dot (query-cleanup-mem-verbose query-v)]
     (cond->> (reverse sorted-dot)
       threshold
       (filterv (fn [{:keys [cos-sim] :as result}]
                  (when (>= cos-sim threshold)
                    result)))

       (not verbose?)
       (mapv (fn [result] (dissoc result :dot :cos-sim)))

       (nil? threshold)
       (ffirst)))))


(defn unbind-get
  "Gets the key hdv from the memory and unbinds
  (bind is the inverse of itself) the
   value from the bundle hdv. Queries the cleaned up vector
   from memory. With the parameter of a threshold, uses a cosine
   similatrity score (0 -> 1.0) for exact match.
   Example a threshold of 0.1 would return a result if the score
   was greater than or equal to 0.1, otherwise nil.
   If no key hdv from mem was found it will return an exception
   that no key was found"
  ([hdv k]
   (unbind-get hdv k nil nil))
  ([hdv k threshold verbose?]
   (let [key-v (get-hvd k)]
     (if key-v
       (->> key-v
            (bind hdv)
            (query-cleanup-mem threshold verbose?))
       (throw (ex-info "No key found in memory" {:key-value k}))))))


(defn test-information
  [info-count]
  (let [_ (reset-mem!)
        uuids (repeatedly info-count #(str (random-uuid)))
        grouped-uuids (partition 2 uuids)
        _ (doseq [x uuids]
            (add-hvd x))
        H (reduce (fn [H [v1 v2]]
                    (bundle H (bind (get-hvd v1) (get-hvd v2))))
                  (let [[v1 v2] (first grouped-uuids)]
                    (bind (get-hvd v1) (get-hvd v2)))
                  (rest grouped-uuids))
        results (-> (map (fn [[v1 v2]]
                           [(= v2 (first (unbind-get H v1)))
                            (= v1 (first (unbind-get H v2)))]) grouped-uuids)
                    flatten)]
    {:data uuids
     :store H
     :results (count (filter true? results))}))


(comment

  (add-hvd :name)
  (add-hvd "Owen")
  (add-hvd :yob)
  (add-hvd 1999)
  @cleanup-mem
  (reset-mem!)

  (def H
    (-> (bind (get-hvd :name) (get-hvd "Owen"))
        (bundle (bind (get-hvd :yob) (get-hvd 1999)))))

  (unbind-get H 1999)


  ;; Testing information limits
  (def limit 4)
  (let [_ (reset-mem!)
        uuids (repeatedly limit #(str (random-uuid)))
        grouped-uuids (partition 2 uuids)
        _ (doseq [x uuids]
            (add-hvd x))
        H (reduce (fn [H [v1 v2]]
                    (bundle H (bind (get-hvd v1) (get-hvd v2))))
                  (let [[v1 v2] (first grouped-uuids)]
                    (bind (get-hvd v1) (get-hvd v2)))
                  (rest grouped-uuids))
        results (-> (map (fn [[v1 v2]]
                           [(= v2 (first (unbind-get H v1)))
                            (= v1 (first (unbind-get H v2)))]) grouped-uuids)
                    flatten)]
    (def uuids uuids)
    (def results results)
    (def H2 H)
    (count (filter true? results)))
  results
  H2
  uuids
  (unbind-get H2 "0d7a266d-ed23-4dfc-b002-2de62c65bafe")




  (map (fn [v]
         (let [iterations 20]
           (Math/trunc) (/ (->> (repeatedly iterations #(test-information v))
                                (map :results)
                                (apply +))
                           iterations))) (range 1 30 2))
  (/ (apply + (rest *1)) (count (rest *1))))
