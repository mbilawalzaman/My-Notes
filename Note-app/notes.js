const fs = require("fs");

const getNotes = function () {
  return "Your Notes...";
};
const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (notes) {
    return notes.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Notes added!");
  } else {
    console.log("notes title already taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = { getNotes: getNotes, addNotes: addNotes };
