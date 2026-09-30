let website = document.querySelector(".website");
let loadingscreen = document.querySelector(".loading-screen");
let homee = document.querySelector(".home");
let currentlevel = 1;
import "./home.css";

function home(){
    loadingscreen.style.display="none";
    homee.style.display="flex";
    homee.style.flexDirection="column";

}

export { home };