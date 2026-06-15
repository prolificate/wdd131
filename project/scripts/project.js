const site = [
    {
        imgURL: "https://www.bellanaija.com/wp-content/uploads/2025/10/SaveClip.App_574764437_18535598155039959_7801457239087537553_n.jpg",
        name: "Culture",
        link: "Discover Nigeria Culture"
    },
    {
        imgURL: "https://www.cakesandcateringbyjoaida.com/wp-content/uploads/2026/01/c3288893-746c-47c2-89e0-d2765aeb86f7.jpg",
        name: "Food",
        link: "Explore Nigeria's Cuisines",
    },
    {
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zuma_Rock.jpg/330px-Zuma_Rock.jpg",
        name: "Tourist Spot",
        link: "Check out The Beauuty of Nideria"
    },
]

const div = document.querySelector(".site");
function display(list){
    div.innerHTML = "";
    list.forEach(element => {
        const card = document.createElement("section");
        card.classList.add("card");

        const img = document.createElement("img");

        img.setAttribute("src", element.imgURL);
        img.setAttribute("alt", element.name);
        img.setAttribute("loading", "lazy");

        const name = document.createElement("h3");
        name.textContent = element.name;

        const a = document.createElement("a");
        a.textContent = element.link;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(a);

        div.appendChild(card);
    });
}

display(site);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.querySelector("#menu");
const nav = document.querySelector("#nav");

button.addEventListener("click", () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
});