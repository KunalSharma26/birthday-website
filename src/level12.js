import "./level12.css";

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
import { gamestate, savegamestate } from "./gamestate";
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


let bar1 = document.querySelector(".status-fill-one");
let bar2 = document.querySelector(".status-fill-two");
let bar3 = document.querySelector(".status-fill-three");
let bar4 = document.querySelector(".status-fill-four");
let bar5 = document.querySelector(".status-fill-five");
let bar6 = document.querySelector(".status-fill-six");
let bar7 = document.querySelector(".status-fill-seven");
let bar8 = document.querySelector(".status-fill-eight");
let bar9 = document.querySelector(".status-fill-nine");
let bar10 = document.querySelector(".status-fill-ten");
let candle = document.querySelector(".twelvecandle");
let twelvebacktomain = document.querySelector(".twelvebacktomain");

function level12() {
    loadingscreen.style.display = "none";
    levelone.style.display = "none";
    leveltwo.style.display = "none";
    levelthree.style.display = "none";
    levelfour.style.display = "none";
    levelfive.style.display = "none";
    levelsix.style.display = "none";
    levelseven.style.display = "none";
    leveleight.style.display = "none";
    levelnine.style.display = "none";
    levelten.style.display = "none";
    leveleleven.style.display = "none";
    levelthirteen.style.display="none";
    levelfourteen.style.display = "none";
    levelfifteen.style.display = "none";
    levelsixteen.style.display = "none";
    levelseventeen.style.display = "none";
    leveleighteen.style.display = "none";
    levelnineteen.style.display = "none";
    levelfinal.style.display = "none";
    leveltwelve.style.display = "flex";
    leveltwelve.style.flexDirection = "column";
    twelvebacktomain.style.display = "none";
    setTimeout(() => {
        bar1.style.width = "19%";
    }, 100);
    setTimeout(() => {
        bar2.style.width = "95%";
    }, 100);
    setTimeout(() => {
        bar3.style.width = "60%";
    }, 100);
    setTimeout(() => {
        bar4.style.width = "200%";
    }, 100);
    setTimeout(() => {
        bar5.style.width = "83%";
    }, 100);
    setTimeout(() => {
        bar6.style.width = "90%";
    }, 100);
    setTimeout(() => {
        bar7.style.width = "100%";
    }, 100);
    setTimeout(() => {
        bar8.style.width = "0%";
    }, 100);
    setTimeout(() => {
        bar9.style.width = "57.89%";
    }, 100);
    setTimeout(() => {
        bar10.style.width = "1000%";
    }, 100);
    candle.addEventListener("click", () => {
        if (gamestate.levelscleared[11] == 12) {
            twelvebacktomain.style.display = "flex";
            twelvebacktomain.addEventListener("click", () => {
                leveltwelve.style.display = "none";
                home();
            })
            return;
        }
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(13);
        gamestate.levelscleared.push(12);
        gamestate.candles++;
        savegamestate();
        twelvebacktomain.style.display = "flex";
        twelvebacktomain.addEventListener("click", () => {
            leveltwelve.style.display = "none";
            home();
        });
    })
}

function level12index() {
    loadingscreen.style.display = "none";
    levelone.style.display = "none";
    leveltwo.style.display = "none";
    levelthree.style.display = "none";
    levelfour.style.display = "none";
    levelfive.style.display = "none";
    levelsix.style.display = "none";
    levelseven.style.display = "none";
    leveleight.style.display = "none";
    levelnine.style.display = "none";
    levelten.style.display = "none";
    leveleleven.style.display = "none";
    leveltwelve.style.display = "none";
    levelthirteen.style.display="none";
    levelfourteen.style.display = "none";
    levelfifteen.style.display = "none";
    levelsixteen.style.display = "none";
    levelseventeen.style.display = "none";
    leveleighteen.style.display = "none";
    levelnineteen.style.display = "none";
    levelfinal.style.display = "none";
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
        level12();
    }
}

export { level12index, level12 }