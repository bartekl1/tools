document.querySelectorAll(".form-control").forEach((e) => {
    e.addEventListener("change", () => {
        QRCode.toCanvas(
            document.querySelector("#qr-code"),
            document.querySelector("#text").value,
            {
                height: document.querySelector("#height").value,
                width: document.querySelector("#width").value,
                margin: document.querySelector("#margin").value,
                color: {
                    dark: document.querySelector("#dark-color").value,
                    light: document.querySelector("#light-color").value,
                },
            }
        );

        // document.querySelector("#download").href = document
        //     .querySelector("canvas")
        //     .toDataURL('image/png');

        document.querySelector("#qr-code-div").classList.remove("d-none");
        // document.querySelector("#download").classList.remove("d-none");
    });
});
