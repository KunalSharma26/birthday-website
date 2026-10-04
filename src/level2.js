import "./leveltwo.css";
import loading0 from "../assets/images/loading/0_.png"
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
let punjab = document.querySelector(".punjab");
let himachal = document.querySelector(".himachal");
let bihar = document.querySelector(".bihar");
let westbengal = document.querySelector(".west-bengal");
let maharashtra = document.querySelector(".maharashtra");
let pondicherry = document.querySelector(".pondicherry");
let punjabtext = document.querySelector(".punjab-text");
let bihartext = document.querySelector(".bihar-text");
let westbengaltext = document.querySelector(".west-bengal-text");
let maharashtratext = document.querySelector(".maharashtra-text");
let pondicherrytext = document.querySelector(".pondicherry-text");
let himachaltext = document.querySelector(".himachal-text");
let leveltwomain = document.querySelector(".level-two-main-buttons");
let leveltwomainbutton = document.querySelector(".level-two-main-button");
let leveltwocandlebutton = document.querySelector(".leveltwocandlebutton");
let levelthree = document.querySelector(".level3");
function level2(){
    levelthree.style.display="none";
    levelone.style.display="none";
    leveltwomainbutton.style.display="none";
    leveltwomain.style.display="none";
    loadingscreen.style.display="none";
    leveltwo.style.display="flex";
    leveltwo.style.flexDirection="column";
    punjab.style.display="flex";
    himachal.style.display="flex";
    bihar.style.display="flex";
    westbengal.style.display="flex";
    maharashtra.style.display="flex";
    pondicherry.style.display="flex";
    punjab.addEventListener("click",()=>{
        punjabtext.style.display = "flex";
        let interval = setTimeout(()=>{
            punjabtext.style.display = "none";
        },4000);
    })
    bihar.addEventListener("click",()=>{
        bihartext.style.display="flex";
        let interval = setTimeout(() => {
            bihartext.style.display="none";
        }, 4000);
    })
    westbengal.addEventListener("click",()=>{
        westbengaltext.style.display="flex";
        let interval = setTimeout(()=>{
            westbengaltext.style.display="none";
        },4000);
    })
    maharashtra.addEventListener("click",()=>{
        maharashtratext.style.display="flex";
        let interval = setTimeout(() => {
            maharashtratext.style.display="none";
        }, 4000);
    })
    pondicherry.addEventListener("click",()=>{
        pondicherrytext.style.display="flex";
        let interval = setTimeout(() => {
            pondicherrytext.style.display="none";
        }, 4000);
    })
    himachal.addEventListener("click",()=>{
        himachaltext.style.display="flex";
        punjab.style.display="none";
        himachal.style.display="none";
        bihar.style.display="none";
        westbengal.style.display="none";
        maharashtra.style.display="none";
        pondicherry.style.display="none";
        
        leveltwomain.style.display="flex";
        let interval = setTimeout(() => {
            himachaltext.style.display="none";
        }, 4000);
    })
    leveltwocandlebutton.addEventListener("click",()=>{
        if(gamestate.levelscleared[1]==2){
            leveltwomainbutton.style.display = "flex";
            leveltwomainbutton.addEventListener("click",()=>{
                home();
            })
            return;
        }
        
        gamestate.currentlevel++;
        gamestate.unlockedlevels.push(3);
        gamestate.levelscleared.push(2);
        gamestate.candles++;
        leveltwomainbutton.style.display = "flex";
        leveltwomainbutton.addEventListener("click", () => {
            home();
        });
    })
}
function level2index(){
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
        level2();
    })
}

export {level2index, level2}