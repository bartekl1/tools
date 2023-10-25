document.querySelector("#format").addEventListener("click", () => {
    document.querySelector("#input").classList.remove("is-invalid");
    try {
        var raw = document.querySelector("#input").value;
        var json = JSON.parse(raw);
        var output = JSON.stringify(json, null, 4);
        document.querySelector("#output").value = output;
    } catch {
        document.querySelector("#input").classList.add("is-invalid");
    }
});

document.querySelector("#copy").addEventListener("click", (evt) => {
    navigator.clipboard.writeText(document.querySelector("#output").value);

    evt.currentTarget.querySelector("i.bi").outerHTML =
        '<i class="bi bi-clipboard-check"></i>';

    setTimeout(
        (el) => {
            el.querySelector("i.bi").outerHTML =
                '<i class="bi bi-clipboard"></i>';
        },
        2000,
        evt.currentTarget
    );
});
