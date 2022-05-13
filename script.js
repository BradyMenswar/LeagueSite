let para = document.getElementById("test");
let img = document.getElementById("full-image");

var champData;

async function getData() {
    const first = await fetch('./LeagueData/12.9.1/data/en_US/champion.json');
    champData = await first.json();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function refresh() {
    
    let champIndex = getRandomInt(0, 159)

    let currentChampion = champData.data[Object.keys(champData.data)[champIndex]]
    console.log(champData.data);
    para.textContent = currentChampion.name;
    img.src = "LeagueData/img/champion/centered/" + Object.keys(champData.data)[champIndex] + "_0.jpg";

    
}

getData();

