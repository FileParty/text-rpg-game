import { Character, Specificity } from "../dto/CharacterDTO";


// 전사 Character
const warrior = new Character();
warrior.setStringCharacterArg("name","전사");
warrior.setStringCharacterArg("explation","체력과 힘이 높고 피해를 입을때마다 분노를 얻습니다.");
warrior.setStringCharacterArg("images","img/character/warrior_image.jpg");
warrior.setStringCharacterArg("resourceName","분노");
warrior.setNumberCharacterArg("maximumHitPoint", 300);
warrior.setNumberCharacterArg("levelUpHitPoint", 75);
warrior.setNumberCharacterArg("maximumResource", 50);
warrior.setNumberCharacterArg("levelUpResource", 5);
warrior.setNumberCharacterArg("strength", 20);
warrior.setNumberCharacterArg("additionalStrength", 3);
warrior.setNumberCharacterArg("mental", 5);
warrior.setNumberCharacterArg("additionalMental", 1);
warrior.setNumberCharacterArg("agility", 10);
warrior.setNumberCharacterArg("additionalAgility", 2);

const warrior_spec_map = new Map<string, Specificity>;
//const warrior_spec_01 = new Specificity();


// 마법사 Character
const wizard = new Character();
wizard.setStringCharacterArg("name","마법사");
wizard.setStringCharacterArg("explation","기술의 위력이 강력하고 마법피해를 경감하여 받습니다.");
wizard.setStringCharacterArg("images","img/character/wizard_image.jpg");
wizard.setStringCharacterArg("resourceName","마력");
wizard.setNumberCharacterArg("maximumHitPoint", 100);
wizard.setNumberCharacterArg("levelUpHitPoint", 20);
wizard.setNumberCharacterArg("maximumResource", 100);
wizard.setNumberCharacterArg("levelUpResource", 25);
wizard.setNumberCharacterArg("strength", 5);
wizard.setNumberCharacterArg("additionalStrength", 1);
wizard.setNumberCharacterArg("mental", 20);
wizard.setNumberCharacterArg("additionalMental", 3);
wizard.setNumberCharacterArg("agility", 10);
wizard.setNumberCharacterArg("additionalAgility", 2);

// 사냥꾼 Character
const hunter = new Character();
hunter.setStringCharacterArg("name","사냥꾼");
hunter.setStringCharacterArg("explation","적보다 빠르게 행동하며 전투시 다재다능한 능력을 보유하고 있습니다.");
hunter.setStringCharacterArg("images","img/character/hunter_image.jpg");
hunter.setStringCharacterArg("resourceName","보급품");
hunter.setNumberCharacterArg("maximumHitPoint", 150);
hunter.setNumberCharacterArg("levelUpHitPoint", 50);
hunter.setNumberCharacterArg("maximumResource", 2);
hunter.setNumberCharacterArg("levelUpResource", 1);
hunter.setNumberCharacterArg("strength", 10);
hunter.setNumberCharacterArg("additionalStrength", 2);
hunter.setNumberCharacterArg("mental", 10);
hunter.setNumberCharacterArg("additionalMental", 1);
hunter.setNumberCharacterArg("agility", 20);
hunter.setNumberCharacterArg("additionalAgility", 2);

const defaultCharachterList = new Array<Character>;
defaultCharachterList.push(warrior);
defaultCharachterList.push(wizard);
defaultCharachterList.push(hunter);


export { defaultCharachterList, warrior, wizard, hunter };