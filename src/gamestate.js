let gamestate = {
    currentlevel: 7,
    unlockedlevels: [1,2,3,4,5,6,7],
    levelscleared: [1,2,3,4,5,6],
    candles: 6
};
const savedgamestate = localStorage.getItem("gamestate");

if (savedgamestate) {
    Object.assign(gamestate, JSON.parse(savedgamestate));
}
function savegamestate() {
    localStorage.setItem("gamestate", JSON.stringify(gamestate));
}
export { gamestate,savegamestate };

