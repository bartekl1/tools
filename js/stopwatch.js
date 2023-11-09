var time = moment();
var duration = moment.duration(0);
var currentDuration = moment.duration(0);

var interval;

function updateStopwatch() {
    currentDuration = moment
        .duration(duration)
        .add(moment.duration(moment().diff(time)));

    document.querySelector("#time").innerHTML = `${
        Math.floor(currentDuration.asHours()) < 10 ? "0" : ""
    }${Math.floor(currentDuration.asHours())}:${
        currentDuration.minutes() < 10 ? "0" : ""
    }${currentDuration.minutes()}:${
        currentDuration.seconds() < 10 ? "0" : ""
    }${currentDuration.seconds()}.${
        Math.floor(currentDuration.milliseconds() / 10) < 10 ? "0" : ""
    }${Math.floor(currentDuration.milliseconds() / 10)}`;
}

document.querySelector("#start-pause").addEventListener("click", (evt) => {
    if (evt.currentTarget.getAttribute("current-function") === "start") {
        time = moment();
        interval = setInterval(updateStopwatch, 5);
    } else {
        duration = currentDuration;
        clearInterval(interval);
    }

    evt.currentTarget.setAttribute(
        "current-function",
        evt.currentTarget.getAttribute("current-function") === "start"
            ? "pause"
            : "start"
    );

    evt.currentTarget.innerHTML =
        evt.currentTarget.getAttribute("current-function") === "pause"
            ? '<i class="bi bi-pause-fill"></i>'
            : '<i class="bi bi-play-fill"></i>';
});

document.querySelector("#measure").addEventListener("click", () => {
    if (
        document.querySelector("#measures").querySelectorAll(".id").length > 0
    ) {
        var id =
            parseInt(
                Array.from(
                    document.querySelector("#measures").querySelectorAll(".id")
                ).slice(-1)[0].innerHTML
            ) + 1;

            var measureDuration = moment.duration(currentDuration).subtract(moment.duration(Array.from(
                document.querySelector("#measures").querySelectorAll(".time")
            ).slice(-1)[0].innerHTML))
    } else {
        var id = 1;
        var measureDuration = currentDuration;
    }

    var time = `${
        Math.floor(currentDuration.asHours()) < 10 ? "0" : ""
    }${Math.floor(currentDuration.asHours())}:${
        currentDuration.minutes() < 10 ? "0" : ""
    }${currentDuration.minutes()}:${
        currentDuration.seconds() < 10 ? "0" : ""
    }${currentDuration.seconds()}.${
        Math.floor(currentDuration.milliseconds() / 10) < 10 ? "0" : ""
    }${Math.floor(currentDuration.milliseconds() / 10)}`;

    var durationString = `${
        Math.floor(measureDuration.asHours()) < 10 ? "0" : ""
    }${Math.floor(measureDuration.asHours())}:${
        measureDuration.minutes() < 10 ? "0" : ""
    }${measureDuration.minutes()}:${
        measureDuration.seconds() < 10 ? "0" : ""
    }${measureDuration.seconds()}.${
        Math.floor(measureDuration.milliseconds() / 10) < 10 ? "0" : ""
    }${Math.floor(measureDuration.milliseconds() / 10)}`;

    document.querySelector("#measures").classList.remove("d-none");

    var row = document.createElement("tr");
    row.innerHTML = `<th scope="row" class="id">${id}</th>
    <td class="time">${time}</td>
    <td class="duration">${durationString}</td>`;
    document.querySelector("#measures").querySelector("tbody").append(row);
});

document.querySelector("#reset").addEventListener("click", () => {
    time = moment();
    duration = moment.duration(0);
    updateStopwatch();

    document.querySelector("#measures").querySelector("tbody").innerHTML = "";
    document.querySelector("#measures").classList.add("d-none");
});
