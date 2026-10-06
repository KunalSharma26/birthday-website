import "./styles.css";
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
import { level3 } from "./level3.js";
import { level2index,level2 } from "./level2.js";
import { level4,level4index } from "./level4.js";
import { level5,level5index } from "./level5.js";
import { level6index,level6} from "./level6.js";
const loadingImage = document.querySelector(".loading-image");
const loadingbutton = document.querySelector(".loading-button");
let website = document.querySelector(".website");
let loadingscreen = document.querySelector(".loading-screen");
let homee = document.querySelector(".home");
import { level1, level1index } from "./level1.js";
import {home} from "./home.js";
import { level3index } from "./level3.js";
loadingscreen.style.display="none";
let levelone = document.querySelector(".level1");
let leveltwo = document.querySelector(".level2");
let levelthree = document.querySelector(".level3");
let levelfour = document.querySelector(".level4");
let levelfive = document.querySelector(".level5");
let levelsix = document.querySelector(".level6");
let levelseven = document.querySelector(".level7");

function index(){
    loadingscreen.style.display="flex";
    levelone.style.display="none";
    leveltwo.style.display="none";
    levelthree.style.display="none";
    levelfour.style.display="none";
    levelfive.style.display="none";
    levelsix.style.display="none";
    levelseven.style.display="none";
    website.style.display="none";
    homee.style.display="none";
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

        }, 1000);
        const inter = setTimeout(()=>{
            loadingImage.style.height="600px";
            loadingbutton.style.display="block";
        },12000)

    });

    loadingbutton.onclick=()=>{
        home();
    }

}

// index();
home();
// level1();
// level1index();
// level2index();
// level2();
// level3index();
// level3();       
// level4();
// level4index();
// level5index();
// level5();
// level6index();
// level6();