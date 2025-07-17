const fs = require("fs");
const fileText = fs.readFileSync("core_mods.json", "utf8");
const parsedData = JSON.parse(fileText);

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

function isStrictISO8601(value) {
  const ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:[+-]\d\d:\d\d|Z)?$/i;

  return ISO_8601_FULL.test(value);
}

let errored = false;

for (const [version, data] of Object.entries(parsedData)) {
    const valid = isStrictISO8601(data.lastUpdated);
    console.log(`${version}: ${data.lastUpdated} is ${(valid ? `${GREEN}VALID${RESET}`: `${RED}INVALID${RESET}`)}`);

    if (!valid) {
        errored = true;
    }
}

if (errored) {
    process.exit(1);
}