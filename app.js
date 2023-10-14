const express = require("express");
const minimist = require("minimist");

const argv = require("minimist")(process.argv.slice(2));

if (argv.h || argv.help) {
    console.log("Tools server\n");
    console.log("Parameters:");
    console.log("\t-p <port>, --port <port>\tServer port");
    console.log("\t-h, --help\t\t\tHelp");

    process.exit();
}

var port = 3000;

if (typeof argv.p == "number") {
    port = argv.p;
} else if (typeof argv.port == "number") {
    port = argv.port;
}

const app = express();

app.get("/", (req, res) => {
    res.redirect("/tools");
});

app.use("/tools", express.static("."));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
