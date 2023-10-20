function round(n, p) {
    return Math.round(n * 10 ** p) / 10 ** p;
}

function convertLength() {
    if (document.querySelector("#length-input").value === "") {
        return;
    }

    if (document.querySelector("#length-input").checkValidity()) {
        document.querySelector("#length-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#length-input").classList.add("is-invalid");
        return;
    }

    var meters;

    if (document.querySelector("#length-unit").value === "meter") {
        meters = parseFloat(document.querySelector("#length-input").value);
    } else if (document.querySelector("#length-unit").value === "kilometer") {
        meters =
            parseFloat(document.querySelector("#length-input").value) * 1000;
    } else if (document.querySelector("#length-unit").value === "decimeter") {
        meters = parseFloat(document.querySelector("#length-input").value) / 10;
    } else if (document.querySelector("#length-unit").value === "centimeter") {
        meters =
            parseFloat(document.querySelector("#length-input").value) / 100;
    } else if (document.querySelector("#length-unit").value === "millimeter") {
        meters =
            parseFloat(document.querySelector("#length-input").value) / 1000;
    } else if (document.querySelector("#length-unit").value === "micrometer") {
        meters =
            parseFloat(document.querySelector("#length-input").value) /
            1_000_000;
    } else if (document.querySelector("#length-unit").value === "angstrom") {
        meters =
            parseFloat(document.querySelector("#length-input").value) /
            10_000_000_000;
    } else if (document.querySelector("#length-unit").value === "inch") {
        meters =
            (parseFloat(document.querySelector("#length-input").value) * 25.4) /
            1000;
    } else if (document.querySelector("#length-unit").value === "foot") {
        meters =
            parseFloat(document.querySelector("#length-input").value) * 0.3048;
    } else if (document.querySelector("#length-unit").value === "yard") {
        meters =
            parseFloat(document.querySelector("#length-input").value) * 0.9144;
    } else if (document.querySelector("#length-unit").value === "land-mile") {
        meters =
            parseFloat(document.querySelector("#length-input").value) *
            1_609.344;
    } else if (
        document.querySelector("#length-unit").value === "nautical-mile"
    ) {
        meters =
            parseFloat(document.querySelector("#length-input").value) * 1852;
    } else if (
        document.querySelector("#length-unit").value === "astronomical-unit"
    ) {
        meters =
            parseFloat(document.querySelector("#length-input").value) *
            149_597_870_700;
    } else if (document.querySelector("#length-unit").value === "light-year") {
        meters =
            parseFloat(document.querySelector("#length-input").value) *
            (9.4607 * 10 ** 15);
    } else if (document.querySelector("#length-unit").value === "parsec") {
        meters =
            parseFloat(document.querySelector("#length-input").value) *
            (3.086 * 10 ** 16);
    }

    document.querySelector("#length-meter").innerHTML = round(meters, 2);

    document.querySelector("#length-kilometer").innerHTML = round(
        meters / 1000,
        2
    );
    document.querySelector("#length-decimeter").innerHTML = round(
        meters * 10,
        2
    );
    document.querySelector("#length-centimeter").innerHTML = round(
        meters * 100,
        2
    );
    document.querySelector("#length-millimeter").innerHTML = round(
        meters * 1000,
        2
    );
    document.querySelector("#length-micrometer").innerHTML = round(
        meters * 1_000_000,
        2
    );
    document.querySelector("#length-angstrom").innerHTML = round(
        meters * 10_000_000_000,
        2
    );
    document.querySelector("#length-inch").innerHTML = round(
        (meters / 25.4) * 1000,
        2
    );
    document.querySelector("#length-foot").innerHTML = round(
        meters / 0.3048,
        2
    );
    document.querySelector("#length-yard").innerHTML = round(
        meters / 0.9144,
        2
    );
    document.querySelector("#length-land-mile").innerHTML = round(
        meters / 1_609.344,
        2
    );
    document.querySelector("#length-nautical-mile").innerHTML = round(
        meters / 1852,
        2
    );
    document.querySelector("#length-astronomical-unit").innerHTML = round(
        meters / 149_597_870_700,
        2
    );
    document.querySelector("#length-light-year").innerHTML = round(
        meters / (9.4607 * 10 ** 15),
        2
    );
    document.querySelector("#length-parsec").innerHTML = round(
        meters / (3.086 * 10 ** 16),
        2
    );
}

function convertWeight() {
    if (document.querySelector("#weight-input").value === "") {
        return;
    }

    if (document.querySelector("#weight-input").checkValidity()) {
        document.querySelector("#weight-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#weight-input").classList.add("is-invalid");
        return;
    }

    var kilograms;

    if (document.querySelector("#weight-unit").value === "kilogram") {
        kilograms = parseFloat(document.querySelector("#weight-input").value);
    } else if (document.querySelector("#weight-unit").value === "decagram") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) / 100;
    } else if (document.querySelector("#weight-unit").value === "gram") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) / 1000;
    } else if (document.querySelector("#weight-unit").value === "pound") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) *
            0.453_592_37;
    } else if (document.querySelector("#weight-unit").value === "ounce") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) *
            0.028_349_523_1;
    } else if (document.querySelector("#weight-unit").value === "carat") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) *
            (2 * 10 ** -4);
    } else if (document.querySelector("#weight-unit").value === "grain") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) *
            0.000_064_798_91;
    } else if (
        document.querySelector("#weight-unit").value === "hundredweight-us"
    ) {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) * 45.3592;
    } else if (
        document.querySelector("#weight-unit").value === "hundredweight-uk"
    ) {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) * 50.8023;
    } else if (document.querySelector("#weight-unit").value === "ton-us") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) * 907.18;
    } else if (document.querySelector("#weight-unit").value === "ton-uk") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) * 1016.05;
    } else if (document.querySelector("#weight-unit").value === "ton") {
        kilograms =
            parseFloat(document.querySelector("#weight-input").value) * 1000;
    }

    document.querySelector("#weight-kilogram").innerHTML = round(kilograms, 2);

    document.querySelector("#weight-decagram").innerHTML = round(
        kilograms * 100,
        2
    );
    document.querySelector("#weight-gram").innerHTML = round(
        kilograms * 1000,
        2
    );
    document.querySelector("#weight-pound").innerHTML = round(
        kilograms / 0.453_592_37,
        2
    );
    document.querySelector("#weight-ounce").innerHTML = round(
        kilograms / 0.028_349_523_1,
        2
    );
    document.querySelector("#weight-carat").innerHTML = round(
        kilograms / (2 * 10 ** -4),
        2
    );
    document.querySelector("#weight-grain").innerHTML = round(
        kilograms / 0.000_064_798_91,
        2
    );
    document.querySelector("#weight-hundredweight-us").innerHTML = round(
        kilograms / 45.3592,
        2
    );
    document.querySelector("#weight-hundredweight-uk").innerHTML = round(
        kilograms / 50.8023,
        2
    );
    document.querySelector("#weight-ton-us").innerHTML = round(
        kilograms / 907.18,
        2
    );
    document.querySelector("#weight-ton-uk").innerHTML = round(
        kilograms / 1016.05,
        2
    );
    document.querySelector("#weight-ton").innerHTML = round(
        kilograms / 1000,
        2
    );
}

function convertTime() {
    if (document.querySelector("#time-input").value === "") {
        return;
    }

    if (document.querySelector("#time-input").checkValidity()) {
        document.querySelector("#time-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#time-input").classList.add("is-invalid");
        return;
    }

    var seconds;

    if (document.querySelector("#time-unit").value === "second") {
        seconds = parseFloat(document.querySelector("#time-input").value);
    } else if (document.querySelector("#time-unit").value === "minute") {
        seconds = parseFloat(document.querySelector("#time-input").value) * 60;
    } else if (document.querySelector("#time-unit").value === "hour") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) * (60 * 60);
    } else if (document.querySelector("#time-unit").value === "day") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) *
            (60 * 60 * 24);
    } else if (document.querySelector("#time-unit").value === "week") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) *
            (60 * 60 * 24 * 7);
    } else if (document.querySelector("#time-unit").value === "year") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) *
            (60 * 60 * 24 * 365);
    } else if (document.querySelector("#time-unit").value === "nanosecond") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) /
            1000000000;
    } else if (document.querySelector("#time-unit").value === "microsecond") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) / 1000000;
    } else if (document.querySelector("#time-unit").value === "millisecond") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) / 1000;
    } else if (document.querySelector("#time-unit").value === "quarter") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) * (60 * 15);
    } else if (document.querySelector("#time-unit").value === "decade") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) *
            (60 * 60 * 24 * 365 * 10);
    } else if (document.querySelector("#time-unit").value === "age") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) *
            (60 * 60 * 24 * 365 * 100);
    } else if (document.querySelector("#time-unit").value === "millennium") {
        seconds =
            parseFloat(document.querySelector("#time-input").value) *
            (60 * 60 * 24 * 365 * 1000);
    }

    document.querySelector("#time-second").innerHTML = round(seconds, 2);

    document.querySelector("#time-minute").innerHTML = round(seconds / 60, 2);
    document.querySelector("#time-hour").innerHTML = round(
        seconds / (60 * 60),
        2
    );
    document.querySelector("#time-day").innerHTML = round(
        seconds / (60 * 60 * 24),
        2
    );
    document.querySelector("#time-week").innerHTML = round(
        seconds / (60 * 60 * 24 * 7),
        2
    );
    document.querySelector("#time-year").innerHTML = round(
        seconds / (60 * 60 * 24 * 365),
        2
    );
    document.querySelector("#time-nanosecond").innerHTML = round(
        seconds * 1000000000,
        2
    );
    document.querySelector("#time-microsecond").innerHTML = round(
        seconds * 1000000,
        2
    );
    document.querySelector("#time-millisecond").innerHTML = round(
        seconds * 1000,
        2
    );
    document.querySelector("#time-quarter").innerHTML = round(
        seconds / (60 * 15),
        2
    );
    document.querySelector("#time-decade").innerHTML = round(
        seconds / (60 * 60 * 24 * 365 * 10),
        2
    );
    document.querySelector("#time-age").innerHTML = round(
        seconds / (60 * 60 * 24 * 365 * 100),
        2
    );
    document.querySelector("#time-millennium").innerHTML = round(
        seconds / (60 * 60 * 24 * 365 * 1000),
        2
    );
}

function convertTemperature() {
    if (document.querySelector("#temperature-input").value === "") {
        return;
    }

    if (document.querySelector("#temperature-input").checkValidity()) {
        document
            .querySelector("#temperature-input")
            .classList.remove("is-invalid");
    } else {
        document
            .querySelector("#temperature-input")
            .classList.add("is-invalid");
        return;
    }

    var kelvins;

    if (document.querySelector("#temperature-unit").value === "kelvin") {
        kelvins = parseFloat(
            document.querySelector("#temperature-input").value
        );
    } else if (
        document.querySelector("#temperature-unit").value === "celsius"
    ) {
        kelvins =
            parseFloat(document.querySelector("#temperature-input").value) +
            273.15;
    } else if (
        document.querySelector("#temperature-unit").value === "fahrenheit"
    ) {
        kelvins =
            (5 / 9) *
                (parseFloat(
                    document.querySelector("#temperature-input").value
                ) -
                    32) +
            273.15;
    }

    document.querySelector("#temperature-kelvin").innerHTML = round(kelvins, 2);

    document.querySelector("#temperature-celsius").innerHTML = round(
        kelvins - 273.15,
        2
    );
    document.querySelector("#temperature-fahrenheit").innerHTML = round(
        32 + (9 / 5) * (kelvins - 273.15),
        2
    );
}

document
    .querySelector("#length-input")
    .addEventListener("keyup", convertLength);
document
    .querySelector("#length-input")
    .addEventListener("change", convertLength);
document
    .querySelector("#length-unit")
    .addEventListener("change", convertLength);

document
    .querySelector("#weight-input")
    .addEventListener("keyup", convertWeight);
document
    .querySelector("#weight-input")
    .addEventListener("change", convertWeight);
document
    .querySelector("#weight-unit")
    .addEventListener("change", convertWeight);

document.querySelector("#time-input").addEventListener("keyup", convertTime);
document.querySelector("#time-input").addEventListener("change", convertTime);
document.querySelector("#time-unit").addEventListener("change", convertTime);

document
    .querySelector("#temperature-input")
    .addEventListener("keyup", convertTemperature);
document
    .querySelector("#temperature-input")
    .addEventListener("change", convertTemperature);
document
    .querySelector("#temperature-unit")
    .addEventListener("change", convertTemperature);

document.querySelectorAll(".copy").forEach((e) => {
    e.addEventListener("click", (evt) => {
        var element = evt.currentTarget;
        while (element.tagName !== "TR") {
            element = element.parentElement;
        }
        navigator.clipboard.writeText(
            element.querySelector(".value").innerHTML
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
