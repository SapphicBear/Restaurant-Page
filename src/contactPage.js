export function contactPage() {
    const DOM = document.querySelector("#content");
    DOM.appendChild(document.createElement("div")).className = "contact-wrapper";
    document.querySelector(".contact-wrapper").appendChild(document.createElement("div")).className = "contact-header";
        document.querySelector(".contact-header").appendChild(document.createElement("h1")).textContent = "Contact";

    document.querySelector(".contact-wrapper").appendChild(document.createElement("div")).className = "contact-info";
        document.querySelector(".contact-info").appendChild(document.createElement("p")).appendChild(document.createElement("strong")).textContent = "Contact us here:"
        document.querySelector(".contact-info").appendChild(document.createElement("ul"));
            document.querySelector("ul").appendChild(document.createElement("li")).textContent = "Email: auntiehams@dingDong.net";
            document.querySelector("ul").appendChild(document.createElement("li")).textContent = "Telephone: 555-0000";
            document.querySelector("ul").appendChild(document.createElement("li")).textContent = "Site creation information: Auntie Hams Web Development Department";
            document.querySelector("ul").appendChild(document.createElement("li")).textContent = "For more information, follow us on Blusky and subscribe to our newsletter!";
    document.querySelector(".contact-wrapper").appendChild(document.createElement("div")).className = "contact-hours";
        document.querySelector(".contact-hours").appendChild(document.createElement("h3")).textContent = "Our hours again! Just in case!"
        document.querySelector(".contact-hours").appendChild(document.createElement("ul"));
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Monday: 8:00am - 9:00pm";
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Tuesday: 8:00am - 9:00pm";
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Wednesday: 8:00am - 5:00pm";
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Thursday: 12:00pm - 11:00pm";
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Friday: Closed";
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Saturday: Closed";
            document.querySelector(".contact-hours > ul").appendChild(document.createElement("li")).textContent = "Sunday: 12:00pm - 9:00pm";
        document.querySelector(".contact-hours").appendChild(document.createElement("p")).textContent = "For emergencies please call the local emergency-hotline in your area of the world. Do not try and call us, we will not answer."

    document.querySelector(".contact-wrapper").appendChild(document.createElement("div")).className = "contact-footer";
        document.querySelector(".contact-footer").appendChild(document.createElement("p")).textContent = "According to European law, Auntie Ham's Holdings LLC is not allowed to build, promote, propogandize, solicit, spread, create connections to, open dialogs with, cook pork-chops with the intention of feeding any European citizen, establishment, law-firm or foundation. Any breach of this would be a breach of European Law according to §36 StGB. Auntie Hams' Holdings LLC is not responsible for diahrea, blood-loss, vomitting, loss of balance, loss of hearing/eyesight, incredibly fast progressing stomach ulcers after immediate consumption of any products therein. This is all a joke by the way.";
}