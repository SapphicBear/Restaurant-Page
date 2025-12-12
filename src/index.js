import "./styles.css";

import { pageLoad } from "./homePage.js";
import { menuPage } from "./menuPage.js";
import { contactPage } from "./contactPage.js";

(function () {
console.log("Hello! Javascript is running!");


const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");
const contactButton = document.querySelector("button.contact");


function buttonCheck() {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
}

pageLoad();
homeButton.classList.add("active");

homeButton.addEventListener("click", () => {
    buttonCheck();
    homeButton.classList.add("active");
    unloadPage();
    pageLoad();
});
menuButton.addEventListener("click", () => {
    buttonCheck();
    menuButton.classList.add("active");
    unloadPage();
    menuPage();
});

contactButton.addEventListener("click", () => {
    buttonCheck();
    contactButton.classList.add("active");
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
