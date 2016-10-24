"use strict";
var playerPositions;
(function (playerPositions) {
    playerPositions[playerPositions["TOP"] = 1] = "TOP";
    playerPositions[playerPositions["MIDDLE"] = 2] = "MIDDLE";
    playerPositions[playerPositions["JUNGLE"] = 3] = "JUNGLE";
    playerPositions[playerPositions["BOT"] = 4] = "BOT";
})(playerPositions || (playerPositions = {}));
var playerRoles;
(function (playerRoles) {
    playerRoles[playerRoles["DUO"] = 1] = "DUO";
    playerRoles[playerRoles["SUPPORT"] = 2] = "SUPPORT";
    playerRoles[playerRoles["CARRY"] = 3] = "CARRY";
    playerRoles[playerRoles["SOLO"] = 4] = "SOLO";
})(playerRoles || (playerRoles = {}));
class RawStats {
}
exports.RawStats = RawStats;
