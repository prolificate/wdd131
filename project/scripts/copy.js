document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.querySelector("#menu");
const nav = document.querySelector("#nav");

button.addEventListener("click", () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
});

const gallery = [
    {
        imgURL: "https://www.washingtonpost.com/graphics/2018/world/nigerian-emir-beholds-the-future/img/2018_01_Wapo_Kano_Emir_019.jpg",
        name: "Hausa tribe",
        p: "",
    },
    {
        imgURL: "https://discoveryoruba.com/wp-content/uploads/2023/07/shutterstock_1268811232.jpg",
        name: "Yoruba",
        p: "",
    },
    {
        imgURL: "https://aaregistry.org/wp-content/uploads/2024/11/Igbo-people.jpeg",
        name: "Igbo",
        p: "",
    },
]

const container = document.querySelector(".gallery");
function display(list){
    container.innerHTML = "";
    list.forEach(element => {
        const cont = document.createElement("section");
        cont.classList.add("cont");

        const image = document.createElement("img");
        image.setAttribute("src", element.imgURL);
        image.setAttribute("alt", element.name);
        image.setAttribute("loading", "lazy");

        const name = document.createElement("h3");
        name.textContent = element.name;

        const p = document.createElement("p");
        p.textContent = element.p;

        cont.appendChild(image);
        cont.appendChild(name);
        cont.appendChild(p);

        container.appendChild(cont);
    });
}
display(gallery);

const second = [
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

const div = document.querySelector(".second");
function display(list){
    div.innerHTML = "";
    list.forEach(element => {
        const second = document.createElement("section");
        card.classList.add("second");

        const img = document.createElement("img");

        img.setAttribute("src", element.imgURL);
        img.setAttribute("alt", element.name);
        img.setAttribute("loading", "lazy");

        const name = document.createElement("h3");
        name.textContent = element.name;

        const a = document.createElement("a");
        a.textContent = element.link;

        second.appendChild(img);
        second.appendChild(name);
        second.appendChild(a);

        second.appendChild(second);
    });
}

display(second);

const third = [
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

const div = document.querySelector(".third");
function display(list){
    div.innerHTML = "";
    list.forEach(element => {
        const third = document.createElement("section");
        card.classList.add("third");

        const img = document.createElement("img");

        img.setAttribute("src", element.imgURL);
        img.setAttribute("alt", element.name);
        img.setAttribute("loading", "lazy");

        const name = document.createElement("h3");
        name.textContent = element.name;

        const a = document.createElement("a");
        a.textContent = element.link;

        third.appendChild(img);
        third.appendChild(name);
        third.appendChild(a);

        third.appendChild(third);
    });
}

display(third);
