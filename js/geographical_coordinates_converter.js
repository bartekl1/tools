document
    .querySelectorAll(["#latitude-decimal", "#longitude-decimal"])
    .forEach((e) => {
        e.addEventListener("change", () => {
            document.querySelector("#latitude-decimal").checkValidity()
                ? document
                      .querySelector("#latitude-decimal")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#latitude-decimal")
                      .classList.add("is-invalid");
            document.querySelector("#longitude-decimal").checkValidity()
                ? document
                      .querySelector("#longitude-decimal")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#longitude-decimal")
                      .classList.add("is-invalid");

            if (
                !document.querySelector("#latitude-decimal").checkValidity() ||
                !document.querySelector("#longitude-decimal").checkValidity()
            ) {
                return;
            }

            document.querySelector("#latitude-degrees").value = Math.floor(
                Math.abs(document.querySelector("#latitude-decimal").value)
            );
            document.querySelector("#latitude-minutes").value = Math.floor(
                (Math.abs(document.querySelector("#latitude-decimal").value) %
                    1) *
                    60
            );
            document.querySelector("#latitude-seconds").value =
                Math.floor(
                    (((Math.abs(
                        document.querySelector("#latitude-decimal").value
                    ) %
                        1) *
                        60) %
                        1) *
                        60 *
                        100
                ) / 100;
            document.querySelector("#latitude-direction").value =
                document.querySelector("#latitude-decimal").value >= 0
                    ? "n"
                    : "s";

            document.querySelector("#longitude-degrees").value = Math.floor(
                Math.abs(document.querySelector("#longitude-decimal").value)
            );
            document.querySelector("#longitude-minutes").value = Math.floor(
                (Math.abs(document.querySelector("#longitude-decimal").value) %
                    1) *
                    60
            );
            document.querySelector("#longitude-seconds").value =
                Math.floor(
                    (((Math.abs(
                        document.querySelector("#longitude-decimal").value
                    ) %
                        1) *
                        60) %
                        1) *
                        60 *
                        100
                ) / 100;
            document.querySelector("#longitude-direction").value =
                document.querySelector("#longitude-decimal").value >= 0
                    ? "e"
                    : "w";
        });
    });

document
    .querySelectorAll([
        "#latitude-degrees",
        "#latitude-minutes",
        "#latitude-seconds",
        "#latitude-direction",
        "#longitude-degrees",
        "#longitude-minutes",
        "#longitude-seconds",
        "#longitude-direction",
    ])
    .forEach((e) => {
        e.addEventListener("change", () => {
            document.querySelector("#latitude-degrees").checkValidity()
                ? document
                      .querySelector("#latitude-degrees")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#latitude-degrees")
                      .classList.add("is-invalid");
            document.querySelector("#latitude-minutes").checkValidity()
                ? document
                      .querySelector("#latitude-minutes")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#latitude-minutes")
                      .classList.add("is-invalid");
            document.querySelector("#latitude-seconds").checkValidity()
                ? document
                      .querySelector("#latitude-seconds")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#latitude-seconds")
                      .classList.add("is-invalid");

            document.querySelector("#longitude-degrees").checkValidity()
                ? document
                      .querySelector("#longitude-degrees")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#longitude-degrees")
                      .classList.add("is-invalid");
            document.querySelector("#longitude-minutes").checkValidity()
                ? document
                      .querySelector("#longitude-minutes")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#longitude-minutes")
                      .classList.add("is-invalid");
            document.querySelector("#longitude-seconds").checkValidity()
                ? document
                      .querySelector("#longitude-seconds")
                      .classList.remove("is-invalid")
                : document
                      .querySelector("#longitude-seconds")
                      .classList.add("is-invalid");

            if (
                !document.querySelector("#latitude-degrees").checkValidity() ||
                !document.querySelector("#latitude-minutes").checkValidity() ||
                !document.querySelector("#latitude-seconds").checkValidity() ||
                !document.querySelector("#longitude-degrees").checkValidity() ||
                !document.querySelector("#longitude-minutes").checkValidity() ||
                !document.querySelector("#longitude-seconds").checkValidity()
            ) {
                return;
            }

            document.querySelector("#latitude-decimal").value =
                (Number(document.querySelector("#latitude-degrees").value) +
                    Number(document.querySelector("#latitude-minutes").value) /
                        60 +
                    Number(document.querySelector("#latitude-seconds").value) /
                        3600) *
                (document.querySelector("#latitude-direction").value === "n"
                    ? 1
                    : -1);

            document.querySelector("#longitude-decimal").value =
                (Number(document.querySelector("#longitude-degrees").value) +
                    Number(document.querySelector("#longitude-minutes").value) /
                        60 +
                    Number(document.querySelector("#longitude-seconds").value) /
                        3600) *
                (document.querySelector("#longitude-direction").value === "e"
                    ? 1
                    : -1);
        });
    });
