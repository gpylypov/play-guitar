import { emitChord } from "./client-socket";

/** add other controls here */
const handleInput = (e) => {
  if (e.key === "A") {
    console.log("A major");
    emitChord(["x", 0, 2, 2, 2, 0]);
  } else if (e.key === "G") {
    console.log("G major");
    emitChord([3, 2, 0, 0, 0, 3]);
  } else if (e.key === "C") {
    console.log("C major");
    emitChord(["x", 3, 0, 2, 1, 0]);
  } else if (e.key === "d") {
    console.log("D minor");
    emitChord(["x", "x", 0, 2, 3, 1]);
  }
};
window.addEventListener("keydown", handleInput);
