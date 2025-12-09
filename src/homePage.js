export function pageLoad() {
    const DOM = document.querySelector("#content");
    const aside = document.createElement("aside");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const para = document.createElement("p");
    const h4 = document.createElement("h4");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const div = document.createElement("div");

    DOM.appendChild(div).className = "header";
        document.querySelector(".header").appendChild(document.createElement("div")).className = "img";
        document.querySelector(".header").appendChild(document.createElement("div")).className = "hero-text";
            document.querySelector(".hero-text").appendChild(h1).textContent = "Welcome to Auntie Hams'";;
            document.querySelector(".hero-text").appendChild(h3).textContent = "What can we do you for?";

    DOM.appendChild(document.createElement("div")).className = "info";
        document.querySelector(".info").appendChild(document.createElement("aside")).className = "img";
        document.querySelector(".info").appendChild(document.createElement("div")).className = "text";
            
            document.querySelector(".text").appendChild(document.createElement("p")).textContent = "Welcome to your new favorite little slice of goodness! Auntie Hams', a world-wide celebrated brand has come to your area! How exciting! Prepare your gut for an experience unlike any other semi-quick-foods system has ever given you before! Guarenteed!";
                
            document.querySelector(".text").appendChild(document.createElement("p")).textContent = "Auntie has been cooking up grub for the whole family since 1987, when she opened her first restaraunt out of her parents' garage in Ding Dong, Texas, USA. Since then, Auntie Hams', under leadership of Auntie Ham's Holdings LLC, has crafted new food-solutions all across the contigual United States area (Europeans would never understand)!*";

    DOM.appendChild(document.createElement("div")).className = "main";
        document.querySelector(".main").appendChild(document.createElement("div")).className = "hours";
            document.querySelector(".hours").appendChild(h4).textContent = "Our Hours:";
            document.querySelector(".hours").appendChild(ul);
                ul.appendChild(li);
                    li.textContent = "Monday: 8:00am - 9:00pm";
                ul.appendChild(document.createElement("li")).textContent = "Tuesday: 8:00am - 9:00pm"
                ul.appendChild(document.createElement("li")).textContent = "Wednesday: 8:00am - 5:00pm";
                ul.appendChild(document.createElement("li")).textContent = "Thursday: 12:00pm - 11:00pm";
                ul.appendChild(document.createElement("li")).textContent = "Friday: Closed";
                ul.appendChild(document.createElement("li")).textContent = "Saturday: Closed";
                ul.appendChild(document.createElement("li")).textContent = "Sunday: 12:00pm - 9:00pm";

    DOM.appendChild(document.createElement("div")).className = "call-to-action";
        document.querySelector(".call-to-action").appendChild(document.createElement("h4")).textContent = "Are you interested in becoming a 'Hammer'?";
        document.querySelector(".call-to-action").appendChild(document.createElement("p")).textContent = `Check out at your local "Auntie Hams'" and ask about our "I'm Just A Hammer" sweepstakes! At specific locals you can win BIG and get the chance to create a career for yourself in the Auntie Hams' family! One lucky participant will be given a 100% fully funded trip to Ding Dong, Texas to inspect the Auntie Hams' food factory and win the change of a relocation bonus package to become the local Quality Source Expert for the Meat Team! Don't be shy, get in while the getting is good!`;
        
        document.querySelector(".call-to-action").appendChild(document.createElement("div")).className = "button-area";
            document.querySelector(".button-area").appendChild(document.createElement("p")).textContent = "Interested?";
            document.querySelector(".button-area").appendChild(document.createElement("button")).textContent = "Click here";

    DOM.appendChild(document.createElement("div")).className = "footer";
        document.querySelector(".footer").appendChild(document.createElement("p")).className = "health-info";
            document.querySelector(".health-info").textContent = "*According to European law, Auntie Ham's Holdings LLC is not allowed to build, promote, propogandize, solicit, spread, create connections to, open dialogs with, cook pork-chops with the intention of feeding any European citizen, establishment, law-firm or foundation. Any breach of this would be a breach of European Law according to §36 StGB. Auntie Hams' Holdings LLC is not responsible for diahrea, blood-loss, vomitting, loss of balance, loss of hearing/eyesight, incredibly fast progressing stomach ulcers after immediate consumption of any products therein. This is all a joke by the way.";
}