const { execSync } = require("child_process");
const fse = require("fs-extra");

const ignore = [
    "ignore",
    "node_modules",
    "configs.json",
    ".git",
    ".github",
    "build.js",
    "app.js",
];

console.log("Tools build script\n");

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
require("moment/min/locales");
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

console.log("Building dist ...");

if (fse.existsSync("./dist")) {
    fse.removeSync("./dist");
}

fse.mkdirSync("./dist");

fse.readdirSync(".").forEach((e) => {
    if (!ignore.includes(e) && e !== "dist") {
        fse.copySync(`./${e}`, `./dist/${e}`, {
            overwrite: true,
        });
    }
});

var configs;

try {
    configs = fse.readJSONSync("configs.json");
} catch (e) {
    configs = {};
    if (!e.message.includes("no such file or directory")) {
        throw e;
    }
}

var package = fse.readJsonSync("package.json");

if (
    configs["google-site-verification"] !== "" &&
    configs["google-site-verification"] !== undefined
) {
    fse.readdirSync("./dist").forEach((e) => {
        if (e.endsWith(".html")) {
            var file = fse.readFileSync(`./dist/${e}`, "utf-8");
            file = file.replace(
                "<google-site-verification></google-site-verification>",
                `<meta name="google-site-verification" content="${configs["google-site-verification"]}" />`
            );
            fse.writeFileSync(`./dist/${e}`, file, "utf-8");
        }
    });
}

var file = fse.readFileSync("./dist/info.html", "utf-8");
file = file.replace(
    '<span id="version"></span>',
    `<span id="version">${package.version}</span>`
);
fse.writeFileSync("./dist/info.html", file, "utf-8");

console.log("\nDone!");
