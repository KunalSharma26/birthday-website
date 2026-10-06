let gamestate = {
    currentlevel: 1,
    unlockedlevels: [1],
    levelscleared: [],
    candles: 0
};
const savedgamestate = localStorage.getItem("gamestate");

if (savedgamestate) {
    Object.assign(gamestate, JSON.parse(savedgamestate));
}
function savegamestate() {
    localStorage.setItem("gamestate", JSON.stringify(gamestate));
}
export { gamestate,savegamestate };

