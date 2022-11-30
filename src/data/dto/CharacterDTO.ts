import Swal from 'sweetalert2';
import { Specificity, ApplicationType } from './SpecificityDTO';

/**
 * 추후에 리펙토링시 참고할 것..
 * https://siosio3103.medium.com/typescript-디자인패턴-0-builder-빌더-패턴-90552ae0b763
 */

class Character 
{
    private id: string = "";
    private name: string = ""; 
    private explation: string = ""; 
    private images: string = ""; 
    private resourceName: string = "";
    private characterType: characterType = characterType.default;
    private maximumHitPoint: number = 0; 
    private currentHitPoint: number = 0; 
    private levelUpHitPoint: number = 0;
    private maximumResource: number = 0; 
    private currentResource: number = 0; 
    private levelUpResource: number = 0;
    private strength: number = 0; 
    private mental: number = 0; 
    private agility: number = 0; 
    private additionalStrength: number = 0; 
    private additionalMental: number = 0; 
    private additionalAgility: number = 0;
    private level: number = 1; 
    private experience: number = 0;
    private killExperience: number = 0;
    private gold: number = 0;
    private killGold: number = 0;
    private default_specificity: Map<string, Specificity> = new Map;
    private add_specificity: Map<string, Specificity> = new Map;

    constructor() {}

    setStringCharacterArg(characterStringType: string, arg: string) {
        switch( characterStringType ) {
            case "id" : this.id = arg; break;
            case "name" : this.name = arg; break;
            case "explation" : this.explation = arg; break;
            case "images" : this.images = arg; break;
            case "resourceName" : this.resourceName = arg; break;
            default : return false;
        }
        return true;
    }

    getStringCharacterArg(characterStringType: string):string {
        switch( characterStringType ) {
            case "id" : return this.id;
            case "name" : return this.name;
            case "explation" : return this.explation;
            case "images" : return this.images;
            case "resourceName" : return this.resourceName;
            default : return "";
        }
    }

    setNumberCharacterArg(characterNumberType: string, arg: number) {
        switch( characterNumberType ) {
            case "maximumHitPoint" : this.maximumHitPoint = arg; break;
            case "currentHitPoint" : this.currentHitPoint = arg; break;
            case "levelUpHitPoint" : this.levelUpHitPoint = arg; break;
            case "maximumResource" : this.maximumResource = arg; break;
            case "currentResource" : this.currentResource = arg; break;
            case "levelUpResource" : this.levelUpResource = arg; break;
            case "strength" : this.strength = arg; break;
            case "mental" : this.mental = arg; break;
            case "agility" : this.agility = arg; break;
            case "additionalStrength" : this.additionalStrength = arg; break;
            case "additionalMental" : this.additionalMental = arg; break;
            case "additionalAgility" : this.additionalAgility = arg; break;
            case "level" : this.level = arg; break;
            case "experience" : this.experience = arg; break;
            case "killExperience" : this.killExperience = arg; break;
            case "characterType" : this.characterType = arg; break;
            case "gold" : this.gold = arg; break;
            case "killGold" : this.killGold = arg; break;
            default : return false;
        }
        return true;
    }

    getNumberCharacterArg(characterNumberType: string):number {
        switch( characterNumberType ) {
            case "maximumHitPoint" : return this.maximumHitPoint;
            case "currentHitPoint" : return this.currentHitPoint;
            case "levelUpHitPoint" : return this.levelUpHitPoint;
            case "maximumResource" : return this.maximumResource;
            case "currentResource" : return this.currentResource;
            case "levelUpResource" : return this.levelUpResource;
            case "strength" : return this.strength;
            case "mental" : return this.mental;
            case "agility" : return this.agility;
            case "additionalStrength" : return this.additionalStrength;
            case "additionalMental" : return this.additionalMental;
            case "additionalAgility" : return this.additionalAgility;
            case "level" : return this.level;
            case "experience" : return this.experience;
            case "killExperience" : return this.killExperience;
            case "characterType" : return this.characterType;
            case "gold" : return this.gold;
            case "killGold" : return this.killGold;
            default : return 0;
        }
    }

    // pushAddSpecificityArray(specificity: Specificity) {
    //     this.add_specificity.set(specificity.name, specificity);
    // }

    // removeAddSpecificityArray(specificity: Specificity) {
    //     this.add_specificity.delete(specificity.name);
    // }

    characterAddExperience(experience: number) {
        const levelUpExperienceWeight = this.getRequiredExperienceForNextLevel();
        if( this.experience + experience >= levelUpExperienceWeight ) {
            this.level += 1;
            let addHitPoint = this.levelUpHitPoint;
            let addResource = this.levelUpResource;
            let addStrength = this.additionalStrength;
            let addMental = this.additionalMental;
            let addAgility = this.additionalAgility;
            // 특성 중 레벨업시 적용 switch 특정치일 경우 해당증감치 값에 적용
            // this.default_specificity.forEach(( specValueObject ) => 
            // {
            //     if( specValueObject.applicationType === ApplicationType.applyLevelUp ) {
            //         switch( specValueObject.applicationMethod ) {
            //             case "hitPoint" : addHitPoint += specValueObject.additionalValue; break;
            //             case "resource" : addResource += specValueObject.additionalValue; break;
            //             case "strength" : addStrength += specValueObject.additionalValue; break;
            //             case "mental" : addMental += specValueObject.additionalValue; break;
            //             case "agility" : addAgility += specValueObject.additionalValue; break;
            //         }
            //     }
            // });
            this.maximumHitPoint += addHitPoint;
            this.currentHitPoint += addHitPoint;
            this.maximumResource += addResource;
            this.currentResource += addResource;
            this.strength += addStrength;
            this.mental += addMental;
            this.agility += addAgility;
            this.experience = 0;
            Swal.fire({title:'Level Up!', text:'다음 레벨업 필요경험치 : 0/' + levelUpExperienceWeight});
        } else {
            this.experience += experience;
        }
    }

    getRequiredExperienceForNextLevel():number {
        return this.level * ( Math.ceil(this.level / 10) * 100 );
    }

}

enum characterType {
    default = -1,
    player = 0,
    monster = 1
}

/**
* Builder
*/
class BuildCharacter {

}





export { Character, Specificity };