const tools = [
    {
        name: {
            english: "Calculator",
            polish: "Kalkulator",
        },
        icon: "bi-calculator-fill",
        href: "/tools/calculator.html",
        color: "blue",
        offline: true,
    },
    {
        name: {
            english: "IP",
            polish: "IP",
        },
        icon: "bi-globe",
        href: "/tools/ip.html",
        color: "green",
        offline: false,
    },
];

function setResultsPosition() {
    var searchResults = document.querySelector(".top-bar-search-results");
    if (searchResults !== null) {
        var rect = document
            .querySelector(".top-bar-search-group")
            .getBoundingClientRect();
        searchResults.style.width = rect.width + "px";
        searchResults.style.left = rect.left + "px";
        searchResults.style.top = rect.top + rect.height + 2 + "px";
    }
}

function topbarSearch(evt) {
    if (document.querySelector(".top-bar-search").value === "") {
        if (document.querySelector(".top-bar-search-results") === null) {
            var topBarSearchResults = document.createElement("div");
            topBarSearchResults.classList.add(
                "top-bar-search-results",
                "d-none"
            );
            document.querySelector("body").append(topBarSearchResults);
        }

        document
            .querySelector(".top-bar-search-results")
            .classList.add("d-none");
    } else {
        if (document.querySelector(".top-bar-search-results") === null) {
            var topBarSearchResults = document.createElement("div");
            topBarSearchResults.classList.add(
                "top-bar-search-results",
                "d-none"
            );
            document.querySelector("body").append(topBarSearchResults);
        }

        document.querySelector(".top-bar-search-results").innerHTML = "";

        tools.forEach((tool) => {
            if (
                (window.navigator.language.split("-")[0] == "pl"
                    ? tool.name.polish
                    : tool.name.english
                )
                    .toLowerCase()
                    .includes(
                        document
                            .querySelector(".top-bar-search")
                            .value.toLowerCase()
                    ) &&
                (navigator.onLine || tool.offline)
            ) {
                var topBarTool = document.createElement("a");
                topBarTool.href = tool.href;
                topBarTool.classList.add("top-bar-tool", tool.color);

                var topBarToolBody = document.createElement("div");
                topBarToolBody.classList.add("top-bar-tool-body");
                topBarTool.append(topBarToolBody);

                var topBarToolIconDiv = document.createElement("div");
                topBarToolIconDiv.classList.add("top-bar-tool-icon-div");
                topBarToolBody.append(topBarToolIconDiv);

                var topBarToolIcon = document.createElement("i");
                topBarToolIcon.classList.add(
                    "bi",
                    tool.icon,
                    "top-bar-tool-icon"
                );
                topBarToolIconDiv.append(topBarToolIcon);

                var topBarToolName = document.createElement("div");
                topBarToolName.classList.add("top-bar-tool-name");
                topBarToolBody.append(topBarToolName);

                var topBarToolNameText = document.createElement("span");
                topBarToolNameText.classList.add("top-bar-tool-name-text");
                topBarToolNameText.innerHTML =
                    window.navigator.language.split("-")[0] == "pl"
                        ? tool.name.polish
                        : tool.name.english;
                topBarToolName.append(topBarToolNameText);

                var clearfix = document.createElement("div");
                clearfix.classList.add("clearfix");
                topBarToolBody.append(clearfix);

                document
                    .querySelector(".top-bar-search-results")
                    .append(topBarTool);
            }
        });

        setResultsPosition();

        document
            .querySelector(".top-bar-search-results")
            .classList.remove("d-none");
    }
}

setResultsPosition();

navigator.windowControlsOverlay.addEventListener(
    "geometrychange",
    setResultsPosition
);

document
    .querySelector(".top-bar-search")
    .addEventListener("keyup", topbarSearch);

window.addEventListener("online", topbarSearch);
window.addEventListener("offline", topbarSearch);

addEventListener("keypress", (evt) => {
    if (evt.code === "KeyK" && evt.ctrlKey) {
        document.querySelector(".top-bar-search").focus();
    }
});
