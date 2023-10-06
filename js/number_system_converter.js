const systems = {
    HEX: 16,
    DEC: 10,
    OCT: 8,
    BIN: 2,
};

document.querySelectorAll(".form-control").forEach((e) => {
    e.addEventListener("change", (evt) => {
        document.querySelectorAll(".form-control").forEach((e2) => {
            e2.classList.remove("is-invalid");
        });

        if (evt.currentTarget.value === "") {
            Object.keys(systems).forEach((system) => {
                document.querySelector(`#${system.toLowerCase()}`).value = "";
            });
            return;
        }

        if (!evt.currentTarget.checkValidity()) {
            evt.currentTarget.classList.add("is-invalid");
            return;
        }

        var number = parseInt(
            evt.currentTarget.value,
            systems[evt.currentTarget.id.toUpperCase()]
        );

        Object.entries(systems).forEach((system) => {
            document.querySelector(`#${system[0].toLowerCase()}`).value = number
                .toString(system[1])
                .toUpperCase();
        });
    });
});
