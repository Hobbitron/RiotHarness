import { Image } from "./image";
import { Info } from "./info";
import { Passive } from "./passive";
import { Recommended } from "./recommended";
import { Skin } from "./skin";
import { ChampionSpell } from "./championSpell";
import { Stats } from "./stats";
import { BObject } from "./obj";

export class Champion extends BObject {
    allytips: Array<string>;
    blurb:	string	
    enemytips:	Array<string>
    id:	number;
    image:	Image;	
    info:	Info;
    key:	string;
    lore:	string;	
    name:	string;	
    partype:	string;
    passive:	Passive;
    recommended:	Array<Recommended>;
    skins:	Array<Skin>;
    spells:	Array<ChampionSpell>;
    stats:	Stats;
    tags:	Array<string>;
    title: string;
}