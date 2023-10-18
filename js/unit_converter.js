function round(n, p) {
    return Math.round(n * (10 ** p)) / (10 ** p)
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
    }

    document.querySelector('#length-meter').innerHTML = meters;

    document.querySelector('#length-kilometer').innerHTML = round(meters / 1000, 2);
    document.querySelector('#length-decimeter').innerHTML = round(meters * 10, 2);
    document.querySelector('#length-centimeter').innerHTML = round(meters * 100, 2);
    document.querySelector('#length-millimeter').innerHTML = round(meters * 1000, 2);
    document.querySelector('#length-micrometer').innerHTML = round(meters * 1_000_000, 2);
    document.querySelector('#length-angstrom').innerHTML = round(meters * 10_000_000_000, 2);
    document.querySelector('#length-inch').innerHTML = round((meters / 25.4 ) * 1000, 2);
    document.querySelector('#length-foot').innerHTML = round(meters / 0.3048, 2);
    document.querySelector('#length-yard').innerHTML = round(meters / 0.9144, 2);
    document.querySelector('#length-land-mile').innerHTML = round(meters / 1_609.344, 2);
    document.querySelector('#length-nautical-mile').innerHTML = round(meters / 1852, 2);
    document.querySelector('#length-astronomical-unit').innerHTML = round(meters / 149_597_870_700, 2);
    document.querySelector('#length-light-year').innerHTML = round(meters / (9.4607 * (10 ** 15)), 2);
    document.querySelector('#length-parsec').innerHTML = round(meters / (3.086 * (10 ** 16)), 2);
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
