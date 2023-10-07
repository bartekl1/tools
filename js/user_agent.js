document.querySelectorAll(".copy").forEach((e) => {
    e.addEventListener("click", (evt) => {
        navigator.clipboard.writeText(
            evt.currentTarget.parentElement.querySelector("input").value
        );

        evt.currentTarget.innerHTML = '<i class="bi bi-clipboard-check"></i>';

        setTimeout(
            (el) => {
                el.innerHTML = '<i class="bi bi-clipboard"></i>';
            },
            2000,
            evt.currentTarget
        );
    });
});

var userAgent = window.navigator.userAgent;
document.querySelector("#user-agent").value = userAgent;

var UAParser = Bowser.parse(userAgent);

document.querySelector("#browser").value = UAParser.browser.name;
if (UAParser.browser.version !== undefined) {
    document.querySelector("#browser").value += ` ${UAParser.browser.version}`;
}

document.querySelector("#os").value = UAParser.os.name;
if (UAParser.os.version !== undefined) {
    document.querySelector("#os").value += ` ${UAParser.os.version}`;
}
if (UAParser.os.versionName !== undefined) {
    document.querySelector("#os").value += ` (${UAParser.os.versionName})`;
}

document.querySelector("#engine").value = UAParser.engine.name;

document.querySelector("#device").value = UAParser.platform.type;

document.querySelector("#loading").classList.add("d-none");

document.querySelectorAll(".input-group.d-none").forEach((e) => {
    e.classList.remove("d-none");
});
