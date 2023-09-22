function setFooterPadding() {
    document.querySelector("body").style.paddingBottom = `${
        document.querySelector("footer").clientHeight + 10
    }px`;
}

setFooterPadding();

window.addEventListener("resize", setFooterPadding);
