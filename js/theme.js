document
    .querySelector("html")
    .setAttribute(
        "data-bs-theme",
        window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        document
            .querySelector("html")
            .setAttribute("data-bs-theme", event.matches ? "dark" : "light");
    });
