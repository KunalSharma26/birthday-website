let gamestate = {
    currentlevel: 1,
    unlockedlevels: [1],
    levelscleared: [],
    candles: 0
};
let cake = {
    currentcake: "chocolate"
}
const savedcake = localStorage.getItem("cake");
const savedgamestate = localStorage.getItem("gamestate");

if (savedgamestate) {
    Object.assign(gamestate, JSON.parse(savedgamestate));
}
function savegamestate() {
    localStorage.setItem("gamestate", JSON.stringify(gamestate));
}
if(savedcake){
    Object.assign(cake, JSON.parse(savedcake));
}
function savecakestate(){
    localStorage.setItem("cake",JSON.stringify(cake));
}
export { gamestate,savegamestate,cake,savecakestate };

