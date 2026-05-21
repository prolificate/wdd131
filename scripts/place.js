document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temp = 10;
const windSpeed = 5;

document.querySelector('#temp').textContent = temp;
document.querySelector('#wind').textContent = windSpeed

function calculateWindChill(temp, speed){
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
} 

let windChill;

if (temp <= 10 && windSpeed > 4.8){
    windChill = calculateWindChill(temp,windSpeed) + "^C";
} else{
    windChill = "N/A";
}

document.querySelector("#chill").textContent = windChill;
