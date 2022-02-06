import { emitChord } from "./client-socket";

/** add other controls here */
const handleInput = (e) => {
  if (e.key === "A") {
    console.log("A major");
    emitChord(["x", 0, 2, 2, 2, 0]);
  } else if (e.key === "B") {
    console.log("B major");
    emitChord(["x", "x", 4, 4, 4, 2]);
  } else if (e.key === "C") {
    console.log("C major");
    emitChord(["x", 3, 0, 2, 1, 0]);
  } else if (e.key === "D") {
    console.log("D major");
    emitChord(["x", "x", 0, 2, 3, 2]);
  } else if (e.key === "E") {
    console.log("E major");
    emitChord([0, 2, 2, 1, 0, 0]);
  } else if (e.key === "F") {
    console.log("F major");
    emitChord([1, 3, 3, 2, 1, 1]);
  } else if (e.key === "G") {
    console.log("G major");
    emitChord([3, 2, 0, 0, 0, 3]);
  } else if (e.key === "a") {
    console.log("A minor");
    emitChord(["x", 0, 2, 2, 1, 0]);
  } else if (e.key === "b") {
    console.log("B minor");
    emitChord(["x", 2, 4, 4, 3, 2]);
  } else if (e.key === "b") {
    console.log("C minor");
    emitChord(["x", 3, 5, 5, 4, 3]);
  } else if (e.key === "d") {
    console.log("D minor");
    emitChord(["x", "x", 0, 2, 3, 1]);
  } else if (e.key === "e") {
    console.log("E minor");
    emitChord([0, 2, 2, 0, 0, 0]);
  } else if (e.key === "f") {
    console.log("F minor");
    emitChord([1, 3, 2, 1, 1, 1]);
  } else if (e.key === "g") {
    console.log("G minor");
    emitChord([3, 5, 5, 3, 3, 3]);
  }
};
window.addEventListener("keydown", handleInput);
