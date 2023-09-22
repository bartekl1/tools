fetch(
    window.navigator.language.split("-")[0] == "pl"
        ? "/tools/CHANGELOG_PL.md"
        : "/tools/CHANGELOG.md"
)
    .then((response) => {
        return response.text();
    })
    .then((md) => {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(md);
        document.querySelector("#info-changelog").innerHTML = html;
    });

fetch("/tools/LIBRARIES.md")
    .then((response) => {
        return response.text();
    })
    .then((md) => {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(md);
        document.querySelector("#info-libraries").innerHTML = html;
        document
            .querySelector("#info-libraries")
            .querySelectorAll("a")
            .forEach((e) => {
                e.rel = "noopener";
                e.target = "_blank";
            });
    });
