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

    document.querySelector("#bars-number").value == 6
        ? document
              .querySelector("#temperature-coefficient-output-div")
              .classList.remove("d-none")
        : document
              .querySelector("#temperature-coefficient-output-div")
              .classList.add("d-none");
}

function calcFromBars() {
    document.querySelector("#resistance-output").classList.remove("is-invalid");
    document.querySelector("#tolerance-output").classList.remove("is-invalid");
    document
        .querySelector("#temperature-coefficient-output")
        .classList.remove("is-invalid");

    var resistance =
        parseInt(document.querySelector("#first-digit-select").value) * 10 +
        parseInt(document.querySelector("#second-digit-select").value);

    if (document.querySelector("#bars-number").value >= 5) {
        resistance *= 10;
        resistance += parseInt(
            document.querySelector("#third-digit-select").value
        );
    }

    resistance *= parseInt(document.querySelector("#multiplier-select").value);

    document.querySelector("#resistance-output").value = resistance;
    document.querySelector("#tolerance-output").value = parseInt(
        document.querySelector("#tolerance-select").value
    );
    document.querySelector("#temperature-coefficient-output").value = parseInt(
        document.querySelector("#temperature-coefficient-select").value
    );
}

function calcToBars() {
    document.querySelector("#resistance-output").classList.remove("is-invalid");
    document.querySelector("#tolerance-output").classList.remove("is-invalid");
    document
        .querySelector("#temperature-coefficient-output")
        .classList.remove("is-invalid");

    if (
        !document.querySelector("#resistance-output").checkValidity() ||
        Number(
            document
                .querySelector("#resistance-output")
                .value.substring(
                    document.querySelector("#bars-number").value >= 5 ? 3 : 2
                )
        ) != 0
    ) {
        document
            .querySelector("#resistance-output")
            .classList.add("is-invalid");

        return;
    }

    if (
        !Object.keys(toleranceColors).includes(
            document.querySelector("#tolerance-output").value
        )
    ) {
        document.querySelector("#tolerance-output").classList.add("is-invalid");
        return;
    }

    if (
        !Object.keys(temperatureCoefficientColors).includes(
            document.querySelector("#temperature-coefficient-output").value
        ) &&
        document.querySelector("#bars-number").value == 6
    ) {
        document
            .querySelector("#temperature-coefficient-output")
            .classList.add("is-invalid");
        return;
    }

    document.querySelector("#first-digit-select").value =
        document.querySelector("#resistance-output").value[0] || 0;
    document.querySelector("#second-digit-select").value =
        document.querySelector("#resistance-output").value[1] || 0;

    if (document.querySelector("#bars-number").value >= 5) {
        document.querySelector("#third-digit-select").value =
            document.querySelector("#resistance-output").value[2] || 0;
    }

    if (document.querySelector("#resistance-output").value != 0) {
        var multiplier =
            document.querySelector("#resistance-output").value /
            document
                .querySelector("#resistance-output")
                .value.substring(
                    0,
                    document.querySelector("#bars-number").value >= 5 ? 3 : 2
                );

        if (!Object.keys(multiplierColors).includes(String(multiplier))) {
            document
                .querySelector("#resistance-output")
                .classList.add("is-invalid");
            return;
        }

        document.querySelector("#multiplier-select").value = multiplier;
    }

    document.querySelector("#tolerance-select").value =
        document.querySelector("#tolerance-output").value;
    document.querySelector("#temperature-coefficient-select").value =
        document.querySelector("#temperature-coefficient-output").value;

    setColors();
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

document.querySelectorAll(".form-select").forEach((e) => {
    e.addEventListener("change", calcFromBars);
});

document.querySelectorAll(".form-control").forEach((e) => {
    e.addEventListener("change", calcToBars);
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
