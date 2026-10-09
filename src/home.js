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
import { level9index } from "./level9.js";
import { level10index } from "./level10.js";
import { level11index } from "./level11.js";
import { level12index } from "./level12.js";
import { level13index } from "./level13.js";
import { level14index } from "./level14.js";
import { level15, level15index } from "./level15.js";

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
let ten = document.querySelector(".level-ten-button");
let eleven = document.querySelector(".level-eleven-button");
let twelve = document.querySelector(".level-twelve-button");
let thirteen = document.querySelector(".level-thirteen-button");
let fourteen = document.querySelector(".level-fourteen-button");
let fifteen = document.querySelector(".level-fifteen-button");
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
let levelnine = document.querySelector(".level9");
let levelten = document.querySelector(".level10");
let leveleleven = document.querySelector(".level11");
let leveltwelve = document.querySelector(".level12");
let levelthirteen = document.querySelector(".level13");
let levelfourteen = document.querySelector(".level14");
let levelfifteen = document.querySelector(".level15");
let levelsixteen = document.querySelector(".level16");
let levelseventeen = document.querySelector(".level17");
let leveleighteen = document.querySelector(".level18");
let levelnineteen = document.querySelector(".level19");
let levelfinal = document.querySelector(".levelfinal");


function home() {
  console.log("HOME");
  leveltwo.style.display = "none";
  levelfour.style.display = "none";
  levelone.style.display = "none";
  levelthree.style.display = "none";
  levelfive.style.display = "none";
  levelsix.style.display = "none";
  levelseven.style.display = "none";
  leveleight.style.display = "none";
  levelnine.style.display = "none";
  levelten.style.display = "none";
  leveleleven.style.display = "none";
  leveltwelve.style.display = "none";
  levelthirteen.style.display = "none";
  levelfourteen.style.display = "none";
  levelfifteen.style.display = "none";
  levelsixteen.style.display = "none";
  levelseventeen.style.display = "none";
  leveleighteen.style.display = "none";
  levelnineteen.style.display = "none";
  levelfinal.style.display = "none";

  loadingscreen.style.display = "none";

  homee.style.display = "flex";
  homee.style.flexDirection = "column";

  const levels = document.querySelectorAll(".levelbutton");

  levels.forEach((level) => {
    const levelNumber = Number(level.dataset.level);

    if (levelNumber <= gamestate.currentlevel) {
      level.style.display = "block";
    } else {
      level.style.display = "none";
    }
  });

  homecurrentlevel.textContent = `Current Level: ${gamestate.currentlevel}`;
  homecurrentcandle.textContent = `Candles Collected: ${gamestate.candles}`;
}

one.addEventListener("click", () => {
  homee.style.display = "none";
  level1index();
});

two.addEventListener("click", () => {
  homee.style.display = "none";
  level2index();
});

three.addEventListener("click", () => {
  homee.style.display = "none";
  level3index();
});

four.addEventListener("click", () => {
  homee.style.display = "none";
  level4index();
});

five.addEventListener("click", () => {
  homee.style.display = "none";
  level5index();
});

six.addEventListener("click", () => {
  homee.style.display = "none";
  level6index();
});

seven.addEventListener("click", () => {
  homee.style.display = "none";
  level7index();
});

eight.addEventListener("click", () => {
  homee.style.display = "none";
  level8index();
});

nine.addEventListener("click", () => {
  homee.style.display = "none";
  level9index();
});

ten.addEventListener("click", () => {
  homee.style.display = "none";
  level10index();
});

eleven.addEventListener("click", () => {
  homee.style.display = "none";
  level11index();
});

twelve.addEventListener("click", () => {
  homee.style.display = "none";
  level12index();
});

thirteen.addEventListener("click", () => {
  homee.style.display = "none";
  level13index();
});

fourteen.addEventListener("click",()=>{
    homee.style.display="none";
    level14index();
})

fifteen.addEventListener("click",()=>{
    homee.style.display="none";
    level15index();
})

export { home };
