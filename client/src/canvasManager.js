let canvas;
const SPEED_OF_CHORDS = 0.3; //fraction of canvas per second
const IMAGE_WIDTH_MULT = 0.07;
const TEXT_HEIGHT_MULT = 0.05;
const BORDER_WIDTH = 5;
const TEXT_COLOR = "black";
/** utils */ //anticlockwise,
const drawArc = (xPos, yPos, radius, startAngle, endAngle, lineColor, fillColor) => {
  const context = canvas.getContext("2d");
  var startAngle = startAngle * (Math.PI / 180);
  var endAngle = endAngle * (Math.PI / 180);

  var radius = radius;

  context.strokeStyle = lineColor;
  context.fillStyle = fillColor;
  context.lineWidth = BORDER_WIDTH;

  context.beginPath();
  context.arc(xPos, yPos, radius, startAngle, endAngle); //, anticlockwise
  context.fill();
  context.stroke();
};
// converts a coordinate in a normal X Y plane to canvas coordinates

export const initCanvas = () => {
  canvas = document.getElementById("game-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");

  context.strokeStyle = "grey";
  context.fillStyle = "rgb(254, 203, 78)";
  context.lineWidth = 1;

  // context.fillStyle = "#cccccc";
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 6; i++) {
    context.beginPath();
    context.moveTo(0, 0.1 * (i + 2.5) * canvas.height);
    context.lineTo(canvas.width, 0.1 * (i + 2.5) * canvas.height);
    context.stroke();
  }
};
/** main draw */
export const drawCanvas = (drawState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgb(254, 203, 78)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgb(99, 55, 47)";
  context.fillRect(0, 0.2 * canvas.height, canvas.width, 0.6 * canvas.height);

  for (let i = 0; i < 6; i++) {
    context.beginPath();
    context.moveTo(0, 0.1 * (i + 2.5) * canvas.height);
    context.lineTo(canvas.width, 0.1 * (i + 2.5) * canvas.height);
    context.stroke();
  }

  for (let i = 0; i < drawState.chord_queue.length; i++) {
    let hor_pos = canvas.width * (0.98 - SPEED_OF_CHORDS * drawState.chord_queue[i].when);
    if (hor_pos > 0) {
      for (let j = 0; j < 6; j++) {
        if (drawState.chord_queue[i].chord[j] !== "x") {
          // context.strokeStyle = "black";
          // context.fillStyle = "white";
          // context.lineWidth = 4;
          if (hor_pos / canvas.width > 0.5) {
            context.globalAlpha = 1;
          } else {
            context.globalAlpha = (2 * hor_pos) / canvas.width;
          }
          //context.globalAlpha = 0.5 * (hor_pos / canvas.width + (hor_pos / canvas.width) ** 0.5);
          drawArc(
            hor_pos,
            0.1 * (5 - j + 2.5) * canvas.height,
            (IMAGE_WIDTH_MULT * Math.min(canvas.width, canvas.height)) / 2,
            0,
            360,
            // anticlockwise,
            "black",
            "#fecb4e"
          );
          context.font =
            TEXT_HEIGHT_MULT * Math.min(canvas.width, canvas.height) + "px Comic Sans MS";
          context.fillStyle = TEXT_COLOR;
          context.textAlign = "center";
          context.fillText(
            drawState.chord_queue[i].chord[j],
            hor_pos,
            0.1 * (5 - j + 2.5) * canvas.height +
              (TEXT_HEIGHT_MULT * Math.min(canvas.width, canvas.height)) / 3
          );
          context.strokeStyle = "grey";
          context.fillStyle = "grey";
          context.lineWidth = 1;

          // const img = new Image();
          // img.src = "./BeaverBaby.PNG";
          // img.onload = () => {
          //   context.drawImage(
          //     img,
          //     hor_pos - IMAGE_WIDTH / 2,
          //     0.1 * (j + 2.5) * canvas.height - IMAGE_WIDTH / 2,
          //     IMAGE_WIDTH,
          //     IMAGE_WIDTH
          //   );
          // };
          context.globalAlpha = 1;
        }
      }
    }
  }

  // const img = new Image();
  // img.src = "./BeaverBaby.PNG";
  // img.onload = () => {
  //   context.drawImage(img, convertCoord(0, 0).drawX - 75, convertCoord(0, 0).drawY - 75, 150, 150);
  // };
};
