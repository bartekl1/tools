fetch(
    window.navigator.language.split("-")[0] == "pl"
        ? "/tools/CHANGELOG_PL.md"
        : "/tools/CHANGELOG.md"
)
    .then((response) => {
        return response.text();
    })
    .then((md) => {
        md = md.split("\n").slice(1).join("\n");
        var converter = new showdown.Converter();
        var html = converter.makeHtml(md);
        document.querySelector("#info-changelog").innerHTML = html;
    });

fetch(
    window.navigator.language.split("-")[0] == "pl"
        ? "/tools/ACKNOWLEDGEMENTS_PL.md"
        : "/tools/ACKNOWLEDGEMENTS.md"
)
    .then((response) => {
        return response.text();
    })
    .then((md) => {
        md = md.split("\n").slice(1).join("\n");
        var converter = new showdown.Converter();
        var html = converter.makeHtml(md);
        document.querySelector("#info-acknowledgements").innerHTML = html;
        document
            .querySelector("#info-acknowledgements")
            .querySelectorAll("a")
            .forEach((e) => {
                e.rel = "noopener";
                e.target = "_blank";
            });
    });

const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
});
