const fs = require('fs');

let fileData = "";
function fileReadCallback(err, data) {
    console.log(data);
    fileData = data;
}

fs.readFile("a.txt", "utf-8", fileReadCallback);

// module.exports = fileReadCallback;