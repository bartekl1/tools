function calcDifference() {
    if (
        document.querySelector("#first-date").value !== "" &&
        document.querySelector("#second-date").value !== ""
    ) {
        var firstDate = moment(document.querySelector("#first-date").value);
        var secondDate = moment(document.querySelector("#second-date").value);

        var duration = moment.duration(firstDate.diff(secondDate));

        document.querySelector("#difference-years").value = Math.abs(
            duration.years()
        );
        document.querySelector("#difference-months").value = Math.abs(
            duration.months()
        );
        document.querySelector("#difference-weeks").value = Math.abs(
            duration.weeks()
        );
        document.querySelector("#difference-days").value = Math.abs(
            duration.days()
        );
        document.querySelector("#difference-hours").value = Math.abs(
            duration.hours()
        );
        document.querySelector("#difference-minutes").value = Math.abs(
            duration.minutes()
        );
        document.querySelector("#difference-seconds").value = Math.abs(
            duration.seconds()
        );
        document.querySelector("#difference-milliseconds").value = Math.abs(
            duration.milliseconds()
        );
    }
}

function addSubtract() {
    if (document.querySelector("#input-date").value !== "") {
        var duration = moment.duration({
            milliseconds: document.querySelector("#add-subtract-milliseconds")
                .value,
            seconds: document.querySelector("#add-subtract-seconds").value,
            minutes: document.querySelector("#add-subtract-minutes").value,
            hours: document.querySelector("#add-subtract-hours").value,
            days: document.querySelector("#add-subtract-days").value,
            weeks: document.querySelector("#add-subtract-weeks").value,
            months: document.querySelector("#add-subtract-months").value,
            years: document.querySelector("#add-subtract-years").value,
        });

        var inputDate = moment(document.querySelector("#input-date").value);

        if (document.querySelector("#add").checked) {
            var outputDate = inputDate.add(duration);
        } else if (document.querySelector("#subtract").checked) {
            var outputDate = inputDate.subtract(duration);
        }

        document.querySelector("#output-date").value = outputDate
            .toISOString()
            .slice(0, -1);
    }
}

document
    .querySelector("#first-date")
    .addEventListener("change", calcDifference);
document
    .querySelector("#second-date")
    .addEventListener("change", calcDifference);

document.querySelector("#input-date").addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-years")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-months")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-weeks")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-days")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-hours")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-minutes")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-seconds")
    .addEventListener("change", addSubtract);
document
    .querySelector("#add-subtract-milliseconds")
    .addEventListener("change", addSubtract);
document.querySelector("#add").addEventListener("change", addSubtract);
document.querySelector("#subtract").addEventListener("change", addSubtract);
