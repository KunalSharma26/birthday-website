import "./level16.css";

import loading0 from "../assets/images/loading/0_.png";
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

import { home } from "./home";
import { gamestate, savegamestate } from "./gamestate";

const loadingImage = document.querySelector(".loading-image");
const loadingbutton = document.querySelector(".loading-button");
const loadingscreen = document.querySelector(".loading-screen");
const homee = document.querySelector(".home");

const levelone = document.querySelector(".level1");
const leveltwo = document.querySelector(".level2");
const levelthree = document.querySelector(".level3");
const levelfour = document.querySelector(".level4");
const levelfive = document.querySelector(".level5");
const levelsix = document.querySelector(".level6");
const levelseven = document.querySelector(".level7");
const leveleight = document.querySelector(".level8");
const levelnine = document.querySelector(".level9");
const levelten = document.querySelector(".level10");
const leveleleven = document.querySelector(".level11");
const leveltwelve = document.querySelector(".level12");
const levelthirteen = document.querySelector(".level13");
const levelfourteen = document.querySelector(".level14");
const levelfifteen = document.querySelector(".level15");
const levelsixteen = document.querySelector(".level16");
const levelseventeen = document.querySelector(".level17");
const leveleighteen = document.querySelector(".level18");
const levelnineteen = document.querySelector(".level19");
const levelfinal = document.querySelector(".levelfinal");

const tvoff = document.querySelector(".tvoff");
const tvon = document.querySelector(".tvon");
const candle = document.querySelector(".sixteencandle");
const sixteenbacktomain = document.querySelector(".sixteenbacktomain");

let count = 0;

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

// Hide all levels except the selected one
function hideAllLevels() {
  const levels = [
    levelone,
    leveltwo,
    levelthree,
    levelfour,
    levelfive,
    levelsix,
    levelseven,
    leveleight,
    levelnine,
    levelten,
    leveleleven,
    leveltwelve,
    levelthirteen,
    levelfourteen,
    levelfifteen,
    levelsixteen,
    levelseventeen,
    leveleighteen,
    levelnineteen,
    levelfinal,
  ];

  levels.forEach((level) => {
    if (level) {
      level.style.display = "none";
    }
  });
}

// Reset Level 16 whenever it opens
function level16() {
  count = 0;

  loadingscreen.style.display = "none";
  hideAllLevels();

  levelsixteen.style.display = "flex";
  levelsixteen.style.flexDirection = "column";

  // Reset the TV-off video
  tvoff.pause();
  tvoff.currentTime = 0;
  tvoff.style.display = "flex";

  // Reset the TV-on video
  tvon.pause();
  tvon.currentTime = 0;
  tvon.style.display = "none";

  // Reset the candle and button
  candle.style.display = "none";
  sixteenbacktomain.style.display = "none";
  tvoff.currentTime = 0;

  tvoff.play().catch((error) => {
    console.error("TV-off playback failed:", error);
  });
}

// Clicking the TV-off video
tvoff.addEventListener("click", () => {
  if (count === 6) {
    // Stop the TV-off animation
    tvoff.pause();
    tvoff.style.display = "none";

    // Start the TV-on animation
    tvon.style.display = "flex";
    tvon.currentTime = 0;

    tvon.play().catch((error) => {
      console.error("TV-on video playback failed:", error);
    });

    // Reveal the candle when the video finishes
    tvon.onended = () => {
      candle.style.display = "flex";
    };
  } else {
    // Replay the TV-off animation
    tvoff.classList.remove("tvoff");
    void tvoff.offsetWidth;
    tvoff.classList.add("tvoff");
  }

  count++;
});

// Clicking the candle
candle.addEventListener("click", () => {
  // Prevent duplicate rewards if Level 16 is already cleared
  if (gamestate.levelscleared[15] === 16) {
    sixteenbacktomain.style.display = "flex";
    return;
  }

  gamestate.currentlevel++;
  gamestate.unlockedlevels.push(17);
  gamestate.levelscleared.push(16);
  gamestate.candles++;

  savegamestate();

  sixteenbacktomain.style.display = "flex";
});

// Return to the main page
sixteenbacktomain.addEventListener("click", () => {
  levelsixteen.style.display = "none";
  home();
});

// Loading screen for Level 16
function level16index() {
  console.log("level16index called");

  hideAllLevels();

  loadingscreen.style.display = "flex";
  loadingbutton.style.display = "none";

  let index = 0;

  // Display the first loading image immediately
  loadingImage.src = loadingImages[index];

  const preloadImages = (images) => {
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
  };

  preloadImages(loadingImages)
    .then(() => {
      index = 0;

      const interval = setInterval(() => {
        index++;

        if (index >= loadingImages.length) {
          clearInterval(interval);
          return;
        }

        loadingImage.src = loadingImages[index];
      }, 500);

      setTimeout(() => {
        loadingImage.style.height = "600px";
        loadingbutton.style.display = "block";
      }, 6000);
    })
    .catch((error) => {
      console.error("Failed to preload loading images:", error);

      // Allow the user to continue even if an image fails to preload
      loadingbutton.style.display = "block";
    });

  loadingbutton.onclick = () => {
    homee.style.display = "none";
    level16();
  };
}

export { level16index, level16 };
