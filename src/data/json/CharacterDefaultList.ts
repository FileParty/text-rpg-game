import { Character } from "../dto/CharacterDTO";


// 전사 Character
const warrior = new Character();
warrior.setStringCharacterArg("name","전사");
warrior.setStringCharacterArg("explation","쉬운 난이도의 캐릭터입니다. 전사는 전투시 피해를 입히거나 받으면 자원을 얻습니다.");
warrior.setStringCharacterArg("images","img/character/warrior_image.jpg");
warrior.setStringCharacterArg("resourceName","분노");
warrior.setNumberCharacterArg("maximumHitPoint", 300);
warrior.setNumberCharacterArg("currentHitPoint", 300);
warrior.setNumberCharacterArg("levelUpHitPoint", 75);
warrior.setNumberCharacterArg("maximumResource", 50);
warrior.setNumberCharacterArg("currentResource", 5);
warrior.setNumberCharacterArg("levelUpResource", 5);
warrior.setNumberCharacterArg("strength", 20);
warrior.setNumberCharacterArg("additionalStrength", 3);
warrior.setNumberCharacterArg("mental", 5);
warrior.setNumberCharacterArg("additionalMental", 1);
warrior.setNumberCharacterArg("agility", 10);
warrior.setNumberCharacterArg("additionalAgility", 2);
warrior.setNumberCharacterArg("gold", 200);

//const warrior_spec_map = new Map<string, Specificity>;
//const warrior_spec_01 = new Specificity();


// 마법사 Character
const wizard = new Character();
wizard.setStringCharacterArg("name","마법사");
wizard.setStringCharacterArg("explation","난이도는 평범합니다. 기술 사용시 캐스팅이 필요하지만 강력하거나 다양한 효과를 지녔습니다.");
wizard.setStringCharacterArg("images","img/character/wizard_image.jpg");
wizard.setStringCharacterArg("resourceName","마력");
wizard.setNumberCharacterArg("maximumHitPoint", 100);
wizard.setNumberCharacterArg("currentHitPoint", 100);
wizard.setNumberCharacterArg("levelUpHitPoint", 20);
wizard.setNumberCharacterArg("maximumResource", 100);
wizard.setNumberCharacterArg("currentResource", 100);
wizard.setNumberCharacterArg("levelUpResource", 25);
wizard.setNumberCharacterArg("strength", 5);
wizard.setNumberCharacterArg("additionalStrength", 1);
wizard.setNumberCharacterArg("mental", 20);
wizard.setNumberCharacterArg("additionalMental", 3);
wizard.setNumberCharacterArg("agility", 10);
wizard.setNumberCharacterArg("additionalAgility", 2);
wizard.setNumberCharacterArg("gold", 200);

// 사냥꾼 Character
const hunter = new Character();
hunter.setStringCharacterArg("name","사냥꾼");
hunter.setStringCharacterArg("explation","어려운 캐릭터입니다. 대부분의 기술이 적의 행동을 예측하면 추가적인 효과를 받습니다.");
hunter.setStringCharacterArg("images","img/character/hunter_image.jpg");
hunter.setStringCharacterArg("resourceName","보급품");
hunter.setNumberCharacterArg("maximumHitPoint", 150);
hunter.setNumberCharacterArg("currentHitPoint", 150);
hunter.setNumberCharacterArg("levelUpHitPoint", 50);
hunter.setNumberCharacterArg("maximumResource", 2);
hunter.setNumberCharacterArg("currentResource", 2);
hunter.setNumberCharacterArg("levelUpResource", 1);
hunter.setNumberCharacterArg("strength", 10);
hunter.setNumberCharacterArg("additionalStrength", 2);
hunter.setNumberCharacterArg("mental", 10);
hunter.setNumberCharacterArg("additionalMental", 1);
hunter.setNumberCharacterArg("agility", 20);
hunter.setNumberCharacterArg("additionalAgility", 2);
hunter.setNumberCharacterArg("gold", 200);

const defaultCharachterList:Array<Character> = new Array<Character>();
defaultCharachterList.push(warrior);
defaultCharachterList.push(wizard);
defaultCharachterList.push(hunter);


export { defaultCharachterList, warrior, wizard, hunter };