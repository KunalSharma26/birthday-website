import "./level5.css"
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
let levelthree = document.querySelector(".level3");
let levelfour = document.querySelector(".level4");
let levelfive = document.querySelector(".level5");
let levelfivecandledisplay = document.querySelector(".levelfivecandledisplay");
let mecha = document.querySelector(".mecha");
let fiveselect = document.querySelector(".fiveselect");
let levelfivecandlebutton = document.querySelector(".levelfivecandlebutton");
let fivebacktomain = document.querySelector(".fivebacktomain");
function level5(){
    loadingscreen.style.display = "none";
    levelone.style.display="none";
    leveltwo.style.display="none";
    levelthree.style.display="none";
    levelfour.style.display="none";
    levelfive.style.display="flex";
    levelfive.style.flexDirection="column";
    levelfivecandledisplay.style.display="none";
    fivebacktomain.style.display="none";
    mecha.style.display="flex";
    fiveselect.style.display="flex";
    fiveselect.addEventListener("click",()=>{
        mecha.style.display="none";
        fiveselect.style.display="none";
        levelfivecandledisplay.style.display="flex";
    })
    levelfivecandlebutton.addEventListener("click",()=>{
        if(gamestate.levelscleared[4]==5){
            fivebacktomain.style.display = "flex";
            fivebacktomain.addEventListener("click",()=>{
                home();
            })
            return;
        }
        
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(6);
        gamestate.levelscleared.push(5);
        gamestate.candles++;
        fivebacktomain.style.display = "flex";
        fivebacktomain.addEventListener("click", () => {
            home();
        });
    })
}

function level5index(){
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

    loadingbutton.onclick=()=>{
        homee.style.display="none";
        level5();
    }
}

export {level5,level5index}