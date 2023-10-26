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
            english: "Unit converter",
            polish: "Przelicznik jednostek",
        },
        icon: "bi-arrow-repeat",
        href: "/tools/unit_converter.html",
        color: "blue",
        offline: true,
    },
    {
        name: {
            english: "Roman numeral converter",
            polish: "Przelicznik liczb rzymskich",
        },
        icon: "bi-bank",
        href: "/tools/roman_numeral_converter.html",
        color: "blue",
        offline: true,
    },
    {
        name: {
            english: "Number system converter",
            polish: "Przelicznik systemów liczbowych",
        },
        icon: "bi-123",
        href: "/tools/number_system_converter.html",
        color: "green",
        offline: true,
    },
    // {
    //     name: {
    //         english: "HTTP (REST) client",
    //         polish: "Klient HTTP (REST)",
    //     },
    //     icon: "bi-wifi",
    //     href: "/tools/http.html",
    //     color: "green",
    //     offline: false,
    // },
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
    {
        name: {
            english: "User agent",
            polish: "User agent",
        },
        icon: "bi-display",
        href: "/tools/user_agent.html",
        color: "green",
        offline: true,
    },
    {
        name: {
            english: "JSON formatter",
            polish: "JSON formatter",
        },
        icon: "bi-braces",
        href: "/tools/json.html",
        color: "green",
        offline: true,
    },
    {
        name: {
            english: "Markdown renderer",
            polish: "Markdown renderer",
        },
        icon: "bi-markdown",
        href: "/tools/markdown.html",
        color: "green",
        offline: true,
    },
    {
        name: {
            english: "LaTeX renderer",
            polish: "LaTeX renderer",
        },
        icon: "bi-infinity",
        href: "/tools/latex.html",
        color: "green",
        offline: true,
    },
    {
        name: {
            english: "ASCII",
            polish: "ASCII",
        },
        icon: "bi-type",
        href: "/tools/ascii.html",
        color: "green",
        offline: true,
    },
    {
        name: {
            english: "Password generator",
            polish: "Generator haseł",
        },
        icon: "bi-key-fill",
        href: "/tools/password_generator.html",
        color: "yellow",
        offline: true,
    },
    {
        name: {
            english: "Hash",
            polish: "Hash",
        },
        icon: "bi-hash",
        href: "/tools/hash.html",
        color: "yellow",
        offline: true,
    },
    {
        name: {
            english: "Unix timestamp",
            polish: "Unix timestamp",
        },
        icon: "bi-clock",
        href: "/tools/unix_timestamp.html",
        color: "orange",
        offline: true,
    },
    {
        name: {
            english: "Random number generator",
            polish: "Generator liczb losowych",
        },
        icon: "bi-dice-5",
        href: "/tools/random_numbers.html",
        color: "gray",
        offline: true,
    },
    {
        name: {
            english: "GPS",
            polish: "GPS",
        },
        icon: "bi-geo-alt-fill",
        href: "/tools/gps.html",
        color: "gray",
        offline: true,
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

        if (
            document
                .querySelector(".top-bar-search-results")
                .querySelectorAll("div").length === 0
        ) {
            document
                .querySelector(".top-bar-search-results")
                .classList.add("d-none");
        }
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
