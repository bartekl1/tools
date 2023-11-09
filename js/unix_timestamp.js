setInterval(() => {
    document.querySelector("#current-timestamp").value = Math.floor(
        (Date.now() -
            (document.querySelector("#local").checked
                ? new Date().getTimezoneOffset() * 60 * 1000
                : 0)) /
            1000
    );
}, 500);

document.querySelector("#date").addEventListener("change", () => {
    document.querySelector("#timestamp").value = Math.floor(
        (new Date(document.querySelector("#date").value) -
            (document.querySelector("#local").checked
                ? new Date().getTimezoneOffset() * 60 * 1000
                : 0)) /
            1000
    );
});

document.querySelector("#timestamp").addEventListener("change", () => {
    document.querySelector("#date").value = new Date(
        document.querySelector("#timestamp").value * 1000 -
            (document.querySelector("#local").checked
                ? new Date().getTimezoneOffset() * 60 * 1000
                : 0)
    )
        .toISOString()
        .split(".")[0];
});

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
