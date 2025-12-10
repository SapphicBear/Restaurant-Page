export function menuPage() {
    const DOM = document.querySelector("#content");

    DOM.appendChild(document.createElement("div")).className = "menu-header";
        document.querySelector(".menu-header").appendChild(document.createElement("h1")).textContent = "Menu";
        document.querySelector(".menu-header").appendChild(document.createElement("h4")).textContent = "Take a look at what we got!";

    DOM.appendChild(document.createElement("div")).className = "menu-info";
        document.querySelector(".menu-info").appendChild(document.createElement("p")).textContent = "Check out our daily menu specials!";

    DOM.appendChild(document.createElement("div")).className = "menu-main";
        document.querySelector(".menu-main").appendChild(document.createElement("span")).className = "menu-item";

    DOM.appendChild(document.createElement("div")).className = "menu-ad";
        document.querySelector(".menu-ad").appendChild(document.createElement("div")).className = "ad";

    DOM.appendChild(document.createElement("div")).className = "menu-footer";
}