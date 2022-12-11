import { Character } from "../dto/CharacterDTO";

// 오크
const ork = new Character();
ork.setStringCharacterArg("name","오크");
ork.setStringCharacterArg("explation","오크는 기초적인 몬스터입니다.");
ork.setStringCharacterArg("images","/img/monster/monster_ork.png");
ork.setStringCharacterArg("resourceName","");
ork.setNumberCharacterArg("level", 2);
ork.setNumberCharacterArg("maximumHitPoint", 150);
ork.setNumberCharacterArg("currentHitPoint", 150);
ork.setNumberCharacterArg("maximumResource", 0);
ork.setNumberCharacterArg("strength", 15);
ork.setNumberCharacterArg("mental", 10);
ork.setNumberCharacterArg("agility", 10);
ork.setNumberCharacterArg("killGold", 50);
ork.setNumberCharacterArg("killExperience", 50);



const monsterMap:Map<string, Character> = new Map();
monsterMap.set("ork", ork);

export { monsterMap } 