import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "../../input";
import "./Game.css";
import { socket } from "../../client-socket";
import { drawCanvas, initCanvas } from "../../canvasManager";

const Game = () => {
  var width =
    document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth;
  var height =
    document.body.clientHeight || document.documentElement.clientHeight || window.innerHeight;
  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    socket.on("update", (update) => {
      processUpdate(update);
    });
  }, []);

  const processUpdate = (update) => {
    drawCanvas(update);
    console.log(update.chord_queue.length);
  };
  return (
    <>
      <div className="Game-body">
        <canvas id="game-canvas" width={0.9 * width} height={0.9 * height} />
      </div>
    </>
  );
};

export default Game;
