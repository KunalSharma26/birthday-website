let website = document.querySelector(".website");
let loadingscreen = document.querySelector(".loading-screen");
import { gamestate } from "./gamestate.js";
let levelone = document.querySelector(".level1");
import { level2index } from "./level2.js";
let currentlevel = 1;
import "./home.css";
import { level1, level1index } from "./level1.js";
import { level3index } from "./level3.js";
import { level4,level4index } from "./level4.js";
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
let sixteen = document.querySelector(".level-sixteen-button");
let seventeen = document.querySelector(".level-seventeen-button");
let eighteen = document.querySelector(".level-eighteen-button");
let nineteen = document.querySelector(".level-nineteen-button");
let homee = document.querySelector(".home");
let homecurrentlevel = document.querySelector(".home-info-current-level");
let homecurrentcandle = document.querySelector(".home-info-current-candles");
let leveltwo = document.querySelector(".level2");
let levelthree = document.querySelector(".level3");
let levelfour = document.querySelector(".level4")
function home(){
    leveltwo.style.display="none";
    levelfour.style.display="none";
    levelone.style.display="none";
    levelthree.style.display="none";
    loadingscreen.style.display="none";
    homee.style.display="flex";
    homee.style.flexDirection="column";

    const levels = document.querySelectorAll(".levelbutton");



    levels.forEach((level) => {

        const levelNumber = Number(
            level.dataset.level
        );

        if (levelNumber <= gamestate.currentlevel) {
            level.style.display = "block";
        } else {
            level.style.display = "none";
        }

    });
    homecurrentlevel.textContent=`Current Level: ${gamestate.currentlevel}`;
    homecurrentcandle.textContent=`Candles Collected: ${gamestate.candles}`;
    one.addEventListener("click",()=>{
        homee.style.display="none";
        level1index();
    })
    two.addEventListener("click",()=>{
        homee.style.display="none";
        level2index();
    })
    three.addEventListener("click",()=>{
        homee.style.display="none";
        level3index();
    })

}

export {home}
