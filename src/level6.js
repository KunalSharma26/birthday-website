import "./level6.css";

import loading0 from "../assets/images/loading/0_.png";
import loading10 from "../assets/images/loading/10_.png";
import loading20 from "../assets/images/loading/20_.png";
import loading30 from "../assets/images/loading/30_.png";
import loading40 from "../assets/images/loading/40_.png";
import loading50 from "../assets/images/loading/50_.png";
import loading60 from "../assets/images/loading/60_.png";
import { home } from "./home";
import loading70 from "../assets/images/loading/70_.png";
import loading80 from "../assets/images/loading/80_.png";
import loading90 from "../assets/images/loading/90_.png";
import loading100 from "../assets/images/loading/100_.png";
import { gamestate,savegamestate } from "./gamestate";
const loadingImage = document.querySelector(".loading-image");
const loadingbutton = document.querySelector(".loading-button");
let website = document.querySelector(".website");
let loadingscreen = document.querySelector(".loading-screen");
let homee = document.querySelector(".home");
let leveltwo = document.querySelector(".level2");
let levelone = document.querySelector(".level1");
let levelthree = document.querySelector(".level3");
let levelfour = document.querySelector(".level4");
let levelfive = document.querySelector(".level5");
let levelsix = document.querySelector(".level6");
let levelseven = document.querySelector(".level7");
let leveleight = document.querySelector(".level8");


import song1 from "../assets/audio/dracula.mp3";
const songone = new Audio(song1);
import song2 from "../assets/audio/505.mp3";
const songtwo = new Audio(song2);
import song3 from "../assets/audio/porcelainn.mp3"
const songthree = new Audio(song3);
let levelsixquestion = document.querySelector(".level-six-question-main");
let levelsixquestionone = document.querySelector(".level-six-question-one");
let levelsixquestiontwo = document.querySelector(".level-six-question-two");
let levelsixquestionthree = document.querySelector(".level-six-question-three");
let yay = document.querySelector(".sixyay");
let levelsixcandledisplay = document.querySelector(".level-six-candle");
let levelsixcandlebutton = document.querySelector(".levelsixcandlebutton");
let sixbacktomain = document.querySelector(".sixbacktomain");
let correctsixone = document.querySelector(".correct-six-one");
let correctsixtwo = document.querySelector(".correct-six-two");
let correctsixthree = document.querySelector(".correct-six-three")

function level6() {
    console.log("LEVEL 6");
    loadingscreen.style.display = "none";
    levelone.style.display = "none";
    leveltwo.style.display = "none";
    levelthree.style.display = "none";
    songone.play();
    levelfour.style.display = "none";
    levelfive.style.display = "none";
    levelseven.style.display="none";
    leveleight.style.display="none";
    levelsix.style.display = "flex";
    levelsixcandledisplay.style.display = "none"
    levelsix.style.flexDirection = "column";
    levelsixquestionone.style.display = "flex";
    levelsixquestionthree.style.display = "none";
    levelsixquestiontwo.style.display = "none";
    sixbacktomain.style.display = "none";
    levelsixquestion.style.display = "flex";
    correctsixone.addEventListener("click", () => {
        levelsixquestionone.style.display = "none";
        songone.pause();
        songtwo.play();
        levelsixquestiontwo.style.display = "flex";
    })
    correctsixtwo.addEventListener("click", () => {
        levelsixquestiontwo.style.display = "none";
        songtwo.pause();
        songthree.play();
        levelsixquestionthree.style.display = "flex";
    })
    correctsixthree.addEventListener("click", () => {
        levelsixquestionthree.style.display = "none";
        songthree.pause();
        levelsixquestion.style.display = "none";
        levelsixcandledisplay.style.display = "flex";
    })
    levelsixcandlebutton.addEventListener("click", () => {
        songone.pause();
        songone.currentTime = 0;

        songtwo.pause();
        songtwo.currentTime = 0;

        songthree.pause();
        songthree.currentTime = 0;
        if (gamestate.levelscleared[5] == 6) {
            sixbacktomain.style.display = "flex";
            sixbacktomain.addEventListener("click", () => {
                levelsix.style.display = "none";
                home();
            })
            return;
        }
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(7);
        gamestate.levelscleared.push(6);
        gamestate.candles++;
        savegamestate();
        sixbacktomain.style.display = "flex";
        sixbacktomain.addEventListener("click", () => {
            levelsix.style.display = "none";
            home();
        });
    })
}

function level6index() {
    leveltwo.style.display = "none";
    levelfour.style.display = "none";
    levelone.style.display = "none";
    levelthree.style.display = "none";
    levelfive.style.display = "none";
    levelsix.style.display = "none";
    levelseven.style.display="none";
    leveleight.style.display="none";
    loadingscreen.style.display = "flex";
    loadingbutton.style.display = "none";
    const loadingImages = [loading0, loading10, loading20, loading30, loading40, loading50, loading60, loading70, loading80, loading90, loading100];
    function preloadImages(images) {
        return Promise.all(
            images.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();

                    img.onload = resolve;
                    img.onerror = reject;

                    img.src = src;
                });
            })
        );

    }

    preloadImages(loadingImages).then(() => {

        let index = 0;

        const interval = setInterval(() => {

            loadingImage.src = loadingImages[index];

            index++;

            if (index >= loadingImages.length) {
                clearInterval(interval);
            }

        }, 500);
        const inter = setTimeout(() => {
            loadingImage.style.height = "600px";
            loadingbutton.style.display = "block";
        }, 6000)

    });

    loadingbutton.onclick = () => {
        homee.style.display = "none";
        level6();
    }
}

export { level6, level6index }