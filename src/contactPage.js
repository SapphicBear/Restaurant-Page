export function contactPage() {
    const DOM = document.querySelector("#content");

    DOM.appendChild(document.createElement("div")).className = "contact-header";
        document.querySelector(".contact-header").appendChild(document.createElement("h1")).textContent = "Contact";

    DOM.appendChild(document.createElement("div")).className = "contact-info";
    
    DOM.appendChild(document.createElement("div")).className = "contact-hours";

    DOM.appendChild(document.createElement("div")).className = "contact-footer";
}