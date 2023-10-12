const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = lowercase.join("").toUpperCase().split("");
const digits = "0123456789".split("");
const other = "!@#$%^&*".split("");

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {
    document.querySelector("#length").classList.remove("is-invalid");

    if (!document.querySelector("#length").checkValidity()) {
        document.querySelector("#length").classList.add("is-invalid");
        return;
    }

    var availableChars = [];

    if (document.querySelector("#lowercase").checked) {
        availableChars = availableChars.concat(lowercase);
    }

    if (document.querySelector("#uppercase").checked) {
        availableChars = availableChars.concat(uppercase);
    }

    if (document.querySelector("#digits").checked) {
        availableChars = availableChars.concat(digits);
    }

    if (document.querySelector("#other").checked) {
        availableChars = availableChars.concat(other);
    }

    availableChars = availableChars.concat(
        document.querySelector("#special").value.split("")
    );

    availableChars = [...new Set(availableChars)];

    if (availableChars.length > 0) {
        var password = "";
        var length = parseInt(document.querySelector("#length").value);

        while (password.length !== length) {
            password += availableChars[randint(0, availableChars.length - 1)];
        }

        document.querySelector("#password").value = password;
    }
}

document.querySelector("#generate").addEventListener("click", generatePassword);
document.querySelector("#length").addEventListener("change", generatePassword);
document
    .querySelector("#lowercase")
    .addEventListener("change", generatePassword);
document
    .querySelector("#uppercase")
    .addEventListener("change", generatePassword);
document.querySelector("#digits").addEventListener("change", generatePassword);
document.querySelector("#other").addEventListener("change", generatePassword);
document.querySelector("#special").addEventListener("change", generatePassword);

generatePassword();

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
