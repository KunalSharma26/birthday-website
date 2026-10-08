import "./level10.css";

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
let star = document.querySelector(".star");
let staropen = document.querySelector(".staropen");
let potato = document.querySelector(".potato");
let potatocontent = document.querySelector(".ninepotato");
let choco = document.querySelector(".choco");
let chococontent = document.querySelector(".chococontent");
let chick = document.querySelector(".chick");
let chiccontent = document.querySelector(".chiccontent");
let phone = document.querySelector(".phone");
let phonecontent = document.querySelector(".phonecontent");
let poloroid = document.querySelector(".poloroid");
let poloroidcontent = document.querySelector(".poloroidcontent");
let candle = document.querySelector(".tencandle");
let candlecontent = document.querySelector(".tencandlecontent");
let tenbacktomain = document.querySelector(".tenbacktomain");

function level10() {
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
    leveleleven.style.display="none";
    levelten.style.display = "flex";
    levelten.style.flexDirection = "column";
    star.style.display = "flex";
    staropen.style.display = "none";
    potatocontent.style.display = "none";
    potato.style.display = "none";
    choco.style.display = "none";
    chococontent.style.display = "none";
    chick.style.display = "none";
    chiccontent.style.display = "none";
    phone.style.display = "none";
    phonecontent.style.display = "none";
    poloroid.style.display = "none";
    poloroidcontent.style.display = "none";
    candle.style.display="none";
    candlecontent.style.display="none";
    tenbacktomain.style.display="none";
    star.addEventListener("click", () => {
        star.style.display = "none";
        staropen.style.display = "flex";
    })
    let count = 0;
    staropen.addEventListener("click", () => {
        if (count == 0) {
            potato.style.display = "flex";
            potatocontent.style.display = "inline";
            let interval = setTimeout(() => {
                potatocontent.style.display = "none";
            }, 4000)
            count++;
        }
        else if (count == 1) {
            choco.style.display = "flex";
            chococontent.style.display = "inline";
            let interval = setTimeout(() => {
                chococontent.style.display = "none";
            }, 4000)
            count++
        }
        else if (count == 2) {
            chick.style.display = "flex";
            chiccontent.style.display = "inline";
            let interval = setTimeout(() => {
                chiccontent.style.display = "none";
            }, 4000)
            count++
        }
        else if (count == 3) {
            phone.style.display = "flex";
            phonecontent.style.display = "inline";
            let interval = setTimeout(() => {
                phonecontent.style.display = "none";
            }, 4000)
            count++
        }
        else if (count == 4) {
            poloroid.style.display = "flex";
            poloroidcontent.style.display = "inline";
            let interval = setTimeout(() => {
                poloroidcontent.style.display = "none";
            }, 4000)
            count++
        }
        else if (count == 5) {
            candle.style.display = "flex";
            candlecontent.style.display = "inline";
            let interval = setTimeout(() => {
                candlecontent.style.display = "none";
            }, 4000)
        }
    })
    potato.addEventListener("mouseenter", () => {
        potatocontent.style.display = "inline";
    })
    potato.addEventListener("mouseleave", () => {
        potatocontent.style.display = "none";
    })
    choco.addEventListener("mouseenter", () => {
        chococontent.style.display = "inline";
    })
    choco.addEventListener("mouseleave", () => {
        chococontent.style.display = "none";
    })
    chick.addEventListener("mouseenter", () => {
        chiccontent.style.display = "inline";
    })
    chick.addEventListener("mouseleave", () => {
        chiccontent.style.display = "none";
    })
    phone.addEventListener("mouseenter", () => {
        phonecontent.style.display = "inline";
    })
    phone.addEventListener("mouseleave", () => {
        phonecontent.style.display = "none";
    })
    poloroid.addEventListener("mouseenter", () => {
        poloroidcontent.style.display = "inline";
    })
    poloroid.addEventListener("mouseleave", () => {
        poloroidcontent.style.display = "none";
    })
    candle.addEventListener("mouseenter", () => {
        candlecontent.style.display = "inline";
    })
    candle.addEventListener("mouseleave", () => {
        candlecontent.style.display = "none";
    })
    candle.addEventListener("click",()=>{
        if (gamestate.levelscleared[9] == 10) {
            tenbacktomain.style.display="flex";
            tenbacktomain.addEventListener("click", () => {
                levelten.style.display = "none";
                home();
            })
            return;
        }
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(11);
        gamestate.levelscleared.push(10);
        gamestate.candles++;
        savegamestate();
        tenbacktomain.style.display = "flex";
        tenbacktomain.addEventListener("click", () => {
            levelten.style.display = "none";
            home();
        });
    })

}

function level10index() {
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
    leveleleven.style.display="none";
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
        level10();
    }
}

export { level10, level10index }