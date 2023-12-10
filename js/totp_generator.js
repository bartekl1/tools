function generateTOTP() {
    var invalid = false;

    if (
        document.querySelector("#digits-number").checkValidity() &&
        document.querySelector("#digits-number").value !== ""
    ) {
        document.querySelector("#digits-number").classList.remove("is-invalid");
    } else {
        document.querySelector("#digits-number").classList.add("is-invalid");
        invalid = true;
    }

    if (
        document.querySelector("#token-period").checkValidity() &&
        document.querySelector("#token-period").value !== ""
    ) {
        document.querySelector("#token-period").classList.remove("is-invalid");
    } else {
        document.querySelector("#token-period").classList.add("is-invalid");
        invalid = true;
    }

    if (invalid) {
        return;
    }

    var token = totp(document.querySelector("#secret-key").value, {
        digits: parseInt(document.querySelector("#digits-number").value),
        period: parseInt(document.querySelector("#token-period").value),
    });

    document.querySelector("#totp").value = token;

    if (document.querySelector("#token-current-timestamp").checked) {
        var period = parseInt(document.querySelector("#token-period").value);
        var valid = period - (Math.floor(Date.now() / 1000) % period);
        document.querySelector("#totp-valid").value = valid;
    } else {
        document.querySelector("#totp-valid").value = "";
    }
}

document
    .querySelectorAll([
        "#secret-key",
        "#digits-number",
        "#token-period",
        "#token-current-timestamp",
        "#token-timestamp",
    ])
    .forEach((e) => {
        e.addEventListener("change", generateTOTP);
    });

setInterval(generateTOTP, 500);
