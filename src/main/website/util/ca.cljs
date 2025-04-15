(ns website.util.ca
  (:require [clojure.set :as set]))

(defn to-binary-array [num padding]
  (let [binary (->> (.toString num 2)
                    (map #(js/parseInt % 10)))]
    (concat (repeat (- padding (count binary)) 0) binary)))

(defn string->bits [s]
  (->> s
       (map  #(.charCodeAt % 0))
       (map #(to-binary-array % 8))
       (apply concat)))

(defn bits->string [bits]
  (->> bits
       (partition 8)
       (map #(reduce (fn [acc bit] (+ (* 2 acc) bit)) 0 %))
       (map char)
       (apply str)))



(defn cycle-iterate [fs x]
  (reductions (fn [acc f] (f acc))
              x
              (cycle fs)))

(defn one-hot 
  [n]
  (assoc (vec (repeat n 0)) 
         (Math/floor (/ n 2)) 
         1))

(defn rand-bits
  [n]
  (repeatedly n #(rand-int 2)))


(defn create-rule
  "Returns a function that takes a state and returns a new state based on the given rule number"
  [num]
  (let [mapping (zipmap (map #(to-binary-array % 3) (range 0 8))
                         (reverse (to-binary-array num 8)))]
    (fn [state]
      (->> state
           (concat [(last state)])
           (partition 3 1 state)
           (map mapping)))))

(defn create-reverse-rule
  "Returns a function that takes a state and returns a new state based on the given rule number"
  [num]
  (let [mapping (zipmap (map #(to-binary-array % 3) (range 0 8))
                        (reverse (to-binary-array num 8)))]
    (fn [[prev curr]]
      (->> curr
           (concat [(last curr)]) 
           (partition 3 1 curr) 
           (map mapping)
           (map bit-xor prev)
           (conj [curr])))))

(defn run-ca
  [rule-num init-state epochs]
  (->> init-state
       (iterate (create-rule rule-num))
       (take epochs)
       (map vec)
       vec))

(defn run-reverse-ca
  [rule-num init-state epochs]
  (assert (= 2 (count init-state)))
  (->> init-state
       (iterate (create-reverse-rule rule-num))
       (take epochs)
       (map second)
       (cons (first init-state))
       (map vec) 
       vec))

(defn run-general-ca
  "Runs a CA that alternates rules based on coll of rule-nums"
  [rule-nums init-state epochs]
  (->> init-state
       (cycle-iterate (map create-rule rule-nums))
       (take epochs)
       (map vec)
       (vec)))

(defn run-general-reverse-ca
  "Like run-general-ca, but second-order (xor's previous state)"
  [rule-nums init-state epochs]
  (assert (= 2 (count init-state)))
  (->> init-state
       (cycle-iterate (map create-reverse-rule rule-nums))
       (take epochs)
       (map second)
       (cons (first init-state))
       (map vec)
       vec))


(comment
  (def test-state [[0 0 1 0 0 0 0] [0 0 0 1 0 0 0]])
  (def data (string->bits "at"))

  (def half-data-count (/ (count data) 2))
  (def split-data (-> (partition half-data-count half-data-count data) vec))

  (def moist-result (run-general-reverse-ca [30] split-data 2000))
  (def crane-result (run-general-reverse-ca [30] split-data 2000))

  (set/intersection (set (partition 2 1 (drop 2 moist-result)))
                    (set (partition 2 1 (drop 2 crane-result))))

  (defn min-zeros
    [ca-hist]
    (->> (partition 2 1 ca-hist)
         (map (partial apply concat))
         (map #(count (filter zero? %)))))

  (defn rules->min-zeros
    [rules]
    (->> (run-general-reverse-ca rules split-data 2000)
         min-zeros
         (apply min)))

  (rules->min-zeros [76 90 110])

  (->> (for [x (range 255)
             y (take 255 (repeat 0))]
         [x y])
       (map rules->min-zeros))

  )

