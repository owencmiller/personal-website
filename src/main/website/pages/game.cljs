(ns website.pages.game
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [helix.hooks :as hooks]
            [wscljs.client :as ws]
            [cljs.reader :as r]
            [goog.net.cookies :as cookies]
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


(defnc game
  []
  (let [[host? set-host] (hooks/use-state false)
        [id set-id] (hooks/use-state nil)
        [game-state set-game-state] (hooks/use-state [])
        host-ref (hooks/use-ref host?)
        id-ref (hooks/use-ref id)
        socket-ref (hooks/use-ref nil)]

    (hooks/use-effect [host?]
                      (reset! host-ref host?))

    (hooks/use-effect [id]
                      (reset! id-ref id)
                      (cookies/set "id" id (* 60 60 24)))

    (hooks/use-effect []
                      (cookies/set "id"))

    (hooks/use-effect []
                      (let [socket (ws/create "ws://192.168.0.249:3000/connect"
                                              (create-handlers host-ref id-ref set-host set-id set-game-state))]
                        (reset! socket-ref socket)
                        (fn [] (.close socket))))

    (d/div {:style {:display "flex"
                    :flex-direction "column"
                    :height "100%"
                    :width "100%"
                    :align-items "center"}}
           (d/h1 "Game")
           (if host?
             (d/div
              (d/h3 "you are the host and this is the game state:")
              (d/p (str game-state)))
             (d/div {:style {:width "100%"
                             :height "50%"
                             :display "flex"
                             :flex-direction "row"}}
                    (d/button {:style {:width "100%"
                                       :height "100%"}
                               :on-click #(ws/send @socket-ref
                                                   {:command "left"
                                                    :id (str id)
                                                    :host? host?}
                                                   fmt/edn)}
                              "Left")
                    (d/button {:style {:width "100%"
                                       :height "100%"}
                               :on-click #(ws/send @socket-ref
                                                   {:command "right"
                                                    :id (str id)
                                                    :host? host?}
                                                   fmt/edn)}
                              "Right"))))))
