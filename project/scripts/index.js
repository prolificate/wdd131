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

function display(list) {
  div.innerHTML = "";

  list.forEach((element) => {
    const card = document.createElement("section");

    const img = document.createElement("img");
    img.src = element.url;
    img.alt = element.name;
    img.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = element.name;

    const location = document.createElement("p");
    location.textContent = element.location;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);

    div.appendChild(card);
  });
}

display(site);