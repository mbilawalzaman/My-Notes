//const Add = require("./utils");
// const fs = require("fs");
// fs.writeFileSync("notes.js", "My Notes.");
//fs.appendFileSync("note.txt", " I live in Pakistan.");
//const Sum = Add(2, 2);
//console.log("Total: ", Sum);

const validator = require("validator");
const getNotes = require("./notes.js");
const myNotes = getNotes();

console.log(myNotes);
console.log(validator.isURL("https://mead.io"));
