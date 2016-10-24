enum playerPositions {
    TOP = 1,
    MIDDLE,
    JUNGLE,
    BOT
}

enum playerRoles {
    DUO = 1,
    SUPPORT,
    CARRY,
    SOLO
}
export class RawStats {
    assists: number;
    barracksKilled: number;
    bountyLevel: number;
    championsKilled: number;
    combatPlayerScore: number;
    consumablesPurchased: number;
    damageDealtPlayer: number;
    doubleKills: number;
    firstBlood: number;
    gold: number;
    goldEarned: number;
    goldSpent: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemsPurchased: number;
    killingSprees: number;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    lengedaryItemsCreated: number;
    level: number;
    magicDamageDealtPlayer: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    minionsDenied: number;
    minionsKilled: number;
    neutralMinionsKilled: number;
    neutralMinionsKilledEnemyJungle: number;
    neutralMinionsKilledYourJungle: number;
    nexusKilled: boolean;
    nodeCapture: number;
    nodeCaptureAssist: number;
    nodeNeutralize: number;
    nodeNeutralizeAssist: number;
    numDeaths: number;
    numItemsBought: number;
    objectivePlayerScore: number;
    pentaKills: number;
    physicalDamageDealtPlayer: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    playerPosition: playerPositions;
    playerRole: playerRoles;
    playerScore0: number;
    playerScore1: number;
    playerScore2: number;
    playerScore3: number;
    playerScore4: number;
    playerScore5: number;
    playerScore6: number;
    playerScore7: number;
    playerScore8: number;
    playerScore9: number;
    quadraKills: number;
    sightWardsBought: number;
    spell1Cast: number;
    spell2Cast: number;
    spell3Cast: number;
    spell4Cast: number;
    summonSpell1Cast: number;
    summonSpell2Cast: number;
    superMonsterKilled: number;
    team: number;
    teamObjective: number;
    timePlayed: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalPlayerScore: number;
    totalScoreRank: number;
    totalTimeCrowdControlDealt: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealtPlayer: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turretsKilled: number;
    unrealKills: number;
    victoryPointTotal: number;
    visionWardsBought: number;
    wardKilled: number;
    wardPlaced: number;
    win: boolean;
}