let levelone = document.querySelector(".level1");
import "./levelone.css";
import { home } from "./home";
let candle = document.querySelector(".levelone-main-button");
let levelonebutton = document.querySelector(".levelone-button");
import loading0 from "../assets/images/loading/0_.png"
import loading10 from "../assets/images/loading/10_.png";
import loading20 from "../assets/images/loading/20_.png";
import loading30 from "../assets/images/loading/30_.png";
import loading40 from "../assets/images/loading/40_.png";
import loading50 from "../assets/images/loading/50_.png";
import loading60 from "../assets/images/loading/60_.png";
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
function level1(){
    loadingscreen.style.display="none";
    levelone.style.display="flex";
    candle.addEventListener("click",()=>{
        if(gamestate.levelscleared[0]==1){
            return;
        }
        gamestate.currentlevel++;
        gamestate.levelscleared.push(1);
        gamestate.unlockedlevels.push(1);
        gamestate.candles++;
        levelonebutton.style.display="block";
        levelonebutton.addEventListener("click",()=>{
            levelone.style.display="none";
            home();
        })
    })
}
function level1index(){
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
        level1();
    })

}



export {level1, level1index}