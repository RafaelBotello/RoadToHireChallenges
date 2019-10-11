// We use the Filesystem module to read our text file using their buit in functions.

var fs = require("fs");
fs.readFile("planets.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log("\x1b[35m%s'\x1b[0m", data);
});
