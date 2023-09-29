window.onerror = function (error) {
    if (document.querySelector("#errors") === null) {
        var div = document.createElement("div");
        div.id = "errors";
        document.querySelector("body").append(div);
    }

    var errorAlert = document.createElement("div");
    errorAlert.classList.add(
        "alert",
        "alert-danger",
        "alert-dismissible",
        "fade",
        "show"
    );
    errorAlert.setAttribute("role", "alert");

    var errorIcon = document.createElement("i");
    errorIcon.classList.add("bi", "bi-x-circle-fill", "me-2");
    errorAlert.append(errorIcon);

    var errorMessage = document.createElement("span");
    errorMessage.innerHTML = error;
    errorAlert.append(errorMessage);

    var errorClose = document.createElement("button");
    errorClose.type = "button";
    errorClose.classList.add("btn-close");
    errorClose.setAttribute("data-bs-dismiss", "alert");
    errorAlert.append(errorClose);

    document.querySelector("#errors").append(errorAlert);
};
