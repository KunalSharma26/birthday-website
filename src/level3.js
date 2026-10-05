import "./level3.css";
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
import { gamestate } from "./gamestate";
const loadingImage = document.querySelector(".loading-image");
const loadingbutton = document.querySelector(".loading-button");
let website = document.querySelector(".website");
let loadingscreen = document.querySelector(".loading-screen");
let homee = document.querySelector(".home");
let leveltwo = document.querySelector(".level2");
let levelone = document.querySelector(".level1");
let candlemain = document.querySelector(".level-three-main-candle");
let form = document.querySelector(".levelthreeform");
let levelthree = document.querySelector(".level3");
let valuee = document.querySelector("#levelthreeform");
let backtomain = document.querySelector(".level-three-backtomain");
let candle = document.querySelector(".level-three-candle-button");
let levelfour = document.querySelector(".level4");
let levelfive = document.querySelector(".level5");
function level3(){
    candlemain.style.display = "none";
    backtomain.style.display="none";
    levelone.style.display="none";
    form.style.display = "flex";
    leveltwo.style.display="none";
    levelfour.style.display="none";
    levelfive.style.display="none";
    loadingscreen.style.display = "none";
    levelthree.style.display="flex";
    levelthree.style.flexDirection="column";
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        if(Number(valuee.value)==20231019){
            candlemain.style.display="flex";
            form.style.display = "none";
        }
        form.reset();
    })
    candle.addEventListener("click",()=>{
        if(gamestate.levelscleared[2]==3){
            backtomain.style.display = "flex";
            backtomain.addEventListener("click",()=>{
                home();
            })
            return;
        }
        
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(4);
        gamestate.levelscleared.push(3);
        gamestate.candles++;
        backtomain.style.display = "flex";
        backtomain.addEventListener("click", () => {
            home();
        });
    })
}

function level3index(){
    loadingscreen.style.display="flex";
    loadingbutton.style.display="none";
    const loadingImages = [loading0,loading10,loading20,loading30,loading40,loading50,loading60,loading70,loading80,loading90,loading100];
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
        const inter = setTimeout(()=>{
            loadingImage.style.height="600px";
            loadingbutton.style.display="block";
        },6000)

    });

    loadingbutton.addEventListener("click",()=>{
        homee.style.display="none";
        level3();
    })
}

export { level3, level3index}