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
    let wrapper;
    if (document.querySelector(".header")) {
        wrapper = ".home-wrapper"
            document.querySelector(wrapper).remove();
    } else if (document.querySelector(".menu-header")) {
        wrapper = ".menu-wrapper";
            document.querySelector(wrapper).remove();
    } else if (document.querySelector(".contact-header")) {
       wrapper = ".contact-wrapper";
            document.querySelector(wrapper).remove();
    }
}
})();
