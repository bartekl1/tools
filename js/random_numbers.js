var r = new random.Random();

function genRand(min, max, decimalPlaces) {
    var rand;
    if (decimalPlaces > 0) {
        rand = r.real(min, max, true);
    } else {
        rand = r.integer(min, max);
    }
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}

document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#generate").classList.add("d-none");
    document.querySelector("#generating").classList.remove("d-none");

    ["#numbers-number", "#decimals-number", "#minimum", "#maximum"].forEach(
        (id) => {
            document.querySelector(id).value === "" ||
            !document.querySelector(id).checkValidity()
                ? document.querySelector(id).classList.add("is-invalid")
                : document.querySelector(id).classList.remove("is-invalid");
        }
    );

    [("#numbers-number", "#decimals-number", "#minimum", "#maximum")].forEach(
        (id) => {
            if (
                document.querySelector(id).value === "" ||
                !document.querySelector(id).checkValidity()
            ) {
                document.querySelector("#generating").classList.add("d-none");
                document.querySelector("#generate").classList.remove("d-none");
            }
        }
    );

    var numbers = Number(document.querySelector("#numbers-number").value);
    var decimals = Number(document.querySelector("#decimals-number").value);
    var minimum = Number(document.querySelector("#minimum").value);
    var maximum = Number(document.querySelector("#maximum").value);

    document.querySelector("#numbers").value = "";

    var randomNumbers = [];

    for (var i = 0; i < numbers; i++) {
        randomNumbers.push(genRand(minimum, maximum, decimals));
    }

    if (document.querySelector("#sort").checked) {
        randomNumbers.sort((a, b) => {
            return a - b;
        });
    }

    document.querySelector("#numbers").value = randomNumbers.join("\n");

    document.querySelector("#generating").classList.add("d-none");
    document.querySelector("#generate").classList.remove("d-none");
});
