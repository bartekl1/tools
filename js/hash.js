document.querySelector("#hash-input").addEventListener("keyup", () => {
    var input = document.querySelector("#hash-input").value;

    document.querySelector("#md5").value = CryptoJS.MD5(input).toString();
    document.querySelector("#sha1").value = CryptoJS.SHA1(input).toString();
    document.querySelector("#sha256").value = CryptoJS.SHA256(input).toString();
    document.querySelector("#sha224").value = CryptoJS.SHA224(input).toString();
    document.querySelector("#sha512").value = CryptoJS.SHA512(input).toString();
    document.querySelector("#sha384").value = CryptoJS.SHA384(input).toString();
    document.querySelector("#sha3").value = CryptoJS.SHA3(input).toString();
    document.querySelector("#ripemd160").value =
        CryptoJS.RIPEMD160(input).toString();
});

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
