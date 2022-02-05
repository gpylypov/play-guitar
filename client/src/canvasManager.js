let canvas;
const SPEED_OF_CHORDS = 0.2; //fraction of canvas per second
const IMAGE_WIDTH = 35;
const TEXT_HEIGHT = 20;
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
const convertCoord = (x, y) => {
  if (!canvas) return;
  return {
    drawX: canvas.width / 2 + x,
    drawY: canvas.height / 2 - y,
  };
};

// fills a circle at a given x, y canvas coord with radius and color
const fillCircle = (context, x, y, radius, color) => {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
};

/** drawing functions */

const drawPlayer = (context, x, y, color) => {
  // TODO Step 0
};

export const initCanvas = () => {
  canvas = document.getElementById("game-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");

  context.strokeStyle = "grey";
  context.fillStyle = "grey";
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

  context.fillStyle = "#cccccc";
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 6; i++) {
    context.beginPath();
    context.moveTo(0, 0.1 * (i + 2.5) * canvas.height);
    context.lineTo(canvas.width, 0.1 * (i + 2.5) * canvas.height);
    context.stroke();
  }

  for (let i = 0; i < drawState.chord_queue.length; i++) {
    let hor_pos = canvas.width * (1 - SPEED_OF_CHORDS * drawState.chord_queue[i].when);
    if (hor_pos > 0) {
      for (let j = 0; j < 6; j++) {
        if (drawState.chord_queue[i].chord[j] !== "x") {
          // context.strokeStyle = "black";
          // context.fillStyle = "white";
          // context.lineWidth = 4;
          context.globalAlpha = 0.5 * (hor_pos / canvas.width + (hor_pos / canvas.width) ** 0.5);
          drawArc(
            hor_pos,
            0.1 * (j + 2.5) * canvas.height,
            IMAGE_WIDTH / 2,
            0,
            360,
            // anticlockwise,
            "black",
            "white"
          );
          context.font = TEXT_HEIGHT + "px Comic Sans MS";
          context.fillStyle = TEXT_COLOR;
          context.textAlign = "center";
          context.fillText(
            drawState.chord_queue[i].chord[j],
            hor_pos,
            0.1 * (j + 2.5) * canvas.height + TEXT_HEIGHT / 3
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
