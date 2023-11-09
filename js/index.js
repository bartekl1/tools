function search() {
    document.querySelectorAll(".tool").forEach((e) => {
        e.classList.remove("d-none");
    });

    if (document.querySelector("#search") !== "") {
        document.querySelectorAll(".tool").forEach((e) => {
            if (
                !e
                    .querySelector(".tool-name-text")
                    .innerHTML.toLowerCase()
                    .includes(
                        document.querySelector("#search").value.toLowerCase()
                    )
            ) {
                e.classList.add("d-none");
            }
        });
    }

    document.querySelectorAll(".tool.dont-works-offline").forEach((e) => {
        if (!window.navigator.onLine) {
            e.classList.add("d-none");
        }
    });

    document.querySelectorAll(".tools-group").forEach((e1) => {
        var display = false;
        e1.querySelectorAll(".tool").forEach((e2) => {
            if (!e2.classList.contains("d-none")) {
                display = true;
            }
        });
        display ? e1.classList.remove("d-none") : e1.classList.add("d-none");
    });
}

function offline() {
    if (window.navigator.onLine) {
        document.querySelector("#offline").classList.add("d-none");
    } else {
        document.querySelector("#offline").classList.remove("d-none");
    }
    search();
}

if (!window.navigator.onLine) {
    offline();
}

window.addEventListener("online", offline);
window.addEventListener("offline", offline);

document.querySelector("#search").addEventListener("keyup", search);

var deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;

    if (getPWADisplayMode() == "browser") {
        document.querySelector("#install-app").classList.remove("d-none");
    }
});

document.querySelector("#install-app").addEventListener("click", async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        // const { outcome } = await deferredPrompt.userChoice;
        // if (outcome === "accepted") {
        //     deferredPrompt = null;
        // }
    }
});

window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");

    document.querySelector("#install-app").classList.add("d-none");
});

function getPWADisplayMode() {
    const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.matchMedia("(display-mode: window-controls-overlay)").matches;
    if (navigator.standalone || isStandalone) {
        return "standalone";
    }
    return "browser";
}

if (navigator.canShare) {
    document.querySelector("#share").addEventListener("click", () => {
        navigator.share({
            title:
                window.navigator.language.split("-")[0] == "pl"
                    ? "Narzędzia"
                    : "Tools",
            text:
                window.navigator.language.split("-")[0] == "pl"
                    ? "Strona z narzędziami matematycznymi i informatycznymi"
                    : "Website with math and IT tools",
            url: window.location.href,
        });
    });

    document.querySelector("#share").classList.remove("d-none");
}
