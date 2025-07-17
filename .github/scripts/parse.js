const fs = require("fs");
const fileText = fs.readFileSync("core_mods.json", "utf8");
const parsedData = JSON.parse(fileText);
const stringifiedJson = JSON.stringify(parsedData, null, "  ");

console.log(stringifiedJson);