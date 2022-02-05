const UPDATES_PER_SEC = 60;
const PLAY_DELAY = 15;

const webState = {
  players: [], // {uid: userid, waiting: how many more frames till can play another chord}
  chord_queue: [], //{chord: the chord, when: how long ago it was sent}
};

const getIndexFromId = (id) => {
  let returning_index = null;
  for (let i = 0; i < webState.players.length; i++) {
    if (webState.players[i].uid == id) {
      returning_index = i;
    }
  }
  if (returning_index !== null) {
    return returning_index;
  } else {
    return "big error!";
  }
};

const addPlayer = (id) => {
  console.log("added player, player count went from");
  console.log(webState.players.length);
  //check if user unique maybe instead modify in that case
  webState.players.push({ uid: id, waiting: 0 });
  console.log("to");
  console.log(webState.players.length);
};

const removePlayer = (id) => {
  // delete webState.players[id];
  console.log("removed player, player count went from");
  console.log(webState.players.length);
  webState.players.splice(getIndexFromId(id), 1);
  console.log("to");
  console.log(webState.players.length);
};

const playChord = (id, chord) => {
  // console.log(id);
  // console.log(webState.players);
  // console.log(getIndexFromId(id));
  if (webState.players[getIndexFromId(id)].waiting === 0) {
    console.log("Played chord: " + chord);
    webState.chord_queue.push({ owner: id, chord: chord, when: 0 });
    webState.players[getIndexFromId(id)].waiting = PLAY_DELAY;
  } else {
    console.log("sorry wait a bit");
  }
};

const updateWebState = () => {
  for (let i = 0; i < webState.chord_queue.length; i++) {
    webState.chord_queue[i].when += 1 / UPDATES_PER_SEC;
  }
  for (let j = 0; j < webState.players.length; j++) {
    if (webState.players[j].waiting > 0) {
      webState.players[j].waiting -= 1;
    }
  }
};

//removes chords that are too long ago?
const removeChord = (chord_index) => {};

module.exports = {
  webState,
  addPlayer,
  removePlayer,
  playChord,
  updateWebState,
};
