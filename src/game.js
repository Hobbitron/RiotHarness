"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const player_1 = require("./player");
const obj_1 = require("./obj");
const request_1 = require("./request");
var gameModes;
(function (gameModes) {
    gameModes[gameModes["CLASSIC"] = 0] = "CLASSIC";
    gameModes[gameModes["ODIN"] = 1] = "ODIN";
    gameModes[gameModes["ARAM"] = 2] = "ARAM";
    gameModes[gameModes["TUTORIAL"] = 3] = "TUTORIAL";
    gameModes[gameModes["ONEFORALL"] = 4] = "ONEFORALL";
    gameModes[gameModes["ASCENSION"] = 5] = "ASCENSION";
    gameModes[gameModes["FIRSTBLOOD"] = 6] = "FIRSTBLOOD";
    gameModes[gameModes["KINGPORO"] = 7] = "KINGPORO";
})(gameModes || (gameModes = {}));
var gameType;
(function (gameType) {
    gameType[gameType["CUSTOM_GAME"] = 0] = "CUSTOM_GAME";
    gameType[gameType["MATCHED_GAME"] = 1] = "MATCHED_GAME";
    gameType[gameType["TUTORIAL_GAME"] = 2] = "TUTORIAL_GAME";
})(gameType || (gameType = {}));
var subType;
(function (subType) {
    subType[subType["NONE"] = 0] = "NONE";
    subType[subType["NORMAL"] = 1] = "NORMAL";
    subType[subType["BOT"] = 2] = "BOT";
    subType[subType["RANKED_SOLO_5x5"] = 3] = "RANKED_SOLO_5x5";
    subType[subType["RANKED_PREMADE_3x3"] = 4] = "RANKED_PREMADE_3x3";
    subType[subType["RANKED_PREMADE_5x5"] = 5] = "RANKED_PREMADE_5x5";
    subType[subType["ODIN_UNRANKED"] = 6] = "ODIN_UNRANKED";
    subType[subType["RANKED_TEAM_3x3"] = 7] = "RANKED_TEAM_3x3";
    subType[subType["RANKED_TEAM_5x5"] = 8] = "RANKED_TEAM_5x5";
    subType[subType["NORMAL_3x3"] = 9] = "NORMAL_3x3";
    subType[subType["BOT_3x3"] = 10] = "BOT_3x3";
    subType[subType["CAP_5x5"] = 11] = "CAP_5x5";
    subType[subType["ARAM_UNRANKED_5x5"] = 12] = "ARAM_UNRANKED_5x5";
    subType[subType["ONEFORALL_5x5"] = 13] = "ONEFORALL_5x5";
    subType[subType["FIRSTBLOOD_1x1"] = 14] = "FIRSTBLOOD_1x1";
    subType[subType["FIRSTBLOOD_2x2"] = 15] = "FIRSTBLOOD_2x2";
    subType[subType["SR_6x6"] = 16] = "SR_6x6";
    subType[subType["URF"] = 17] = "URF";
    subType[subType["URF_BOT"] = 18] = "URF_BOT";
    subType[subType["NIGHTMARE_BOT"] = 19] = "NIGHTMARE_BOT";
    subType[subType["ASCENSION"] = 20] = "ASCENSION";
    subType[subType["HEXAKILL"] = 21] = "HEXAKILL";
    subType[subType["KING_PORO"] = 22] = "KING_PORO";
    subType[subType["COUNTER_PICK"] = 23] = "COUNTER_PICK";
    subType[subType["BILGEWATER"] = 24] = "BILGEWATER";
})(subType || (subType = {}));
class Game extends obj_1.BObject {
    logInfo() {
        console.log("Logged info");
    }
    static getRecentBySummonerID(id) {
        return new Promise((resolve, failure) => {
            var req = new request_1.Request();
            req.makeRequest(Game.version, "game/by-summoner/" + id + "/recent").then((data) => {
                var games = JSON.parse(data).games;
                var gReturn = new Array();
                games.forEach((game) => {
                    var m = new Game();
                    m.setJson(game);
                    gReturn.push(m);
                });
                resolve(gReturn);
            });
        });
    }
}
Game.version = "1.3";
__decorate([
    obj_1.Child({
        childObject: player_1.Player,
        isArray: true
    })
], Game.prototype, "fellowPlayers", void 0);
exports.Game = Game;
