/*
import socketIOClient from "socket.io-client";
import { post } from "./utilities";
const endpoint = window.location.hostname + ":" + window.location.port;
export const socket = socketIOClient(endpoint);
socket.on("connect", () => {
  post("/api/initsocket", { socketid: socket.id });
});

// send a message to the server with the move you made
export const emitChord = (chord) => {
  socket.emit("emitChord", chord);
};
*/

export const socket = new WebSocket('wss://play-guitar.herokuapp.com');

export const emitChord = (chord) => {
  console.log(chord);
  socket.send(chord);
}
