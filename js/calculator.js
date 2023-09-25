function switchCalculator() {
    if (window.location.hash === "#science") {
        document.querySelector("#standard-calculator").classList.add("d-none");
        document
            .querySelector("#programmer-calculator")
            .classList.add("d-none");
        document
            .querySelector("#science-calculator")
            .classList.remove("d-none");
        document.querySelector("#calculator-icon").innerHTML =
            '<i class="bi bi-journal"></i>';
        document.querySelector("#calculator-select").value = "science";
    } else if (window.location.hash === "#programmer") {
        document.querySelector("#standard-calculator").classList.add("d-none");
        document.querySelector("#science-calculator").classList.add("d-none");
        document
            .querySelector("#programmer-calculator")
            .classList.remove("d-none");
        document.querySelector("#calculator-icon").innerHTML =
            '<i class="bi bi-code-slash"></i>';
        document.querySelector("#calculator-select").value = "programmer";
    } else {
        document
            .querySelector("#programmer-calculator")
            .classList.add("d-none");
        document.querySelector("#science-calculator").classList.add("d-none");
        document
            .querySelector("#standard-calculator")
            .classList.remove("d-none");
        document.querySelector("#calculator-icon").innerHTML =
            '<i class="bi bi-calculator"></i>';
        document.querySelector("#calculator-select").value = "standard";
    }
}

document
    .querySelector("#calculator-select")
    .addEventListener("change", (evt) => {
        window.location.hash = evt.currentTarget.value;
    });

switchCalculator();
addEventListener("hashchange", switchCalculator);
