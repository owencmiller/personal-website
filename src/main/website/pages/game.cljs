(ns website.pages.game
  (:require [cljs.reader :as r]
            [goog.net.cookies :as cookies]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [wscljs.client :as ws]
            [wscljs.format :as fmt]))

(defn host-manager
  [message set-game-state]
  (prn "host got message: " message)
  (set-game-state conj message))

(defn create-handlers
  [host-ref id-ref set-host set-id set-game-state]
  {:on-message (fn [e]
                 (let [message (r/read-string (.-data e))]
                   (prn message)
                   (if (nil? @id-ref)
                     (do (prn "first message")
                         (set-id (:id message))
                         (set-host (:host? message)))
                     (if @host-ref
                       (host-manager message set-game-state)
                       (prn "recieved message: " message)))))
   :on-open    #(prn "Opening a new connection")
   :on-close   #(prn "Closing a connection")})


(defn send-message
  [conn message-map]
  #(ws/send @conn message-map fmt/edn))

(defn create-handlers2
  [set-game-state]
  {:on-message (fn [e]
                 (let [message (r/read-string (.-data e))]
                   (prn "recieved message: " message)
                   (set-game-state merge message)
                   (let [id (:id message)]
                     (cookies/set "id" id (* 60 60 24)))))
   :on-open    #(prn "Opening a new connection")
   :on-close   #(prn "Closing a connection")})

(defnc lobby
  [{:keys [conn state]}]
  (let [[game-id-req set-game-id-req] (hooks/use-state "")]
    (d/div
     (d/button {:on-click (send-message conn {:command :host-game
                                              :id (:id state)
                                              :data nil})}
               "Host Game")
     (d/input {:value game-id-req
               :on-change #(set-game-id-req (.. % -target -value))})
     (d/button {:on-click (send-message conn {:command :join-game
                                              :id (:id state)
                                              :data {:game-id game-id-req}})}
               "Join Game"))))

(def initial-state
  {:in-game? false
   :game-id nil
   :is-host? false
   :id nil
   :game-state nil})

(defnc game2
  []
  (let [[state set-state] (hooks/use-state initial-state)
        socket-ref (hooks/use-ref nil)
        {:keys [in-game?
                game-id
                id
                is-host?
                game-state]} state]

    (hooks/use-effect []
                      (let [socket (ws/create "wss://api.owenmiller.me:3001/connect"
                                              (create-handlers2 set-state))]
                        (reset! socket-ref socket)
                        (fn [] (.close socket))))

    ;; (hooks/use-effect []
    ;;                   (let [id (cookies/get "id")]
    ;;                     (when id
    ;;                       (send-message socket-ref {:command :reconnect
    ;;                                                 :id id}))))

    (d/div {:style {:display "flex"
                    :flex-direction "column"
                    :height "100%"
                    :width "100%"
                    :align-items "center"}}
           (d/h1 "Game")
           (if (not in-game?)
             ($ lobby {:conn socket-ref :state state})
             (if is-host?
               (d/p (str "host of: " game-id)
                    (str "players in game:" game-state))
               (d/div
                (d/p (str "you're player: " id " in game: " game-id))
                (d/button {:on-click (send-message socket-ref {:command :make-move
                                                               :id id
                                                               :data {:game-id game-id
                                                                      :delta 1}})}
                          "increment")))))))