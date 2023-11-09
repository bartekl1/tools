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

document.querySelectorAll(".copy").forEach((e) => {
    e.addEventListener("click", (evt) => {
        navigator.clipboard.writeText(
            evt.currentTarget.parentElement.querySelector("input").value
        );

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
