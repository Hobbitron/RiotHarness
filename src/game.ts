import { Player } from "./player";
import { RawStats } from "./rawStats";
import { Summoner } from "./summoner";
import { BObject, Child } from "./obj";
import { Request } from "./request";

enum gameModes {
    CLASSIC,
    ODIN,
    ARAM,
    TUTORIAL,
    ONEFORALL,
    ASCENSION,
    FIRSTBLOOD,
    KINGPORO
}

enum gameType {
    CUSTOM_GAME,
    MATCHED_GAME,
    TUTORIAL_GAME
}

enum subType {
    NONE,
    NORMAL,
    BOT,
    RANKED_SOLO_5x5,
    RANKED_PREMADE_3x3,
    RANKED_PREMADE_5x5,
    ODIN_UNRANKED,
    RANKED_TEAM_3x3,
    RANKED_TEAM_5x5,
    NORMAL_3x3,
    BOT_3x3,
    CAP_5x5,
    ARAM_UNRANKED_5x5,
    ONEFORALL_5x5,
    FIRSTBLOOD_1x1,
    FIRSTBLOOD_2x2,
    SR_6x6,
    URF,
    URF_BOT,
    NIGHTMARE_BOT,
    ASCENSION,
    HEXAKILL,
    KING_PORO,
    COUNTER_PICK,
    BILGEWATER
}

export class Game extends BObject {
    public championId: number;
    public createDate: number;
    @Child({
        childObject: Player,
        isArray: true
    })
    public fellowPlayers: Array<Player>;
    public gameId: number;
    public gameMode: gameModes;
    public invalid: boolean;
    public ipEarned: number;
    public level: number;
    public mapId: number;
    public spell1: number;
    public spell2: number;
    public stats: RawStats;
    public subType: subType;
    public teamId: number;
    public logInfo() {
        console.log("Logged info");
    }
    public static version: string = "1.3";
    public static getRecentBySummonerID(id: any): Promise<Array<Game>> {
        return new Promise((resolve, failure) => {
            var req = new Request();
            req.makeRequest(Game.version, "game/by-summoner/"+id+"/recent").then((data: string) => {
                var games = JSON.parse(data).games;
                var gReturn = new Array<Game>();
                games.forEach((game) => {
                    var m = new Game();
                    m.setJson(game);
                    gReturn.push(m);
                })
                resolve(gReturn);
            });
        })
    }
}