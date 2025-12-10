import "./styles.css";

import { pageLoad } from "./homePage.js";
import { menuPage } from "./menuPage.js";
import { contactPage } from "./contactPage.js";

(function () {
console.log("Hello! Javascript is running!");

pageLoad();

const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");
const contactButton = document.querySelector("button.contact");

homeButton.addEventListener("click", () => {
    unloadPage();
    pageLoad();
});
menuButton.addEventListener("click", () => {
    unloadPage();
    menuPage();
});

contactButton.addEventListener("click", () => {
    unloadPage();
    contactPage();
})

function unloadPage() {
    let div1, div2, div3, div4, div5;
    if (document.querySelector(".header")) {
        div1 = ".header";
        div2 = ".info";
        div3 = ".main";
        div4 = ".call-to-action";
        div5 = ".footer";
            document.querySelector(div1).remove();
            document.querySelector(div2).remove();
            document.querySelector(div3).remove();
            document.querySelector(div4).remove();
            document.querySelector(div5).remove();
    } else if (document.querySelector(".menu-header")) {
        div1 = ".menu-header";
        div2 = ".menu-info";
        div3 = ".menu-main";
        div4 = ".menu-ad";
        div5 = ".menu-footer";
            document.querySelector(div1).remove();
            document.querySelector(div2).remove();
            document.querySelector(div3).remove();
            document.querySelector(div4).remove();
            document.querySelector(div5).remove();
    } else if (document.querySelector(".contact-header")) {
        div1 = ".contact-header";
        div2 = ".contact-info";
        div3 = ".contact-hours";
        div4 = ".contact-footer";
            document.querySelector(div1).remove();
            document.querySelector(div2).remove();
            document.querySelector(div3).remove();
            document.querySelector(div4).remove();
    }
}
})();
