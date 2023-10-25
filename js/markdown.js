function convert() {
    var converter = new showdown.Converter();
    var md = document.querySelector("#input").value;
    var html = converter.makeHtml(md);
    document.querySelector("#output").innerHTML = html;
}

document.querySelector("#input").addEventListener("change", convert);
document.querySelector("#input").addEventListener("keyup", convert);
