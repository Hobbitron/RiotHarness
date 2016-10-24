"use strict";
const summoner_1 = require("./src/summoner");
const game_1 = require("./src/game");
var s = new summoner_1.Summoner();
//s.id = 19427625;
//s.getRecentGames().then(
//(games) => {
//games.forEach((g) => {console.log(g.fellowPlayers)});
//})
//Summoner.getByIDs([58389924, 41329117, 35879327, 35444604, 26632593, 51107697]).then(
//(summoners) => {
//  console.log(summoners);
//});
game_1.Game.getRecentBySummonerID(35879327).then(g => console.log(g[0].fellowPlayers));
