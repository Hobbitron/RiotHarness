import * as http from "https";
import { Game } from "./game";

export class Request {
    private apiKey = "RGAPI-5f637b60-9095-4280-86b2-d93b0fce1088"
    public makeRequest(version: string, url: string) {
      console.log(url);
      return new Promise((resolve, reject) => {
        var options = {
          "method": "GET",
          "hostname": "na.api.pvp.net",
          "port": null,
          "path": "/api/lol/na/v"+version+"/"+url+"?api_key="+this.apiKey,
        };
        var req = http.request(options, (res) => {
          var chunks = [];
        
          res.on("data", function (chunk) {
            chunks.push(chunk);
          });
        
          res.on("end", function () {
            var body = Buffer.concat(chunks);
            resolve(body.toString())
          });
        });
        req.end();
      });
  }
}




