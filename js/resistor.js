fetch("/tools/img/resistor.svg")
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        document.querySelector("#resistor-div").innerHTML = text;
    });
