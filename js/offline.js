function offline() {
    if (window.navigator.onLine) {
        document.querySelector("#tool-page").classList.remove("d-none");
        document.querySelector("#offline").classList.add("d-none");
    } else {
        document.querySelector("#tool-page").classList.add("d-none");
        document.querySelector("#offline").classList.remove("d-none");
    }
}

if (!window.navigator.onLine) {
    offline();
}

window.addEventListener("online", offline);
window.addEventListener("offline", offline);
