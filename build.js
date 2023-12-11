const { execSync } = require("child_process");
const fse = require("fs-extra");

const ignore = [
    "ignore",
    "node_modules",
    "configs.json",
    ".git",
    ".gitignore",
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

console.log("Building random-js and copying files ...");

fse.writeFileSync(
    "./build/random.js",
    `const random = require("random-js");
global.random = random;
`
);

execSync(
    "browserify ./build/random.js -o ./build/random.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }
    }
);

fse.copySync("./build/random.bundle.js", "./js/modules/random.js", {
    overwrite: true,
});

console.log("Building csv and copying files ...");

fse.writeFileSync(
    "./build/csv.js",
    `const csv = require("csv");
global.csv = csv;
`
);

execSync(
    "browserify ./build/csv.js -o ./build/csv.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }
    }
);

fse.copySync("./build/csv.bundle.js", "./js/modules/csv.js", {
    overwrite: true,
});

console.log("Building totp-generator and copying files ...");

fse.writeFileSync(
    "./build/totp_generator.js",
    `const totp = require("totp-generator");
global.totp = totp;
`
);

execSync(
    "browserify ./build/totp_generator.js -o ./build/totp_generator.bundle.js",
    (err, stdout, stderr) => {
        if (err) {
            process.exit();
        }
    }
);

fse.copySync(
    "./build/totp_generator.bundle.js",
    "./js/modules/totp_generator.js",
    {
        overwrite: true,
    }
);

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

fse.readdirSync("./dist").forEach((e) => {
    if (e.endsWith(".html")) {
        var file = fse.readFileSync(`./dist/${e}`, "utf-8");
        file = file.replace(
            '<meta name="google-site-verification">',
            configs["google-site-verification"] !== "" &&
                configs["google-site-verification"] !== undefined
                ? `<meta name="google-site-verification" content="${configs["google-site-verification"]}" />`
                : ""
        );
        fse.writeFileSync(`./dist/${e}`, file, "utf-8");
    }
});

fse.readdirSync("./dist").forEach((e) => {
    if (e.endsWith(".html")) {
        var file = fse.readFileSync(`./dist/${e}`, "utf-8");
        file = file.replace(
            '<meta name="google-analytics">',
            configs["google-analytics"] !== "" &&
                configs["google-analytics"] !== undefined
                ? `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${configs["google-analytics"]}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${configs["google-analytics"]}');
    </script>`
                : ""
        );

        file = file.replace(
            '<div id="cookies-info"></div>',
            configs["google-analytics"] !== "" &&
                configs["google-analytics"] !== undefined
                ? `<div id="cookies-info" class="d-flex d-none position-fixed bottom-0 start-0 w-100 bg-body-secondary px-3 py-1">
        <div class="cookie-icon">
            <i class="bi bi-cookie"></i>
        </div>
        <div class="fs-5 ms-3 my-3">
            <div text-id="255">Website uses cookies for statistical purposes.</div>
            <!-- <div text-id="256">If you do not agree to their use, withdraw the website's permission to use them in your browser settings or use the tracking script blocker.</div> -->
        </div>
        <button type="button" class="btn-close my-3 me-1 m-auto" id="accept-cookies"></button>
    </div>

    <script>
        if (localStorage.getItem('cookies-accepted') !== 'true') {
            document.querySelector('#cookies-info').classList.remove('d-none');
        }

        document.querySelector('#accept-cookies').addEventListener('click', () => {
            document.querySelector('#cookies-info').classList.add('d-none');
            localStorage.setItem('cookies-accepted', 'true');
        })
    </script>`
                : ""
        );

        fse.writeFileSync(`./dist/${e}`, file, "utf-8");
    }
});

var file = fse.readFileSync("./dist/info.html", "utf-8");
file = file.replace(
    '<span id="version"></span>',
    `<span id="version">${package.version}</span>`
);
fse.writeFileSync("./dist/info.html", file, "utf-8");

if (configs["website-url"] !== "" && configs["website-url"] !== undefined) {
    var file1 = fse.readFileSync("./dist/sitemap.xml", "utf-8");
    file1 = file1.replaceAll(
        /<loc>(.*)<\/loc>/g,
        `<loc>${configs["website-url"]}$1</loc>`
    );
    fse.writeFileSync("./dist/sitemap.xml", file1, "utf-8");

    var file2 = fse.readFileSync("./dist/robots.txt", "utf-8");
    file2 = file2.replaceAll(
        /Sitemap: (.*)/g,
        `Sitemap: ${configs["website-url"]}$1`
    );
    fse.writeFileSync("./dist/robots.txt", file2, "utf-8");
}

console.log("\nDone!");
