let website = document.querySelector(".website");
let loadingscreen = document.querySelector(".loading-screen");

import { gamestate } from "./gamestate.js";

let levelone = document.querySelector(".level1");

import { level2index } from "./level2.js";
import { level1index } from "./level1.js";
import { level3index } from "./level3.js";
import { level4index } from "./level4.js";
import { level5index } from "./level5.js";
import { level6index } from "./level6.js";
import { level7index } from "./level7.js";
import { level8index } from "./level8.js";

import "./home.css";

let one = document.querySelector(".level-one-button");
let two = document.querySelector(".level-two-button");
let three = document.querySelector(".level-three-button");
let four = document.querySelector(".level-four-button");
let five = document.querySelector(".level-five-button");
let six = document.querySelector(".level-six-button");
let seven = document.querySelector(".level-seven-button");
let eight = document.querySelector(".level-eight-button");
let nine = document.querySelector(".level-nine-button");
let homee = document.querySelector(".home");

let homecurrentlevel = document.querySelector(".home-info-current-level");
let homecurrentcandle = document.querySelector(".home-info-current-candles");

let leveltwo = document.querySelector(".level2");
let levelthree = document.querySelector(".level3");
let levelfour = document.querySelector(".level4");
let levelfive = document.querySelector(".level5");
let levelsix = document.querySelector(".level6");
let levelseven = document.querySelector(".level7");
let leveleight = document.querySelector(".level8");

function home() {
    console.log("HOME");
    leveltwo.style.display = "none";
    levelfour.style.display = "none";
    levelone.style.display = "none";
    levelthree.style.display = "none";
    levelfive.style.display = "none";
    levelsix.style.display = "none";
    levelseven.style.display = "none";
    leveleight.style.display="none";

    loadingscreen.style.display = "none";

    homee.style.display = "flex";
    homee.style.flexDirection = "column";

    const levels = document.querySelectorAll(".levelbutton");

    levels.forEach((level) => {

        const levelNumber = Number(level.dataset.level);

        if (levelNumber <= gamestate.currentlevel) {
            level.style.display = "block";
        }
        else {
            level.style.display = "none";
        }

    });

    homecurrentlevel.textContent = `Current Level: ${gamestate.currentlevel}`;
    homecurrentcandle.textContent = `Candles Collected: ${gamestate.candles}`;
}


one.addEventListener("click", () => {
    homee.style.display = "none";
    level1index();
})

two.addEventListener("click", () => {
    homee.style.display = "none";
    level2index();
})

three.addEventListener("click", () => {
    homee.style.display = "none";
    level3index();
})

four.addEventListener("click", () => {
    homee.style.display = "none";
    level4index();
})

five.addEventListener("click", () => {
    homee.style.display = "none";
    level5index();
})

six.addEventListener("click", () => {
    homee.style.display = "none";
    level6index();
})

seven.addEventListener("click", () => {
    homee.style.display = "none";
    level7index();
})

eight.addEventListener("click",()=>{
    homee.style.display="none";
    level8index();
})


export { home };