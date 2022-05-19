let champName = document.getElementById("champ-name");
let champTitle = document.getElementById("champ-title");
let champDesc = document.getElementById("champ-desc");
let champImg = document.getElementById("champ-image");
let champLink = document.getElementById("champ-link");

let itemImg0 = document.getElementById("item-image0");
let itemImg1 = document.getElementById("item-image1");
let itemImg2 = document.getElementById("item-image2");
let itemImg3 = document.getElementById("item-image3");
let itemImg4 = document.getElementById("item-image4");
let itemImg5 = document.getElementById("item-image5");

let itemName0 = document.getElementById("item-name0");

let sumImg0 = document.getElementById("sum-image0");
let sumImg1 = document.getElementById("sum-image1");

let mainRuneTreeImg = document.getElementById("main-rune-tree-image");
let mainRuneTreeName = document.getElementById("main-rune-tree-name");

let secondaryRuneTreeImg = document.getElementById("secondary-rune-tree-image");
let secondaryRuneTreeName = document.getElementById("secondary-rune-tree-name");

let mainRune00 = document.getElementById("main-rune00");
let mainRune01 = document.getElementById("main-rune01");
let mainRune02 = document.getElementById("main-rune02");
let mainRune03 = document.getElementById("main-rune03");

let mainRune10 = document.getElementById("main-rune10");
let mainRune11 = document.getElementById("main-rune11");
let mainRune12 = document.getElementById("main-rune12");
let mainRune13 = document.getElementById("main-rune13");

let mainRune20 = document.getElementById("main-rune20");
let mainRune21 = document.getElementById("main-rune21");
let mainRune22 = document.getElementById("main-rune22");
let mainRune23 = document.getElementById("main-rune23");

let mainRune30 = document.getElementById("main-rune30");
let mainRune31 = document.getElementById("main-rune31");
let mainRune32 = document.getElementById("main-rune32");
let mainRune33 = document.getElementById("main-rune33");

let secondaryRune00 = document.getElementById("secondary-rune00");
let secondaryRune01 = document.getElementById("secondary-rune01");
let secondaryRune02 = document.getElementById("secondary-rune02");
let secondaryRune03 = document.getElementById("secondary-rune03");

let secondaryRune10 = document.getElementById("secondary-rune10");
let secondaryRune11 = document.getElementById("secondary-rune11");
let secondaryRune12 = document.getElementById("secondary-rune12");
let secondaryRune13 = document.getElementById("secondary-rune13");

let secondaryRune20 = document.getElementById("secondary-rune20");
let secondaryRune21 = document.getElementById("secondary-rune21");
let secondaryRune22 = document.getElementById("secondary-rune22");
let secondaryRune23 = document.getElementById("secondary-rune23");

let offenseRune0 = document.getElementById("offense-rune0");
let offenseRune1 = document.getElementById("offense-rune1");
let offenseRune2 = document.getElementById("offense-rune2");

let flexRune0 = document.getElementById("flex-rune0");
let flexRune1 = document.getElementById("flex-rune1");
let flexRune2 = document.getElementById("flex-rune2");

let defenseRune0 = document.getElementById("defense-rune0");
let defenseRune1 = document.getElementById("defense-rune1");
let defenseRune2 = document.getElementById("defense-rune2");

let mainRune0 = [mainRune00, mainRune01, mainRune02, mainRune03];
let mainRune1 = [mainRune10, mainRune11, mainRune12, mainRune13];
let mainRune2 = [mainRune20, mainRune21, mainRune22, mainRune23];
let mainRune3 = [mainRune30, mainRune31, mainRune32, mainRune33];

let secondaryRune0 = [secondaryRune00, secondaryRune01, secondaryRune02, secondaryRune03];
let secondaryRune1 = [secondaryRune10, secondaryRune11, secondaryRune12, secondaryRune13];
let secondaryRune2 = [secondaryRune20, secondaryRune21, secondaryRune22, secondaryRune23];

let secondaryRunes = [secondaryRune0, secondaryRune1, secondaryRune2];

let offenseRunes = [offenseRune0, offenseRune1, offenseRune2];
let flexRunes = [flexRune0, flexRune1, flexRune2];
let defenseRunes = [defenseRune0, defenseRune1, defenseRune2];

let mythicItems = [4644, 6632, 6691, 6692, 3001, 6656, 6662, 6671, 6630, 3152, 6673, 4005, 6672, 6653, 3190, 6655, 6617, 4636, 6693, 4633, 2065, 6631, 3068, 3078, 6664];
let tier2Boots = [3006, 3009, 3158, 3111, 3117, 3047, 3020];
let legendaryItems = [];
let summonerSpells = ["SummonerHeal.png", "SummonerHaste.png", "SummonerBarrier.png", "SummonerExhaust.png", "SummonerFlash.png", "SummonerTeleport.png", "SummonerSmite.png", "SummonerBoost.png", "SummonerDot.png"];

var champData;
var itemData;
var runeData;


async function getData() {
    const first = await fetch('./LeagueData/12.9.1/data/en_US/champion.json');
    const second = await fetch('./LeagueData/12.9.1/data/en_US/item.json');
    const third = await fetch('./LeagueData/12.9.1/data/en_US/runesReforged.json');
    champData = await first.json();
    itemData = await second.json();
    runeData = await third.json();

    await getLegendaryItems();
}

function getLegendaryItems() {
    for(var i = 0; i < Object.keys(itemData.data).length; i++)
    {
        if(itemData.data[Object.keys(itemData.data)[i]].depth === 3 && itemData.data[Object.keys(itemData.data)[i]].into === undefined && itemData.data[Object.keys(itemData.data)[i]].maps[11] === true)
        {
            legendaryItems.push(Object.keys(itemData.data)[i]);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function refresh() {
    // console.log(itemData);
    // console.log(champData.data);
    // console.log(runeData);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    let allActive = document.querySelectorAll(".active");

    allActive.forEach(e => {
        e.classList.remove("active");
    });

    let item2Index;
    let item3Index;
    let item4Index;
    let item5Index;

    let summonerSpell0Index;
    let summonerSpell1Index;

    let secondaryTreeIndex;

    let secondaryRow0;
    let secondaryRow1;

    let champIndex = getRandomInt(0, 159);
    let mythicIndex = getRandomInt(0, 25);
    let bootsIndex = getRandomInt(0, 7);
    
    item2Index = getRandomInt(0, 62);
    do{ item3Index = getRandomInt(0, legendaryItems.length);} while(item3Index === item2Index);
    do{ item4Index = getRandomInt(0, legendaryItems.length);} while(item4Index === item2Index || item4Index === item3Index);
    do{ item5Index = getRandomInt(0, legendaryItems.length);} while(item5Index === item2Index || item5Index === item3Index || item5Index === item4Index);


    summonerSpell0Index = getRandomInt(0, summonerSpells.length);
    do{ summonerSpell1Index = getRandomInt(0, summonerSpells.length);} while(summonerSpell1Index === summonerSpell0Index);

    let runeTreeIndex = getRandomInt(0, 5);
    do{ secondaryTreeIndex = getRandomInt(0, 5);} while(secondaryTreeIndex === runeTreeIndex);

    let mainRune0Index = getRandomInt(0, runeData[runeTreeIndex].slots[0].runes.length);
    let mainRune1Index = getRandomInt(0, runeData[runeTreeIndex].slots[1].runes.length);
    let mainRune2Index = getRandomInt(0, runeData[runeTreeIndex].slots[2].runes.length);
    let mainRune3Index = getRandomInt(0, runeData[runeTreeIndex].slots[3].runes.length);

    secondaryRow0 = getRandomInt(0, 3);
    do { secondaryRow1 = getRandomInt(0, 3);} while(secondaryRow1 === secondaryRow0);

    let secondaryRune0Index = getRandomInt(1, runeData[secondaryTreeIndex].slots[secondaryRow0 + 1].runes.length);
    let secondaryRune1Index = getRandomInt(1, runeData[secondaryTreeIndex].slots[secondaryRow1 + 1].runes.length);

    let offenseIndex = getRandomInt(0, 3);
    let flexIndex = getRandomInt(0, 3);
    let defenseIndex = getRandomInt(0, 3);
    

    let itemList = [0, 0, 0, 0, 0, 0];
    itemList[0] = mythicItems[mythicIndex];
    itemList[1] = tier2Boots[bootsIndex];
    itemList[2] = legendaryItems[item2Index];
    itemList[3] = legendaryItems[item3Index];
    itemList[4] = legendaryItems[item4Index];
    itemList[5] = legendaryItems[item5Index];

    let currentChampion = champData.data[Object.keys(champData.data)[champIndex]];

    let removeSpace = currentChampion.name.replace(' ', '-').toLowerCase();
    champLink.href = "https://www.leagueoflegends.com/en-us/champions/" + removeSpace.replace("'", "-");
    
    champName.textContent = currentChampion.name;
    champTitle.textContent = currentChampion.title;
    champDesc.textContent = currentChampion.blurb;
    if(Object.keys(champData.data)[champIndex] !== "Samira")
        champImg.src = "LeagueData/img/champion/centered/" + Object.keys(champData.data)[champIndex] + "_0.jpg";
    else
        champImg.src = "LeagueData/img/champion/splash/" + Object.keys(champData.data)[champIndex] + "_0.jpg";

    itemImg0.src = "LeagueData/12.9.1/img/item/" + parseInt(itemList[0]) + ".png";
    itemImg0.title = itemData.data[itemList[0]].name;
    itemImg1.src = "LeagueData/12.9.1/img/item/" + parseInt(itemList[1]) + ".png";
    itemImg1.title = itemData.data[itemList[1]].name;
    itemImg2.src = "LeagueData/12.9.1/img/item/" + parseInt(itemList[2]) + ".png";
    itemImg2.title = itemData.data[itemList[2]].name;
    itemImg3.src = "LeagueData/12.9.1/img/item/" + parseInt(itemList[3]) + ".png";
    itemImg3.title = itemData.data[itemList[3]].name;
    itemImg4.src = "LeagueData/12.9.1/img/item/" + parseInt(itemList[4]) + ".png";
    itemImg4.title = itemData.data[itemList[4]].name;
    itemImg5.src = "LeagueData/12.9.1/img/item/" + parseInt(itemList[5]) + ".png";
    itemImg5.title = itemData.data[itemList[5]].name;

    sumImg0.src = "LeagueData/12.9.1/img/spell/" + summonerSpells[summonerSpell0Index];
    sumImg1.src = "LeagueData/12.9.1/img/spell/" + summonerSpells[summonerSpell1Index];

    /*======== Main Runes ========*/
    mainRuneTreeImg.src = "LeagueData/img/" + runeData[runeTreeIndex].icon;
    mainRuneTreeName.textContent = runeData[runeTreeIndex].key;

    mainRune00.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[0].runes[0].icon;
    mainRune00.title = runeData[runeTreeIndex].slots[0].runes[0].name;
    mainRune01.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[0].runes[1].icon;
    mainRune01.title = runeData[runeTreeIndex].slots[0].runes[1].name;
    mainRune02.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[0].runes[2].icon;
    mainRune02.title = runeData[runeTreeIndex].slots[0].runes[2].name;
    if(runeData[runeTreeIndex].slots[0].runes.length > 3)
    {
        mainRune03.style.display = "block";
        mainRune03.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[0].runes[3].icon;
        mainRune03.title = runeData[runeTreeIndex].slots[0].runes[3].name;
    }
    else mainRune03.style.display = "none";

    mainRune10.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[1].runes[0].icon;
    mainRune10.title = runeData[runeTreeIndex].slots[1].runes[0].name;
    mainRune11.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[1].runes[1].icon;
    mainRune11.title = runeData[runeTreeIndex].slots[1].runes[1].name;
    mainRune12.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[1].runes[2].icon;
    mainRune12.title = runeData[runeTreeIndex].slots[1].runes[2].name;
    if(runeData[runeTreeIndex].slots[1].runes.length > 3)
    {
        mainRune13.style.display = "block";
        mainRune13.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[1].runes[3].icon;
        mainRune13.title = runeData[runeTreeIndex].slots[1].runes[3].name;
    }
    else mainRune13.style.display = "none";

    mainRune20.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[2].runes[0].icon;
    mainRune20.title = runeData[runeTreeIndex].slots[2].runes[0].name;
    mainRune21.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[2].runes[1].icon;
    mainRune21.title = runeData[runeTreeIndex].slots[2].runes[1].name;
    mainRune22.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[2].runes[2].icon;
    mainRune22.title = runeData[runeTreeIndex].slots[2].runes[2].name;
    if(runeData[runeTreeIndex].slots[2].runes.length > 3)
    {
        mainRune23.style.display = "block";
        mainRune23.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[1].runes[3].icon;
        mainRune23.title = runeData[runeTreeIndex].slots[1].runes[3].name;
    }
    else mainRune23.style.display = "none";

    mainRune30.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[3].runes[0].icon;
    mainRune30.title = runeData[runeTreeIndex].slots[3].runes[0].name;
    mainRune31.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[3].runes[1].icon;
    mainRune31.title = runeData[runeTreeIndex].slots[3].runes[1].name;
    mainRune32.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[3].runes[2].icon;
    mainRune32.title = runeData[runeTreeIndex].slots[3].runes[2].name;
    if(runeData[runeTreeIndex].slots[3].runes.length > 3)
    {
        mainRune33.style.display = "block";
        mainRune33.src = "LeagueData/img/" + runeData[runeTreeIndex].slots[3].runes[3].icon;
        mainRune33.title = runeData[runeTreeIndex].slots[3].runes[3].name;
    }
    else mainRune33.style.display = "none";

    /*======== Secondary Runes ========*/
    secondaryRuneTreeImg.src = "LeagueData/img/" + runeData[secondaryTreeIndex].icon;
    secondaryRuneTreeName.textContent = runeData[secondaryTreeIndex].key;

    secondaryRune00.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[1].runes[0].icon;
    secondaryRune00.title = runeData[secondaryTreeIndex].slots[1].runes[0].name;
    secondaryRune01.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[1].runes[1].icon;
    secondaryRune01.title = runeData[secondaryTreeIndex].slots[1].runes[1].name;
    secondaryRune02.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[1].runes[2].icon;
    secondaryRune02.title = runeData[secondaryTreeIndex].slots[1].runes[2].name;
    if(runeData[secondaryTreeIndex].slots[1].runes.length > 3)
    {
        secondaryRune03.style.display = "block";
        secondaryRune03.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[1].runes[3].icon;
        secondaryRune03.title = runeData[secondaryTreeIndex].slots[1].runes[3].name;
    }
    else secondaryRune03.style.display = "none";

    secondaryRune10.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[2].runes[0].icon;
    secondaryRune10.title = runeData[secondaryTreeIndex].slots[2].runes[0].name;
    secondaryRune11.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[2].runes[1].icon;
    secondaryRune11.title = runeData[secondaryTreeIndex].slots[2].runes[1].name;
    secondaryRune12.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[2].runes[2].icon;
    secondaryRune12.title = runeData[secondaryTreeIndex].slots[2].runes[2].name;
    if(runeData[secondaryTreeIndex].slots[2].runes.length > 3)
    {
        secondaryRune13.style.display = "block";
        secondaryRune13.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[2].runes[3].icon;
        secondaryRune13.title = runeData[secondaryTreeIndex].slots[2].runes[3].name;
    }
    else secondaryRune13.style.display = "none";

    secondaryRune20.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[3].runes[0].icon;
    secondaryRune20.title = runeData[secondaryTreeIndex].slots[3].runes[0].name;
    secondaryRune21.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[3].runes[1].icon;
    secondaryRune21.title = runeData[secondaryTreeIndex].slots[3].runes[1].name;
    secondaryRune22.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[3].runes[2].icon;
    secondaryRune22.title = runeData[secondaryTreeIndex].slots[3].runes[2].name;
    if(runeData[secondaryTreeIndex].slots[3].runes.length > 3)
    {
        secondaryRune23.style.display = "block";
        secondaryRune23.src = "LeagueData/img/" + runeData[secondaryTreeIndex].slots[3].runes[3].icon;
        secondaryRune23.title = runeData[secondaryTreeIndex].slots[3].runes[3].name;
    }
    else secondaryRune23.style.display = "none";

    mainRune0[mainRune0Index].classList.add("active");
    mainRune1[mainRune1Index].classList.add("active");
    mainRune2[mainRune2Index].classList.add("active");
    mainRune3[mainRune3Index].classList.add("active");

    secondaryRunes[secondaryRow0][secondaryRune0Index].classList.add("active");
    secondaryRunes[secondaryRow1][secondaryRune1Index].classList.add("active");

    offenseRunes[offenseIndex].classList.add("active");
    flexRunes[flexIndex].classList.add("active");
    defenseRunes[defenseIndex].classList.add("active");

}

getData();

