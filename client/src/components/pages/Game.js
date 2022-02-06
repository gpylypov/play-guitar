import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "../../input";
import "./Game.css";
import { socket } from "../../client-socket";
import { drawCanvas, initCanvas } from "../../canvasManager";

const Game = () => {
  var width =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
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
