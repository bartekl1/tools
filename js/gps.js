function localize() {
    document.querySelector("#localize").classList.add("d-none");
    document.querySelector("#localizing").classList.remove("d-none");

    function success(position) {
        var coords = position.coords;

        if (coords.latitude !== null) {
            document.querySelector("#latitude").value = coords.latitude;
            document
                .querySelector(".input-group:has(#latitude)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#latitude)")
                .classList.add("d-none");
        }

        if (coords.longitude !== null) {
            document.querySelector("#longitude").value = coords.longitude;
            document
                .querySelector(".input-group:has(#longitude)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#longitude)")
                .classList.add("d-none");
        }

        if (coords.accuracy !== null) {
            document.querySelector("#accuracy").value = coords.accuracy;
            document
                .querySelector(".input-group:has(#accuracy)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#accuracy)")
                .classList.add("d-none");
        }

        if (coords.altitude !== null) {
            document.querySelector("#altitude").value = coords.altitude;
            document
                .querySelector(".input-group:has(#altitude)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#altitude)")
                .classList.add("d-none");
        }

        if (coords.altitudeAccuracy !== null) {
            document.querySelector("#altitude-accuracy").value =
                coords.altitudeAccuracy;
            document
                .querySelector(".input-group:has(#altitude-accuracy)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#altitude-accuracy)")
                .classList.add("d-none");
        }

        if (coords.speed !== null) {
            document.querySelector("#speed").value = coords.speed;
            document
                .querySelector(".input-group:has(#speed)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#speed)")
                .classList.add("d-none");
        }

        if (coords.heading !== null && coords.heading !== NaN) {
            document.querySelector("#heading").value = coords.heading;
            document
                .querySelector(".input-group:has(#heading)")
                .classList.remove("d-none");
        } else {
            document
                .querySelector(".input-group:has(#heading)")
                .classList.add("d-none");
        }

        if (coords.latitude !== null && coords.longitude !== null) {
            document.querySelector(
                "#google-maps"
            ).innerHTML = `<iframe class="google-maps" src="https://maps.google.com/maps?q=${coords.latitude},${coords.longitude}&z=14&amp;output=embed"></iframe>`;
            document.querySelector("#google-maps").classList.remove("d-none");
        } else {
            document.querySelector("#google-maps").classList.add("d-none");
        }

        document.querySelector("#localizing").classList.add("d-none");
        document.querySelector("#localize").classList.remove("d-none");
    }

    function error(error) {
        document.querySelector("#localizing").classList.add("d-none");
        document.querySelector("#localize").classList.remove("d-none");

        throw new Error(error.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        maximumAge: 0,
    });
}

if (!navigator.geolocation) {
    document.querySelector("#gps-not-supported").classList.remove("d-none");
    document.querySelector("#localize").disabled = true;
} else {
    navigator.permissions.query({ name: "geolocation" }).then((r) => {
        if (r.state === "denied") {
            document.querySelector("#gps-blocked").classList.remove("d-none");
            document.querySelector("#localize").disabled = true;
        }
    });
}

document.querySelector("#localize").addEventListener("click", localize);

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
