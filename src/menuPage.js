export function menuPage() {
    const DOM = document.querySelector("#content");

    DOM.appendChild(document.createElement("div")).className = "menu-wrapper";
        document.querySelector(".menu-wrapper").appendChild(document.createElement("div")).className = "menu-header";
        document.querySelector(".menu-header").appendChild(document.createElement("h1")).textContent = "Menu";
        document.querySelector(".menu-header").appendChild(document.createElement("h4")).textContent = "Take a look at what we got!";

    document.querySelector(".menu-wrapper").appendChild(document.createElement("div")).className = "menu-info";
        document.querySelector(".menu-info").appendChild(document.createElement("p")).textContent = "Check out our daily menu specials!";
        document.querySelector(".menu-info").appendChild(document.createElement("div")).className = "image-area";
        document.querySelector(".image-area").appendChild(document.createElement("span")).className = "img";
        document.querySelector(".image-area").appendChild(document.createElement("span")).className = "img";
        document.querySelector(".image-area").appendChild(document.createElement("span")).className = "img";

    document.querySelector(".menu-wrapper").appendChild(document.createElement("div")).className = "menu-main";
        let menuItems = ["Big Porkers Menu", "Porker Junior Menu", "30 Gallons of Ice Tea", "Huge Mashed Potatos", "Margret's Jordy Drink special"];
        let totalItems = [1, 2, 3, 4, 5];    
        totalItems.forEach((item) => {
                document.querySelector(".menu-main").appendChild(document.createElement("span")).className = `menu${item}`;
                document.querySelector(`.menu${item}`).appendChild(document.createElement("div")).className = "img";
                document.querySelector(`.menu${item}`).appendChild(document.createElement("p"));
            });
        let menuItemsDrawn = document.querySelectorAll(`.menu-main > span > p`);
            menuItemsDrawn.forEach((item) => {
                for (let i = 0; i < menuItemsDrawn.length; i++) {
                    let random = Math.floor(Math.random() * menuItems.length);
                    item.className = menuItems[random];
                    item.textContent = menuItems[random];
                }
            })


    document.querySelector(".menu-wrapper").appendChild(document.createElement("div")).className = "menu-ad";
        document.querySelector(".menu-ad").appendChild(document.createElement("div")).className = "ad";
        document.querySelector(".ad").appendChild(document.createElement("h4")).textContent = "Are you interested in Big Pork?";
            document.querySelector(".ad > h4").appendChild(document.createElement("h3")).textContent = "Join our porky family!";
            document.querySelector(".ad").appendChild(document.createElement("p")).textContent = "If you love good home-grown food and a good laugh, think about joining our pork-team in your local area! Check your local restaurant provider for information about job openings at your local Auntie Hams!";

    document.querySelector(".menu-wrapper").appendChild(document.createElement("div")).className = "menu-footer";
        document.querySelector(".menu-footer").appendChild(document.createElement("p")).textContent = "According to European law, Auntie Ham's Holdings LLC is not allowed to build, promote, propogandize, solicit, spread, create connections to, open dialogs with, cook pork-chops with the intention of feeding any European citizen, establishment, law-firm or foundation. Any breach of this would be a breach of European Law according to §36 StGB. Auntie Hams' Holdings LLC is not responsible for diahrea, blood-loss, vomitting, loss of balance, loss of hearing/eyesight, incredibly fast progressing stomach ulcers after immediate consumption of any products therein. This is all a joke by the way.";
}