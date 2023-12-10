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

    try {
        if (document.querySelector("#token-current-timestamp").checked) {
            var token = totp(document.querySelector("#secret-key").value, {
                digits: parseInt(
                    document.querySelector("#digits-number").value
                ),
                period: parseInt(document.querySelector("#token-period").value),
            });
        } else {
            var token = totp(document.querySelector("#secret-key").value, {
                digits: parseInt(
                    document.querySelector("#digits-number").value
                ),
                period: parseInt(document.querySelector("#token-period").value),
                timestamp: Number(
                    new Date(document.querySelector("#token-timestamp").value)
                ),
            });
        }

        document.querySelector("#secret-key").classList.remove("is-invalid");
    } catch {
        document.querySelector("#secret-key").classList.add("is-invalid");

        return;
    }

    document.querySelector("#totp").value = token;

    if (document.querySelector("#token-current-timestamp").checked) {
        var period = parseInt(document.querySelector("#token-period").value);
        var valid = period - (Math.floor(Date.now() / 1000) % period);
        document.querySelector("#totp-valid").value = valid;
    } else {
        var period = parseInt(document.querySelector("#token-period").value);
        var valid =
            period -
            (Math.floor(
                Number(
                    new Date(document.querySelector("#token-timestamp").value)
                ) / 1000
            ) %
                period);
        document.querySelector("#totp-valid").value = valid;
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

document
    .querySelector("#token-current-timestamp")
    .addEventListener("change", (evt) => {
        document.querySelector("#token-timestamp").disabled =
            evt.currentTarget.checked;
    });

setInterval(generateTOTP, 500);

document.querySelectorAll(".copy").forEach((e) => {
    e.addEventListener("click", (evt) => {
        navigator.clipboard.writeText(document.querySelector("#totp").value);

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
