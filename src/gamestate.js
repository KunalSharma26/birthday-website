let gamestate = {
    currentlevel: 19,
    unlockedlevels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    levelscleared: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    candles: 18
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

