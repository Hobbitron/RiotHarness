import { Game } from "./game";
import { Request } from "./request";

export class Summoner {
    public id: number;
    public name: string;
    public profileIconId: number;
    public revisionDate: Date;
    public summonerLevel: number;
    public static version: string = "1.4";
    public getRecentGames(): Promise<Array<Game>> {
        return new Promise((resolve, failure) => {
            var req = new Request();
            req.makeRequest("1.3", "game/by-summoner/"+this.id+"/recent").then((data: string) => {
                resolve(JSON.parse(data).games);    
            });
        })
    }
    public static getByIDs(ids: Array<any>): Promise<Array<Summoner>> {
        return new Promise((resolve, failure) => {
            var req = new Request();
            req.makeRequest(Summoner.version, "summoner/"+ids.map(i => i.toString()).join(",")).then((data: string) => {
                resolve(data);    
            });
        })
    }
}