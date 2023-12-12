document.querySelector("#start-speedometer").addEventListener("click", () => {
    document.querySelector("#start-speedometer-div").classList.add("d-none");
    document.querySelector("#speedometer-div").classList.remove("d-none");

    navigator.geolocation.watchPosition(
        (pos) => {
            var speed = pos.coords.speed;
            var speedUnit = document.querySelector(
                `.speed-unit-label[for=${
                    document.querySelector(
                        "input[name=speed-unit-radio]:checked"
                    ).id
                }]`
            ).innerHTML;

            if (speed === null) {
                document.querySelector("#speed").innerHTML = "--";
            } else {
                if (speedUnit === "km/h") {
                    speed *= 3.6;
                } else if (speedUnit === "mph") {
                    speed *= 3600 / 1_609.344;
                }

                speed = Math.round(speed);

                document.querySelector("#speed").innerHTML = speed;
            }

            document.querySelector("#speed-unit").innerHTML = speedUnit;
        },
        (error) => {
            throw new Error(error.message);
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
        }
    );
});

document.querySelectorAll("input[name=speed-unit-radio]").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".speed-unit-label").forEach((e2) => {
            e2.classList.remove("btn-primary", "btn-secondary");
        });

        document
            .querySelectorAll(
                `.speed-unit-label:not([for=${
                    document.querySelector(
                        "input[name=speed-unit-radio]:checked"
                    ).id
                }])`
            )
            .forEach((e2) => {
                e2.classList.add("btn-secondary");
            });

        document
            .querySelector(
                `.speed-unit-label[for=${
                    document.querySelector(
                        "input[name=speed-unit-radio]:checked"
                    ).id
                }]`
            )
            .classList.add("btn-primary");
    });
});

if (!navigator.geolocation) {
    document.querySelector("#gps-not-supported").classList.remove("d-none");
    document.querySelector("#start-speedometer-div").classList.add("d-none");
} else {
    navigator.permissions.query({ name: "geolocation" }).then((r) => {
        if (r.state === "denied") {
            document.querySelector("#gps-blocked").classList.remove("d-none");
            document
                .querySelector("#start-speedometer-div")
                .classList.add("d-none");
        }
    });
}
