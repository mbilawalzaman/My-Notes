//const Add = require("./utils");
// const fs = require("fs");
// fs.writeFileSync("notes.js", "My Notes.");
//fs.appendFileSync("note.txt", " I live in Pakistan.");
//const Sum = Add(2, 2);
//console.log("Total: ", Sum);
//const validator = require("validator");

// const myNotes = notes();
// const checkValidator = function (url) {
//  if (validator.isURL(url) === true) {
//  return chalk.green.bold(true);
//  } else {
//    return chalk.red("false");
//  }
//};
//console.log(myNotes);
//console.log(checkValidator("www.bilawal.com"));

//console.log(process.argv[2]);

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

// create add command

yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note title!",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// create remove command

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title!",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

// Get all list of title of command

yargs.command({
  command: "list",
  describe: "list your note",
  handler: function (argv) {
    notes.listNotes(argv.title);
  },
});

// Get single note title of command

yargs.command({
  command: "read",
  describe: "list your note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.getNote(argv.title);
  },
});

//console.log(process.argv);
//console.log(yargs.argv);

yargs.parse();
