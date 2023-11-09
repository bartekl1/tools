function convertToASCII() {
    var ascii = [];
    document
        .querySelector("#text")
        .value.split("")
        .forEach((e) => {
            ascii.push(e.charCodeAt(0));
        });
    document.querySelector("#ascii").value = ascii.join(" ");
}

function convertToText() {
    var text = "";
    document
        .querySelector("#ascii")
        .value.split(" ")
        .forEach((e) => {
            text += String.fromCharCode(Number(e));
        });
    document.querySelector("#text").value = text;
}

document.querySelector("#text").addEventListener("keyup", convertToASCII);
document.querySelector("#text").addEventListener("change", convertToASCII);

document.querySelector("#ascii").addEventListener("keyup", convertToText);
document.querySelector("#ascii").addEventListener("change", convertToText);

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
