function switchTab() {
    if (window.location.hash !== "") {
        try {
            document
                .querySelector(window.location.hash)
                .classList.remove("d-none");
            document
                .querySelectorAll(`.category-tab:not(${window.location.hash})`)
                .forEach((e) => {
                    e.classList.add("d-none");
                });
            document.querySelector("#category").value =
                window.location.hash.slice(1);
        } catch {}
    }
}

document.querySelector("#category").addEventListener("change", (evt) => {
    window.location.hash = evt.currentTarget.value;
});

switchTab();
addEventListener("hashchange", switchTab);

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

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
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

    document.querySelector("#length-meter").innerHTML = round(meters, decimals);

    document.querySelector("#length-kilometer").innerHTML = round(
        meters / 1000,
        decimals
    );
    document.querySelector("#length-decimeter").innerHTML = round(
        meters * 10,
        decimals
    );
    document.querySelector("#length-centimeter").innerHTML = round(
        meters * 100,
        decimals
    );
    document.querySelector("#length-millimeter").innerHTML = round(
        meters * 1000,
        decimals
    );
    document.querySelector("#length-micrometer").innerHTML = round(
        meters * 1_000_000,
        decimals
    );
    document.querySelector("#length-angstrom").innerHTML = round(
        meters * 10_000_000_000,
        decimals
    );
    document.querySelector("#length-inch").innerHTML = round(
        meters * (1000 / 25.4),
        decimals
    );
    document.querySelector("#length-foot").innerHTML = round(
        meters / 0.3048,
        decimals
    );
    document.querySelector("#length-yard").innerHTML = round(
        meters / 0.9144,
        decimals
    );
    document.querySelector("#length-land-mile").innerHTML = round(
        meters / 1_609.344,
        decimals
    );
    document.querySelector("#length-nautical-mile").innerHTML = round(
        meters / 1852,
        decimals
    );
    document.querySelector("#length-astronomical-unit").innerHTML = round(
        meters / 149_597_870_700,
        decimals
    );
    document.querySelector("#length-light-year").innerHTML = round(
        meters / (9.4607 * 10 ** 15),
        decimals
    );
    document.querySelector("#length-parsec").innerHTML = round(
        meters / (3.086 * 10 ** 16),
        decimals
    );
}

function convertArea() {
    if (document.querySelector("#area-input").value === "") {
        return;
    }

    if (document.querySelector("#area-input").checkValidity()) {
        document.querySelector("#area-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#area-input").classList.add("is-invalid");
        return;
    }

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
        return;
    }

    var squareMeters;

    if (document.querySelector("#area-unit").value === "square-meter") {
        squareMeters = parseFloat(document.querySelector("#area-input").value);
    } else if (
        document.querySelector("#area-unit").value === "square-kilometer"
    ) {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) * 1000 ** 2;
    } else if (
        document.querySelector("#area-unit").value === "square-decimeter"
    ) {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) / 10 ** 2;
    } else if (
        document.querySelector("#area-unit").value === "square-centimeter"
    ) {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) / 100 ** 2;
    } else if (
        document.querySelector("#area-unit").value === "square-millimeter"
    ) {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) / 1000 ** 2;
    } else if (document.querySelector("#area-unit").value === "are") {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) * 100;
    } else if (document.querySelector("#area-unit").value === "hectare") {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) * 10_000;
    } else if (document.querySelector("#area-unit").value === "acre") {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) *
            4046.8564224;
    } else if (document.querySelector("#area-unit").value === "square-inch") {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) /
            (1000 / 25.4) ** 2;
    } else if (document.querySelector("#area-unit").value === "square-foot") {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) *
            0.3048 ** 2;
    } else if (document.querySelector("#area-unit").value === "square-yard") {
        squareMeters =
            parseFloat(document.querySelector("#area-input").value) *
            0.9144 ** 2;
    }

    document.querySelector("#area-square-meter").innerHTML = round(
        squareMeters,
        decimals
    );

    document.querySelector("#area-square-kilometer").innerHTML = round(
        squareMeters / 1000 ** 2,
        decimals
    );
    document.querySelector("#area-square-decimeter").innerHTML = round(
        squareMeters * 10 ** 2,
        decimals
    );
    document.querySelector("#area-square-centimeter").innerHTML = round(
        squareMeters * 100 ** 2,
        decimals
    );
    document.querySelector("#area-square-millimeter").innerHTML = round(
        squareMeters * 1000 ** 2,
        decimals
    );
    document.querySelector("#area-are").innerHTML = round(
        squareMeters / 100,
        decimals
    );
    document.querySelector("#area-hectare").innerHTML = round(
        squareMeters / 10_000,
        decimals
    );
    document.querySelector("#area-acre").innerHTML = round(
        squareMeters / 4046.8564224,
        decimals
    );
    document.querySelector("#area-square-inch").innerHTML = round(
        squareMeters * (1000 / 25.4) ** 2,
        decimals
    );
    document.querySelector("#area-square-foot").innerHTML = round(
        squareMeters / 0.3048 ** 2,
        decimals
    );
    document.querySelector("#area-square-yard").innerHTML = round(
        squareMeters / 0.9144 ** 2,
        decimals
    );
}

function convertVolume() {
    if (document.querySelector("#volume-input").value === "") {
        return;
    }

    if (document.querySelector("#volume-input").checkValidity()) {
        document.querySelector("#volume-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#volume-input").classList.add("is-invalid");
        return;
    }

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
        return;
    }

    var cubicMeters;

    if (document.querySelector("#volume-unit").value === "cubic-meter") {
        cubicMeters = parseFloat(document.querySelector("#volume-input").value);
    } else if (
        document.querySelector("#volume-unit").value === "cubic-kilometer"
    ) {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) *
            1000 ** 3;
    } else if (
        document.querySelector("#volume-unit").value === "cubic-decimeter"
    ) {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) / 10 ** 3;
    } else if (
        document.querySelector("#volume-unit").value === "cubic-centimeter"
    ) {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) /
            100 ** 3;
    } else if (
        document.querySelector("#volume-unit").value === "cubic-millimeter"
    ) {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) /
            1000 ** 3;
    } else if (document.querySelector("#volume-unit").value === "cubic-inch") {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) /
            (1000 / 25.4) ** 3;
    } else if (document.querySelector("#volume-unit").value === "cubic-foot") {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) *
            0.3048 ** 3;
    } else if (document.querySelector("#volume-unit").value === "cubic-yard") {
        cubicMeters =
            parseFloat(document.querySelector("#volume-input").value) *
            0.9144 ** 3;
    } else if (
        document.querySelector("#volume-unit").value === "imperial-gallon"
    ) {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            4.54609;
    } else if (
        document.querySelector("#volume-unit").value === "us-liquid-gallon"
    ) {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            3.785411784;
    } else if (
        document.querySelector("#volume-unit").value === "us-dry-gallon"
    ) {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            4.40488377086;
    } else if (
        document.querySelector("#volume-unit").value === "imperial-bushel"
    ) {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            4.54609 *
            8;
    } else if (document.querySelector("#volume-unit").value === "us-bushel") {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            4.40488377086 *
            8;
    } else if (document.querySelector("#volume-unit").value === "oil-barrel") {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            3.785411784 *
            42;
    } else if (
        document.querySelector("#volume-unit").value === "imperial-barrel"
    ) {
        cubicMeters =
            (parseFloat(document.querySelector("#volume-input").value) / 1000) *
            4.54609 *
            36;
    }

    document.querySelector("#volume-cubic-meter").innerHTML = round(
        cubicMeters,
        decimals
    );

    document.querySelector("#volume-cubic-kilometer").innerHTML = round(
        cubicMeters / 1000 ** 3,
        decimals
    );
    document.querySelector("#volume-cubic-decimeter").innerHTML = round(
        cubicMeters * 10 ** 3,
        decimals
    );
    document.querySelector("#volume-cubic-centimeter").innerHTML = round(
        cubicMeters * 100 ** 3,
        decimals
    );
    document.querySelector("#volume-cubic-millimeter").innerHTML = round(
        cubicMeters * 1000 ** 3,
        decimals
    );
    document.querySelector("#volume-cubic-inch").innerHTML = round(
        cubicMeters * (1000 / 25.4) ** 3,
        decimals
    );
    document.querySelector("#volume-cubic-foot").innerHTML = round(
        cubicMeters / 0.3048 ** 3,
        decimals
    );
    document.querySelector("#volume-cubic-yard").innerHTML = round(
        cubicMeters / 0.9144 ** 3,
        decimals
    );
    document.querySelector("#volume-imperial-gallon").innerHTML = round(
        (cubicMeters * 1000) / 4.54609,
        decimals
    );
    document.querySelector("#volume-us-liquid-gallon").innerHTML = round(
        (cubicMeters * 1000) / 3.785411784,
        decimals
    );
    document.querySelector("#volume-us-dry-gallon").innerHTML = round(
        (cubicMeters * 1000) / 4.40488377086,
        decimals
    );
    document.querySelector("#volume-imperial-bushel").innerHTML = round(
        (cubicMeters * 1000) / 4.54609 / 8,
        decimals
    );
    document.querySelector("#volume-us-bushel").innerHTML = round(
        (cubicMeters * 1000) / 4.40488377086 / 8,
        decimals
    );
    document.querySelector("#volume-oil-barrel").innerHTML = round(
        (cubicMeters * 1000) / 3.785411784 / 42,
        decimals
    );
    document.querySelector("#volume-imperial-barrel").innerHTML = round(
        (cubicMeters * 1000) / 4.54609 / 36,
        decimals
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

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
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

    document.querySelector("#weight-kilogram").innerHTML = round(
        kilograms,
        decimals
    );

    document.querySelector("#weight-decagram").innerHTML = round(
        kilograms * 100,
        decimals
    );
    document.querySelector("#weight-gram").innerHTML = round(
        kilograms * 1000,
        decimals
    );
    document.querySelector("#weight-pound").innerHTML = round(
        kilograms / 0.453_592_37,
        decimals
    );
    document.querySelector("#weight-ounce").innerHTML = round(
        kilograms / 0.028_349_523_1,
        decimals
    );
    document.querySelector("#weight-carat").innerHTML = round(
        kilograms / (2 * 10 ** -4),
        decimals
    );
    document.querySelector("#weight-grain").innerHTML = round(
        kilograms / 0.000_064_798_91,
        decimals
    );
    document.querySelector("#weight-hundredweight-us").innerHTML = round(
        kilograms / 45.3592,
        decimals
    );
    document.querySelector("#weight-hundredweight-uk").innerHTML = round(
        kilograms / 50.8023,
        decimals
    );
    document.querySelector("#weight-ton-us").innerHTML = round(
        kilograms / 907.18,
        decimals
    );
    document.querySelector("#weight-ton-uk").innerHTML = round(
        kilograms / 1016.05,
        decimals
    );
    document.querySelector("#weight-ton").innerHTML = round(
        kilograms / 1000,
        decimals
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

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
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

    document.querySelector("#time-second").innerHTML = round(seconds, decimals);

    document.querySelector("#time-minute").innerHTML = round(
        seconds / 60,
        decimals
    );
    document.querySelector("#time-hour").innerHTML = round(
        seconds / (60 * 60),
        decimals
    );
    document.querySelector("#time-day").innerHTML = round(
        seconds / (60 * 60 * 24),
        decimals
    );
    document.querySelector("#time-week").innerHTML = round(
        seconds / (60 * 60 * 24 * 7),
        decimals
    );
    document.querySelector("#time-year").innerHTML = round(
        seconds / (60 * 60 * 24 * 365),
        decimals
    );
    document.querySelector("#time-nanosecond").innerHTML = round(
        seconds * 1000000000,
        decimals
    );
    document.querySelector("#time-microsecond").innerHTML = round(
        seconds * 1000000,
        decimals
    );
    document.querySelector("#time-millisecond").innerHTML = round(
        seconds * 1000,
        decimals
    );
    document.querySelector("#time-quarter").innerHTML = round(
        seconds / (60 * 15),
        decimals
    );
    document.querySelector("#time-decade").innerHTML = round(
        seconds / (60 * 60 * 24 * 365 * 10),
        decimals
    );
    document.querySelector("#time-age").innerHTML = round(
        seconds / (60 * 60 * 24 * 365 * 100),
        decimals
    );
    document.querySelector("#time-millennium").innerHTML = round(
        seconds / (60 * 60 * 24 * 365 * 1000),
        decimals
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

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
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

    document.querySelector("#temperature-kelvin").innerHTML = round(
        kelvins,
        decimals
    );

    document.querySelector("#temperature-celsius").innerHTML = round(
        kelvins - 273.15,
        decimals
    );
    document.querySelector("#temperature-fahrenheit").innerHTML = round(
        32 + (9 / 5) * (kelvins - 273.15),
        decimals
    );
}

function convertSpeed() {
    if (document.querySelector("#speed-input").value === "") {
        return;
    }

    if (document.querySelector("#speed-input").checkValidity()) {
        document.querySelector("#speed-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#speed-input").classList.add("is-invalid");
        return;
    }

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
        return;
    }

    var meterPerSecond;

    if (document.querySelector("#speed-unit").value === "meter-per-second") {
        meterPerSecond = parseFloat(
            document.querySelector("#speed-input").value
        );
    } else if (
        document.querySelector("#speed-unit").value === "kilometer-per-hour"
    ) {
        meterPerSecond =
            parseFloat(document.querySelector("#speed-input").value) / 3.6;
    } else if (
        document.querySelector("#speed-unit").value === "land-mile-per-hour"
    ) {
        meterPerSecond =
            parseFloat(document.querySelector("#speed-input").value) /
            (3600 / 1_609.344);
    } else if (document.querySelector("#speed-unit").value === "knot") {
        meterPerSecond =
            parseFloat(document.querySelector("#speed-input").value) /
            (3600 / 1852);
    } else if (document.querySelector("#speed-unit").value === "mach") {
        meterPerSecond =
            parseFloat(document.querySelector("#speed-input").value) * 340.3;
    } else if (
        document.querySelector("#speed-unit").value === "speed-of-light"
    ) {
        meterPerSecond =
            parseFloat(document.querySelector("#speed-input").value) *
            299_792_458;
    }

    document.querySelector("#speed-meter-per-second").innerHTML = round(
        meterPerSecond,
        decimals
    );

    document.querySelector("#speed-kilometer-per-hour").innerHTML = round(
        meterPerSecond * 3.6,
        decimals
    );
    document.querySelector("#speed-land-mile-per-hour").innerHTML = round(
        meterPerSecond * (3600 / 1_609.344),
        decimals
    );
    document.querySelector("#speed-knot").innerHTML = round(
        meterPerSecond * (3600 / 1852),
        decimals
    );
    document.querySelector("#speed-mach").innerHTML = round(
        meterPerSecond / 340.3,
        decimals
    );
    document.querySelector("#speed-speed-of-light").innerHTML = round(
        meterPerSecond / 299_792_458,
        decimals
    );
}

function convertSound() {
    if (document.querySelector("#sound-input").value === "") {
        return;
    }

    if (document.querySelector("#sound-input").checkValidity()) {
        document.querySelector("#sound-input").classList.remove("is-invalid");
    } else {
        document.querySelector("#sound-input").classList.add("is-invalid");
        return;
    }

    if (
        document.querySelector("#decimals-count").checkValidity() &&
        document.querySelector("#decimals-count").value !== ""
    ) {
        document
            .querySelector("#decimals-count")
            .classList.remove("is-invalid");
        var decimals = parseInt(
            document.querySelector("#decimals-count").value
        );
    } else {
        document.querySelector("#decimals-count").classList.add("is-invalid");
        return;
    }

    var bels;

    if (document.querySelector("#sound-unit").value === "bel") {
        bels = parseFloat(document.querySelector("#sound-input").value);
    } else if (document.querySelector("#sound-unit").value === "decibel") {
        bels = parseFloat(document.querySelector("#sound-input").value) / 10;
    } else if (document.querySelector("#sound-unit").value === "neper") {
        bels =
            parseFloat(document.querySelector("#sound-input").value) /
            (10 / (20 / Math.log(10)));
    }

    document.querySelector("#sound-bel").innerHTML = round(bels, decimals);

    document.querySelector("#sound-decibel").innerHTML = round(
        bels * 10,
        decimals
    );
    document.querySelector("#sound-neper").innerHTML = round(
        bels * (10 / (20 / Math.log(10))),
        decimals
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

document.querySelector("#area-input").addEventListener("keyup", convertArea);
document.querySelector("#area-input").addEventListener("change", convertArea);
document.querySelector("#area-unit").addEventListener("change", convertArea);

document
    .querySelector("#volume-input")
    .addEventListener("keyup", convertVolume);
document
    .querySelector("#volume-input")
    .addEventListener("change", convertVolume);
document
    .querySelector("#volume-unit")
    .addEventListener("change", convertVolume);

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

document.querySelector("#speed-input").addEventListener("keyup", convertSpeed);
document.querySelector("#speed-input").addEventListener("change", convertSpeed);
document.querySelector("#speed-unit").addEventListener("change", convertSpeed);

document.querySelector("#sound-input").addEventListener("keyup", convertSound);
document.querySelector("#sound-input").addEventListener("change", convertSound);
document.querySelector("#sound-unit").addEventListener("change", convertSound);

document.querySelector("#decimals-count").addEventListener("keyup", () => {
    convertLength();
    convertArea();
    convertVolume();
    convertWeight();
    convertTime();
    convertTemperature();
    convertSpeed();
    convertSound();
});
document.querySelector("#decimals-count").addEventListener("change", () => {
    convertLength();
    convertArea();
    convertVolume();
    convertWeight();
    convertTime();
    convertTemperature();
    convertSpeed();
    convertSound();
});

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
