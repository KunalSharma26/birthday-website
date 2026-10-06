import "./level4.css";
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
let levelfourcandledisplay = document.querySelector(".level-four-candle");
let levelfourcandlebutton = document.querySelector(".levelfourcandlebutton");
let fourbacktomain = document.querySelector(".fourbacktomain");
let correctfourone = document.querySelector(".correct-four-one");
let correctfourtwo = document.querySelector(".correct-four-two");
let correctfourthree = document.querySelector(".correct-four-three");
let correctfourfour = document.querySelector(".correct-four-four");
let questionone = document.querySelector(".level-four-question-one");
let questiontwo = document.querySelector(".level-four-question-two");
let questionthree = document.querySelector(".level-four-question-three");
let questionfour = document.querySelector(".level-four-question-four");
let yay = document.querySelector(".yay");
function level4(){
    loadingscreen.style.display = "none";
    levelone.style.display="none";
    leveltwo.style.display="none";
    levelthree.style.display="none";
    levelfive.style.display="none";
    levelsix.style.display="none";
    levelseven.style.display="none";
    levelfour.style.display="flex";
    levelfour.style.flexDirection="column";
    levelfourcandledisplay.style.display="none";
    fourbacktomain.style.display="none";
    questiontwo.style.display="none";
    questionthree.style.display="none";
    questionfour.style.display="none";
    questionone.style.display="flex";
    yay.style.display="none";
    correctfourone.addEventListener("click",()=>{
        questionone.style.display="none";
        questiontwo.style.display="flex";
    })
    correctfourtwo.addEventListener("click",()=>{
        questiontwo.style.display="none";
        questionthree.style.display="flex";
    })
    correctfourthree.addEventListener("click",()=>{
        questionthree.style.display="none";
        questionfour.style.display="flex";
    })
    correctfourfour.addEventListener("click",()=>{
        questionfour.style.display="none";
        yay.style.display="flex";
        levelfourcandledisplay.style.display="flex";
    })
    levelfourcandlebutton.addEventListener("click",()=>{
        if(gamestate.levelscleared[3]==4){
            fourbacktomain.style.display = "flex";
            fourbacktomain.addEventListener("click",()=>{
                home();
            })
            return;
        }
        
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(5);
        gamestate.levelscleared.push(4);
        gamestate.candles++;
        savegamestate();
        fourbacktomain.style.display = "flex";
        fourbacktomain.addEventListener("click", () => {
            home();
        });
    })

}


function level4index(){
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
        level4();
    }
}

export {level4, level4index}