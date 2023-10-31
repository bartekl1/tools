const { execSync } = require("child_process");
const fse = require("fs-extra");

console.log("Tools build script\n");

console.log("Installing dependencies ...");

execSync("npm install", (err, stdout, stderr) => {
    if (err) {
        process.exit();
    }
});

if (!fse.existsSync("./build")) {
    fse.mkdirSync("./build");
}

console.log("Removing old libraries ...");

fse.removeSync("./js/modules");
fse.removeSync("./css/modules");

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

execSync(
    "browserify ./build/bowser.js -o ./build/bowser.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }
    }
);

fse.copySync("./build/bowser.bundle.js", "./js/modules/bowser.js", {
    overwrite: true,
});

console.log("Copying LaTeX.js files ...");

fse.copySync("./node_modules/latex.js/dist", "./js/modules/latex", {
    overwrite: true,
});

console.log("Building qrcode and copying files ...");

fse.writeFileSync(
    "./build/qrcode.js",
    `const QRCode = require("qrcode");
global.QRCode = QRCode;
`
);

execSync(
    "browserify ./build/qrcode.js -o ./build/qrcode.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }
    }
);

fse.copySync("./build/qrcode.bundle.js", "./js/modules/qrcode.js", {
    overwrite: true,
});

console.log("Building Moment.js and copying files ...");

fse.writeFileSync(
    "./build/moment.js",
    `const moment = require("moment-timezone");
global.moment = moment;
`
);

execSync(
    "browserify ./build/moment.js -o ./build/moment.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }
    }
);

fse.copySync("./build/moment.bundle.js", "./js/modules/moment.js", {
    overwrite: true,
});

console.log("Cleaning up ...");

fse.removeSync("./build", { recursive: true, force: true });

console.log("\nDone!");
