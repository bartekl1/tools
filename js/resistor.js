const digitsColors = {
    0: "black",
    1: "brown",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "violet",
    8: "gray",
    9: "white",
};

const multiplierColors = {
    1: "black",
    10: "brown",
    100: "red",
    1000: "orange",
    10000: "yellow",
    100000: "green",
    1000000: "blue",
    10000000: "violet",
    0.1: "gold",
    0.01: "silver",
};

const toleranceColors = {
    1: "brown",
    2: "red",
    0.5: "green",
    0.25: "blue",
    0.1: "violet",
    0.05: "gray",
    5: "gold",
    10: "silver",
};

const temperatureCoefficientColors = {
    250: "black",
    100: "brown",
    50: "red",
    25: "yellow",
    20: "green",
    10: "blue",
    5: "violet",
    1: "gray",
};

function setColors() {
    document.querySelector("#first-digit").style.fillOpacity = "1";
    document.querySelector("#second-digit").style.fillOpacity = "1";
    document.querySelector("#third-digit").style.fillOpacity =
        document.querySelector("#bars-number").value > 4 ? "1" : "0";
    document.querySelector("#multiplier").style.fillOpacity = "1";
    document.querySelector("#tolerance").style.fillOpacity = "1";
    document.querySelector("#temperature-coefficient").style.fillOpacity =
        document.querySelector("#bars-number").value == 6 ? "1" : "0";

    document.querySelector("#first-digit").style.fill =
        digitsColors[document.querySelector("#first-digit-select").value];
    document.querySelector("#second-digit").style.fill =
        digitsColors[document.querySelector("#second-digit-select").value];
    document.querySelector("#third-digit").style.fill =
        digitsColors[document.querySelector("#third-digit-select").value];
    document.querySelector("#multiplier").style.fill =
        multiplierColors[document.querySelector("#multiplier-select").value];
    document.querySelector("#tolerance").style.fill =
        toleranceColors[document.querySelector("#tolerance-select").value];
    document.querySelector("#temperature-coefficient").style.fill =
        temperatureCoefficientColors[
            document.querySelector("#temperature-coefficient-select").value
        ];
}

fetch("/tools/img/resistor.svg")
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        document.querySelector("#resistor-div").innerHTML = text;

        setColors();
    });

document.querySelectorAll(".form-select").forEach((e) => {
    e.addEventListener("change", setColors);
});

document.querySelector("#bars-number").addEventListener("change", () => {
    document.querySelector("#bars-number").value > 4
        ? document.querySelector("#third-digit-div").classList.remove("d-none")
        : document.querySelector("#third-digit-div").classList.add("d-none");

    document.querySelector("#bars-number").value == 6
        ? document
              .querySelector("#temperature-coefficient-div")
              .classList.remove("d-none")
        : document
              .querySelector("#temperature-coefficient-div")
              .classList.add("d-none");

    document.querySelector("#bars-number").value == 6
        ? document
              .querySelector("#temperature-coefficient-output-div")
              .classList.remove("d-none")
        : document
              .querySelector("#temperature-coefficient-output-div")
              .classList.add("d-none");
});
