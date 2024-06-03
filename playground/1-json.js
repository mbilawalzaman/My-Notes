// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);

const fs = require("fs");

// Create a file.json
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

//Read a file.json
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
console.log(user);
