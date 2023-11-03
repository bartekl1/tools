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

document
    .querySelector("#first-date")
    .addEventListener("change", calcDifference);
document
    .querySelector("#second-date")
    .addEventListener("change", calcDifference);
