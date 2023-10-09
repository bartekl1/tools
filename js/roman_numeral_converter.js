const romanToArabic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

document.querySelector("#arabic").addEventListener("change", () => {
    document.querySelector("#arabic").classList.remove("is-invalid");

    if (document.querySelector("#arabic").value !== "") {
        if (!document.querySelector("#arabic").checkValidity()) {
            document.querySelector("#arabic").classList.add("is-invalid");
            return;
        }

        var arabic = parseInt(document.querySelector("#arabic").value);
        var roman = "";

        Object.entries(romanToArabic).forEach((item) => {
            while (arabic - item[1] >= 0) {
                roman += item[0];
                arabic -= item[1];
            }
        });

        document.querySelector("#roman").value = roman;
    }
});

document.querySelector("#roman").addEventListener("change", () => {
    document.querySelector("#roman").classList.remove("is-invalid");

    if (document.querySelector("#roman").value !== "") {
        if (!document.querySelector("#roman").checkValidity()) {
            document.querySelector("#roman").classList.add("is-invalid");
            return;
        }

        var roman = document.querySelector("#roman").value.toUpperCase();
        var arabic = 0;

        Object.entries(romanToArabic).forEach((item) => {
            while (roman.startsWith(item[0])) {
                arabic += item[1];
                roman = roman.substring(item[0].length);
            }
        });

        document.querySelector("#arabic").value = arabic;
    }
});
