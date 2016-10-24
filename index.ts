import {Summoner} from "./src/summoner";
import { Game } from "./src/game";
import { Champion } from "./src/champion";

var s = new Summoner();
//s.id = 19427625;
//s.getRecentGames().then(
    //(games) => {
        //games.forEach((g) => {console.log(g.fellowPlayers)});
    //})

//Summoner.getByIDs([58389924, 41329117, 35879327, 35444604, 26632593, 51107697]).then(
    //(summoners) => {
      //  console.log(summoners);
    //});
    
Game.getRecentBySummonerID(35879327).then(g => console.log(g[0].fellowPlayers));