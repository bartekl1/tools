function verifyChecksum() {
    document.querySelector("#verify-checksum").classList.remove("bg-success");
    document.querySelector("#verify-checksum").classList.remove("bg-danger");

    if (
        document.querySelector("#verify-checksum").value !== "" &&
        document.querySelector("#file-input").files.length === 1
    ) {
        document.querySelector(
            `#${document.querySelector("#verify-checksum-type").value}`
        ).value === document.querySelector("#verify-checksum").value
            ? document
                  .querySelector("#verify-checksum")
                  .classList.add("bg-success")
            : document
                  .querySelector("#verify-checksum")
                  .classList.add("bg-danger");
    }
}

document.querySelector("#file-input").addEventListener("change", () => {
    var input = document.querySelector("#file-input");

    if (input.files.length === 1) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var text = CryptoJS.enc.Latin1.parse(e.target.result);

            document.querySelector("#md5").value =
                CryptoJS.MD5(text).toString();
            document.querySelector("#sha1").value =
                CryptoJS.SHA1(text).toString();
            document.querySelector("#sha256").value =
                CryptoJS.SHA256(text).toString();
            document.querySelector("#sha224").value =
                CryptoJS.SHA224(text).toString();
            document.querySelector("#sha512").value =
                CryptoJS.SHA512(text).toString();
            document.querySelector("#sha384").value =
                CryptoJS.SHA384(text).toString();
            document.querySelector("#sha3").value =
                CryptoJS.SHA3(text).toString();
            document.querySelector("#ripemd160").value =
                CryptoJS.RIPEMD160(text).toString();

            verifyChecksum();
        };

        reader.readAsBinaryString(input.files[0]);
    } else {
        document.querySelector("#md5").value = "";
        document.querySelector("#sha1").value = "";
        document.querySelector("#sha256").value = "";
        document.querySelector("#sha224").value = "";
        document.querySelector("#sha512").value = "";
        document.querySelector("#sha384").value = "";
        document.querySelector("#sha3").value = "";
        document.querySelector("#ripemd160").value = "";
    }

    verifyChecksum();
});

document
    .querySelector("#verify-checksum")
    .addEventListener("change", verifyChecksum);
document
    .querySelector("#verify-checksum-type")
    .addEventListener("change", verifyChecksum);

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
