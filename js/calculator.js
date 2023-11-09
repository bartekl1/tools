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

document.querySelectorAll(".calc-btn.standard-calc").forEach((e) => {
    e.addEventListener("click", (evt) => {
        if (evt.currentTarget.classList.contains("calc-number")) {
            if (
                document
                    .querySelector(".calc-operation.standard-calc")
                    .innerHTML.substring(
                        document.querySelector(".calc-operation.standard-calc")
                            .innerHTML.length - 1
                    ) === "="
            ) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    "0";
                document.querySelector(
                    ".calc-operation.standard-calc"
                ).innerHTML = "";
            }

            if (
                document.querySelector(".calc-result.standard-calc")
                    .innerHTML !== "0"
            ) {
                document.querySelector(
                    ".calc-result.standard-calc"
                ).innerHTML += evt.currentTarget.innerHTML;
            } else {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    evt.currentTarget.innerHTML;
            }
        } else if (evt.currentTarget.classList.contains("calc-comma")) {
            if (
                document
                    .querySelector(".calc-operation.standard-calc")
                    .innerHTML.substring(
                        document.querySelector(".calc-operation.standard-calc")
                            .innerHTML.length - 1
                    ) === "="
            ) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    "0";
            }

            if (
                !document
                    .querySelector(".calc-result.standard-calc")
                    .innerHTML.includes(",")
            ) {
                document.querySelector(
                    ".calc-result.standard-calc"
                ).innerHTML += ",";
            }
        } else if (
            evt.currentTarget.classList.contains("calc-basic-operation")
        ) {
            if (
                document
                    .querySelector(".calc-operation.standard-calc")
                    .innerHTML.substring(
                        document.querySelector(".calc-operation.standard-calc")
                            .innerHTML.length - 1
                    ) === "="
            ) {
                document.querySelector(
                    ".calc-operation.standard-calc"
                ).innerHTML =
                    document.querySelector(".calc-result.standard-calc")
                        .innerHTML +
                    " " +
                    evt.currentTarget.innerHTML;
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    "0";
            } else {
                if (
                    document.querySelector(".calc-operation.standard-calc")
                        .innerHTML !== ""
                ) {
                    document.querySelector(
                        ".calc-operation.standard-calc"
                    ).innerHTML += " ";
                }
                document.querySelector(
                    ".calc-operation.standard-calc"
                ).innerHTML +=
                    document.querySelector(".calc-result.standard-calc")
                        .innerHTML +
                    " " +
                    evt.currentTarget.innerHTML;
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    "0";
            }
        } else if (evt.currentTarget.classList.contains("calc-solve")) {
            if (
                document.querySelector(".calc-operation.standard-calc")
                    .innerHTML !== ""
            ) {
                document.querySelector(
                    ".calc-operation.standard-calc"
                ).innerHTML += " ";
            }
            document.querySelector(".calc-operation.standard-calc").innerHTML +=
                document.querySelector(".calc-result.standard-calc").innerHTML +
                " =";

            var mathOperation = document.querySelector(
                ".calc-operation.standard-calc"
            ).innerHTML;
            mathOperation = mathOperation.slice(0, -2);
            mathOperation = mathOperation.replaceAll(",", ".");
            mathOperation = mathOperation.replaceAll("x", "*");
            mathOperation = mathOperation.replaceAll("÷", "/");
            mathOperation = mathOperation.replaceAll("^", "**");
            mathOperation += " ";
            if (/\/ 0(?:\.0+)* /.test(mathOperation)) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    window.navigator.language.split("-")[0] == "pl"
                        ? "Nie można dzielić przez zero"
                        : "Can't divide by zero";
            } else {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    eval(mathOperation);
            }
        } else if (evt.currentTarget.classList.contains("calc-clear")) {
            document.querySelector(".calc-result.standard-calc").innerHTML =
                "0";
        } else if (evt.currentTarget.classList.contains("calc-clear-all")) {
            document.querySelector(".calc-result.standard-calc").innerHTML =
                "0";
            document.querySelector(".calc-operation.standard-calc").innerHTML =
                "";
        } else if (evt.currentTarget.classList.contains("calc-delete")) {
            if (
                document.querySelector(".calc-result.standard-calc").innerHTML
                    .length !== 1
            ) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    document
                        .querySelector(".calc-result.standard-calc")
                        .innerHTML.slice(0, -1);
            } else {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    "0";
            }
        } else if (evt.currentTarget.classList.contains("calc-square")) {
            document.querySelector(".calc-result.standard-calc").innerHTML =
                eval(
                    document.querySelector(".calc-result.standard-calc")
                        .innerHTML + " ** 2"
                );
        } else if (evt.currentTarget.classList.contains("calc-square-root")) {
            var number = Number(
                document
                    .querySelector(".calc-result.standard-calc")
                    .innerHTML.replaceAll(",", ".")
            );
            if (number >= 0) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    eval(
                        document.querySelector(".calc-result.standard-calc")
                            .innerHTML + " ** (1/2)"
                    );
            } else {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    window.navigator.language.split("-")[0] == "pl"
                        ? "Liczba musi być większa lub równa zero"
                        : "Number must be greater or equal to zero";
            }
        } else if (evt.currentTarget.classList.contains("calc-fraction")) {
            var number = Number(
                document
                    .querySelector(".calc-result.standard-calc")
                    .innerHTML.replaceAll(",", ".")
            );
            if (number !== 0) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    eval(
                        "1 / " +
                            document.querySelector(".calc-result.standard-calc")
                                .innerHTML
                    );
            } else {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    window.navigator.language.split("-")[0] == "pl"
                        ? "Nie można dzielić przez zero"
                        : "Can't divide by zero";
            }
        } else if (evt.currentTarget.classList.contains("calc-opposite")) {
            var number = Number(
                document
                    .querySelector(".calc-result.standard-calc")
                    .innerHTML.replaceAll(",", ".")
            );
            if (number > 0) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    "-" +
                    document.querySelector(".calc-result.standard-calc")
                        .innerHTML;
            } else if (number < 0) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    document
                        .querySelector(".calc-result.standard-calc")
                        .innerHTML.slice(1);
            }
        } else if (evt.currentTarget.classList.contains("calc-percent")) {
            if (
                ["x", "÷"].includes(
                    document
                        .querySelector(".calc-operation.standard-calc")
                        .innerHTML.slice(-1)
                )
            ) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    Number(
                        document
                            .querySelector(".calc-result.standard-calc")
                            .innerHTML.replaceAll(",", ".")
                    ) / 100;
            } else if (
                ["+", "-"].includes(
                    document
                        .querySelector(".calc-operation.standard-calc")
                        .innerHTML.slice(-1)
                )
            ) {
                document.querySelector(".calc-result.standard-calc").innerHTML =
                    Number(
                        document
                            .querySelector(".calc-operation.standard-calc")
                            .innerHTML.replaceAll(",", ".")
                            .split(" ")
                            .slice(-2, -1)
                    ) *
                    (Number(
                        document
                            .querySelector(".calc-result.standard-calc")
                            .innerHTML.replaceAll(",", ".")
                    ) /
                        100);
            }
        }
    });
});

addEventListener("keyup", (evt) => {
    if (
        window.location.hash !== "#science" &&
        window.location.hash !== "#science-advanced" &&
        window.location.hash !== "#programmer"
    ) {
        if (
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(evt.key)
        ) {
            document
                .querySelectorAll(".standard-calc.calc-number")
                .forEach((e) => {
                    if (e.innerHTML == evt.key) {
                        e.click();
                    }
                });
        } else if ([".", ","].includes(evt.key)) {
            document.querySelector(".standard-calc.calc-comma").click();
        } else if (["=", "Enter"].includes(evt.key)) {
            document.querySelector(".standard-calc.calc-solve").click();
        } else if (["+", "-", "*", "/"].includes(evt.key)) {
            document
                .querySelectorAll(".standard-calc.calc-basic-operation")
                .forEach((e) => {
                    if (
                        e.innerHTML ==
                        evt.key.replaceAll("*", "x").replaceAll("/", "÷")
                    ) {
                        e.click();
                    }
                });
        } else if (evt.key === "Escape") {
            document.querySelector(".standard-calc.calc-clear-all").click();
        } else if (evt.key === "Backspace") {
            document.querySelector(".standard-calc.calc-delete").click();
        } else if (evt.key === "%") {
            document.querySelector(".standard-calc.calc-percent").click();
        }
    }
});
