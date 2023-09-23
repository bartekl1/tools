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
