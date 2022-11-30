class Character 
{
    idx                     : number;
    name                    : string;
    explation               : string;
    images                  : string;
    maximumHitPoint         : number;
    currentHitPoint         : number;
    resourceName            : string;
    maximumResource         : number | null;
    currentResource         : number | null;
    char_status             : Status;
    statusPointe            : number;
    default_specificity     : Map<string, Specificity>;
    add_specificity         : Map<string, Specificity>;

    constructor(idx: number, name: string, explation: string, images: string, char_status: Status, 
            hitPoint: number, resourceName: string, resource: number,
            default_specificity: Map<string, Specificity>) 
    {
        this.idx = idx;
        this.name = name;
        this.explation = explation;
        this.images = images;
        this.char_status = char_status;
        this.maximumHitPoint = hitPoint;
        this.currentHitPoint = hitPoint;
        this.resourceName = resourceName;
        this.maximumResource = resource;
        this.currentResource = resource;
        this.default_specificity = default_specificity; // 기본 특성은 캐릭터 최초 생성시에는 생성가능 그 외에는 변경 불가
        this.add_specificity = new Map; // 캐릭터 최초 생성시에는 추가 특성이 없기에 new로 초기화
        this.statusPointe = 0; // 스테이터스 포인트도 캐릭터 최초 생성시에는 없기에 0으로 생성
    }

    pushAddSpecificityArray(specificity: Specificity) {
        this.add_specificity.set(specificity.id, specificity);
    }

    removeAddSpecificityArray(specificity: Specificity) {
        this.add_specificity.delete(specificity.id);
    }

}

/**
 * 스테이터스
 * - 캐릭터의 체력/힘/정신/지혜/민첩/카리스마 스테이터스 객체
 */
class Status 
{
    hitPoint         : number;
    strength         : number;
    mental           : number;
    wisdom           : number;
    agility          : number;
    charisma         : number;
    constructor(hitPoint: number, strength: number, mental: number, 
        wisdom: number, agility: number, charisma: number) 
    {
            this.hitPoint = hitPoint;
            this.strength = strength;
            this.mental = mental;
            this.wisdom = wisdom;
            this.agility = agility;
            this.charisma = charisma;
    }
}

/**
 * 특성
 * - 각 캐릭터의 기본으로 주어지는 추가 효과 혹은 게임 진행 중 획득가능한 긍정적/부정적인 효과
 */
class Specificity 
{
    id                      : string;
    name                    : string;
    explation               : string;

    constructor(id: string, name: string, explation: string) {
        this.id = id;
        this.name = name;
        this.explation = explation;
    }
}

class StatusSpecificity extends Specificity 
{

}

/**
 * physicalAttack/physicalDefense : 물리 공격/피해
 * magicAttack/magicDefense : 마법 공격/피해
 * neutralAttack/neutralDefense : 중립 공격/피해
 * Buff : 버프
 * Evasion : 회피
 * crowdControl : 군중제어기
 */
enum skill_type {
    physicalAttack, magicAttack, neutralAttack, physicalDefense, 
    magicDefense, neutralDefense, Buff, Evasion, crowdControl
};

interface skill {
    idx                     : number;
    name                    : string;       // 스킬명
    skill_type              : skill_type;   // 스킬유형
    explation               : string;       // 스킬설명
    damage                  : number;
    additional_factor       : number;
    status_impact           : Status;
}

interface status_info {
    name                    : string;   // 스테이터스 이름
    value                   : number;   // 스테이터스 밸류값
    coefficient             : number;   // 레벨업 당 추가 계수
}





export type { Character };