const { exec } = require("child_process");
const fse = require("fs-extra");

console.log("Tools build script\n");

console.log("Installing dependencies ...");

exec("npm install", (err, stdout, stderr) => {
    if (err) {
        process.exit();
    }
});

if (!fse.existsSync("build")) {
    fse.mkdirSync("build");
}

console.log("Removing old libraries ...");

try {
    fse.moveSync("./js/modules", "./build/modules/js", { overwrite: true });
    fse.moveSync("./css/modules", "./build/modules/css", { overwrite: true });
} catch {}

if (!fse.existsSync("./js/modules")) {
    fse.mkdirSync("./js/modules");
}

if (!fse.existsSync("./css/modules")) {
    fse.mkdirSync("./css/modules");
}

console.log("Copying Bootstrap files ...");

fse.copySync(
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./css/modules/bootstrap.min.css",
    { overwrite: true }
);
fse.copySync(
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    "./js/modules/bootstrap.bundle.min.js",
    { overwrite: true }
);

console.log("Copying Bootstrap Icons files ...");

fse.copySync(
    "./node_modules/bootstrap-icons/font",
    "./css/modules/bootstrap-icons",
    { overwrite: true }
);

console.log("Copying Showdown files ...");

fse.copySync(
    "./node_modules/showdown/dist/showdown.min.js",
    "./js/modules/showdown.min.js",
    { overwrite: true }
);

console.log("Copying crypto-js files ...");

if (!fse.existsSync("./js/modules/crypto-js")) {
    fse.mkdirSync("./js/modules/crypto-js");
}

[
    "core.js",
    "x64-core.js",
    "md5.js",
    "sha1.js",
    "sha256.js",
    "sha224.js",
    "sha512.js",
    "sha384.js",
    "sha3.js",
    "ripemd160.js",
].forEach((filename) => {
    fse.copySync(
        `./node_modules/crypto-js/${filename}`,
        `./js/modules/crypto-js/${filename}`,
        { overwrite: true }
    );
});

console.log("Building Bowser and copying files ...");

fse.writeFileSync(
    "./build/bowser.js",
    `const Bowser = require("bowser");
global.Bowser = Bowser;
`
);

exec(
    "browserify ./build/bowser.js -o ./build/bowser.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }

        fse.copySync("./build/bowser.bundle.js", "./js/modules/bowser.js", {
            overwrite: true,
        });
    }
);

console.log("Cleaning up ...");

fse.removeSync("./build", { recursive: true, force: true });

console.log("\nDone!");