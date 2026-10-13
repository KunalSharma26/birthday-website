import "./level17.css";
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

let decoration = document.querySelector(".decoration");
let balloons = document.querySelector(".balloon");
let gift = document.querySelector(".gift");
let lights = document.querySelector(".fairy");
let meow = document.querySelector(".meow");
let adddecoration = document.querySelector(".addbanner");
let addballoon = document.querySelector(".addballoons");
let addlights = document.querySelector(".addlights");
let addgift = document.querySelector(".addgift");
let addmeow = document.querySelector(".addmeow");
let candle = document.querySelector(".seventeencandle");
let seventeenbacktomain = document.querySelector(".seventeenbacktomain");

function level17() {
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
  levelthirteen.style.display = "none";
  levelfourteen.style.display = "none";
  levelfifteen.style.display = "none";
  levelsixteen.style.display = "none";
  levelseventeen.style.display = "flex";
  leveleighteen.style.display = "none";
  levelnineteen.style.display = "none";
  levelfinal.style.display = "none";

  levelseventeen.style.flexDirection = "column";
  decoration.style.display = "none";
  decoration.style.backgroundColor = "black";
  balloons.style.display = "none";
  lights.style.display = "none";
  gift.style.display = "none";
  meow.style.display = "none";
  adddecoration.style.display = "flex";
  addballoon.style.display = "none";
  addgift.style.display = "none";
  addlights.style.display = "none";
  addmeow.style.display = "none";
  candle.style.display = "none";
  seventeenbacktomain.style.display = "none";
}

adddecoration.addEventListener("click", () => {
  adddecoration.style.display = "none";
  decoration.style.display = "flex";
  addlights.style.display = "flex";
});

addlights.addEventListener("click", () => {
  addlights.style.display = "none";
  lights.style.display = "flex";
  decoration.style.backgroundColor = "#F7F1E8";
  addballoon.style.display = "flex";
});

addballoon.addEventListener("click", () => {
  addballoon.style.display = "none";
  balloons.style.display = "flex";
  addgift.style.display = "flex";
});

addgift.addEventListener("click", () => {
  addgift.style.display = "none";
  gift.style.display = "flex";
  addmeow.style.display = "flex";
});

addmeow.addEventListener("click", async () => {
  addmeow.style.display = "none";
  meow.style.display = "flex";

  meow.currentTime = 0;

  try {
    await meow.play();
  } catch (error) {
    console.error("Meow playback failed:", error);
  }

  candle.style.display = "flex";
});
candle.addEventListener("click", () => {
  if (gamestate.levelscleared[16] == 17) {
    seventeenbacktomain.style.display = "flex";
    return;
  }

  gamestate.currentlevel++;
  gamestate.unlockedlevels.push(18);
  gamestate.levelscleared.push(17);
  gamestate.candles++;
  savegamestate();

  seventeenbacktomain.style.display = "flex";
});
seventeenbacktomain.addEventListener("click", () => {
  levelseventeen.style.display = "none";
  home();
});


function level17index() {
  console.log("level15index called");
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
  levelthirteen.style.display = "none";
  levelfourteen.style.display = "none";
  levelfifteen.style.display = "none";
  levelsixteen.style.display = "none";
  levelseventeen.style.display = "none";
  leveleighteen.style.display = "none";
  levelnineteen.style.display = "none";
  levelfinal.style.display = "none";
  loadingscreen.style.display = "flex";
  loadingbutton.style.display = "none";

  const loadingImages = [
    loading0,
    loading10,
    loading20,
    loading30,
    loading40,
    loading50,
    loading60,
    loading70,
    loading80,
    loading90,
    loading100,
  ];

  function preloadImages(images) {
    return Promise.all(
      images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          img.onload = resolve;
          img.onerror = reject;

          img.src = src;
        });
      }),
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
    }, 6000);
  });

  loadingbutton.onclick = () => {
    homee.style.display = "none";
    level17();
  };
}

export { level17index, level17 };
