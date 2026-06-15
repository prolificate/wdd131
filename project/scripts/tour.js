const tour = [
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/A_pathway_in_the_Lekki_Convention_Center.jpg/330px-A_pathway_in_the_Lekki_Convention_Center.jpg",
        name: "Lekki Conservation Center",
        location: "Km 19, Lekki - Epe Expressway, Lekki Peninsula II, Lekki, Lagos.",
    },
    {
        url: "http://atqnews.com/wp-content/uploads/2020/05/Yankari-Games.jpe",
        name: "Yankari Games Reserve",
        location: "Bauchi State Nigeria",
    },
    {
        url: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LqksHCjUqByalM4QO-QPJQ.jpeg",
        name: "Obudu Cattle Ranch",
        location: "Obudu,Cross River state",
    },
    {
        url: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZJOnoVpTQH6-i4J35LS2oA@2x.jpeg",
        name: "Nike Art Gallery",
        location: " Old Ede Road, Oshogbo, Osun State, Nigeria",
    },
    {
        url: "https://static.wixstatic.com/media/b98b0a_c3affbe4745d41be938ab478d22723f4~mv2.jpg/v1/fill/w_740,h_987,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b98b0a_c3affbe4745d41be938ab478d22723f4~mv2.jpg",
        name: "Freedom Park",
        location: "Lagos Nigeria",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zuma_Rock.jpg/330px-Zuma_Rock.jpg",
        name: "Zuma Rock",
        location: "Madalla, Niger State, Nigeria",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Aso_Rock_%2C_Abuja.jpg/500px-Aso_Rock_%2C_Abuja.jpg?_=20230929144805",
        name: "Aso Rock",
        location: "Abuja Nigeria",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Freedom_Statue_at_Badagry_Heritage_Museum.jpg/250px-Freedom_Statue_at_Badagry_Heritage_Museum.jpg",
        name: "Badagry Slave Museum and Black History Museum",
        location: "Badagry Lagos Nigeria",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gurara_waterfalls.jpg/330px-Gurara_waterfalls.jpg",
        name: "Gurara Waterfalls",
        location: "Gurara, Niger state, Nigeria",
    },
];

const div = document.querySelector(".tour");

function display(album) {
  div.innerHTML = "";

  album.forEach((element) => {
    const show = document.createElement("section");

    const img = document.createElement("img");
    img.src = element.url;
    img.alt = element.name;
    img.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = element.name;

    const location = document.createElement("p");
    location.textContent = element.location;

    show.appendChild(img);
    show.appendChild(name);
    show.appendChild(location);

    div.appendChild(show);
  });
}

display(tour);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.querySelector("#menu");
const nav = document.querySelector("#nav");

button.addEventListener("click", () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
});