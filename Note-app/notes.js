const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your Notes...";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(function (notes) {
  //   return notes.title === title;
  // });
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Notes added!"));
  } else {
    console.log(chalk.red.inverse("Notes title already taken!"));
  }
};

// Remove note function

const removeNotes = function (title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.green.inverse("Notes removed!"));
  } else {
    console.log(chalk.red.inverse("Notes not found!"));
  }
};

//  Get all list of title of notes command

const listNotes = function () {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.green.inverse("Your Notes:"));
    notes.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse("No notes found!"));
  }
};

// // Get single list of title of notes command

const getNote = function (title) {
  const notes = loadNotes();
  const note = notes.find((note) => {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.blue.inverse.underline.bold("My Note:-"));
    console.log("Title:", note.title);
    console.log("Body:", note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
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
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  getNote: getNote,
};
