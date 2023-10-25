var url = new URL(window.location.href);

var generator = new latexjs.HtmlGenerator({ hyphenate: false });

generator = latexjs.parse("", { generator: generator });

document.head.appendChild(
    generator.stylesAndScripts(`${origin}/tools/js/modules/latex/`)
);

function convert() {
    document.querySelector("#input").classList.remove("is-invalid");
    try {
        var text = document.querySelector("#input").value;

        var generator2 = new latexjs.HtmlGenerator({ hyphenate: false });

        generator2 = latexjs.parse(text, { generator: generator2 });

        document.querySelector("#output").innerHTML = "";
        document.querySelector("#output").appendChild(generator2.domFragment());
    } catch {
        document.querySelector("#input").classList.add("is-invalid");
    }
}

document.querySelector("#input").addEventListener("change", convert);
document.querySelector("#input").addEventListener("keyup", convert);
