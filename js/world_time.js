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

moment.tz.names().forEach((tz) => {
    // var inputOption = document.createElement("option");
    // inputOption.value = tz;
    // inputOption.innerHTML = tz;
    // document.querySelector("#custom-time-timezone").append(inputOption);

    var outputOption = document.createElement("option");
    outputOption.value = tz;
    outputOption.innerHTML = tz;
    document.querySelector("#custom-timezone").append(outputOption);
});

// document.querySelector("#custom-time-timezone").value = moment.tz.guess(true);
document.querySelector("#custom-timezone").value = moment.tz.guess(true);
document.querySelector("#local-timezone").value = moment.tz.guess(true);

setInterval(updateTime, 500);
document
    .querySelector("#custom-timezone")
    .addEventListener("change", updateTime);
