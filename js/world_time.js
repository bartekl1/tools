const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

function getTime(opt = {}) {
    if (opt.tz === undefined) {
        return moment(opt.date).locale(navigator.language).format("LTS");
    } else {
        return moment
            .tz(opt.date, opt.tz)
            .locale(navigator.language)
            .format("LTS");
    }
}

function getDate(opt = {}) {
    if (opt.tz === undefined) {
        return moment(opt.date)
            .locale(navigator.language)
            .toDate()
            .toLocaleDateString(undefined, dateOptions);
    } else {
        return moment
            .tz(opt.date, opt.tz)
            .locale(navigator.language)
            .toDate()
            .toLocaleDateString(undefined, dateOptions);
    }
}

function setCountries() {
    document.querySelector("#custom-timezone").innerHTML = "";
    var worldOption = document.createElement("option");
    worldOption.innerHTML =
        window.navigator.language.split("-")[0] == "pl"
            ? "Cały świat"
            : "All world";
    worldOption.value = "world";
    document.querySelector("#custom-timezone-country").append(worldOption);
    fetch("/tools/db/countries.csv")
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            csv.parse(text, function (err, records) {
                records.forEach((row) => {
                    if (row[0] !== "Name" && row[1] !== "Code") {
                        var outputOption = document.createElement("option");
                        outputOption.value = row[1];
                        outputOption.innerHTML = row[0];
                        document
                            .querySelector("#custom-timezone-country")
                            .append(outputOption);
                    }
                });
                updateTimezones();
                document.querySelector("#custom-timezone").value =
                    moment.tz.guess(true);
                document.querySelector("#tool-loading").classList.add("d-none");
                document.querySelector("#tool-page").classList.remove("d-none");
            });
        });
}

function updateTimezones() {
    document.querySelector("#custom-timezone").innerHTML = "";
    var timezones =
        document.querySelector("#custom-timezone-country").value === "world"
            ? moment.tz.names()
            : moment.tz.zonesForCountry(
                  document.querySelector("#custom-timezone-country").value
              );
    timezones.forEach((tz) => {
        var outputOption = document.createElement("option");
        outputOption.value = tz;
        outputOption.innerHTML = tz;
        document.querySelector("#custom-timezone").append(outputOption);
    });
}

function updateTime() {
    var customTimezone = document.querySelector("#custom-timezone").value;

    var date;

    // if (document.querySelector("#select-time").checked) {
    //     date = document.querySelector("#custom-input-time").value;
    // }

    document.querySelector("#local-time").innerHTML = getTime({ date: date });
    document.querySelector("#local-date").innerHTML = getDate({ date: date });

    document.querySelector("#utc-time").innerHTML = getTime({
        date: date,
        tz: "UTC",
    });
    document.querySelector("#utc-date").innerHTML = getDate({
        date: date,
        tz: "UTC",
    });

    document.querySelector("#custom-time").innerHTML = getTime({
        date: date,
        tz: customTimezone,
    });
    document.querySelector("#custom-date").innerHTML = getDate({
        date: date,
        tz: customTimezone,
    });
}

setCountries();
// updateTimezones();

// document.querySelector("#custom-time-timezone").value = moment.tz.guess(true);

document.querySelector("#local-timezone").value = moment.tz.guess(true);

setInterval(updateTime, 500);
document
    .querySelector("#custom-timezone")
    .addEventListener("change", updateTime);
document
    .querySelector("#custom-timezone-country")
    .addEventListener("change", updateTimezones);
