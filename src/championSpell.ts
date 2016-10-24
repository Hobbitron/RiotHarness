import { Image } from "./image";
import { LevelTip } from "./levelTip";
import { SpellVars } from "./spellVars";

export class ChampionSpell {
    altimages:	Array<Image>
    cooldown:	Array<number>	
    cooldownBurn:	string	
    cost:	Array<number>	
    costBurn:	string	
    costType:	string	
    description:	string	
    effect:	Array<Array<number>>;
    effectBurn:	Array<string>;
    image:	Image;
    key:string;
    leveltip:	LevelTip;
    maxrank:	number;
    name:	string;
    range: Array<string> | string;
    rangeBurn:	string	
    resource:	string	
    sanitizedDescription:	string	
    sanitizedTooltip:	string	
    tooltip:	string	
    vars: Array<SpellVars>;
}