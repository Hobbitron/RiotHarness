"use strict";
const request_1 = require("./request");
class Summoner {
    getRecentGames() {
        return new Promise((resolve, failure) => {
            var req = new request_1.Request();
            req.makeRequest("1.3", "game/by-summoner/" + this.id + "/recent").then((data) => {
                resolve(JSON.parse(data).games);
            });
        });
    }
    static getByIDs(ids) {
        return new Promise((resolve, failure) => {
            var req = new request_1.Request();
            req.makeRequest(Summoner.version, "summoner/" + ids.map(i => i.toString()).join(",")).then((data) => {
                resolve(data);
            });
        });
    }
}
Summoner.version = "1.4";
exports.Summoner = Summoner;
