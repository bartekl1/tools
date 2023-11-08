var time = moment();
var duration = moment.duration(0);
var currentDuration;

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
    console.log(moment.duration(moment().diff(duration)));
});

document.querySelector("#reset").addEventListener("click", () => {
    time = moment();
    duration = moment.duration(0);
    updateStopwatch();
});
