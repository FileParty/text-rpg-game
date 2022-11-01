interface char_specificity {
    idx                     : number;
    name                    : string;   // 캐릭터 고유 스킬 이름
    explation               : string;   // 캐릭터 고유 스킬 설명
}

interface common_specificity {
    idx                     : number;
    name                    : string;   // 공용 스킬 이름
    explation               : string;   // 모든 직업 공용 스킬 설명
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
    status_impact           : character;
}

interface status_info {
    name                    : string;   // 스테이터스 이름
    value                   : number;   // 스테이터스 밸류값
    coefficient             : number;   // 레벨업 당 추가 계수
}

interface character {
    idx                     : number;
    name                    : string;
    explation               : string;
    images                  : string;
    status_hitPoint         : status_info,
    status_strength         : status_info,
    status_mental           : status_info,
    status_wisdom           : status_info,
    status_agility          : status_info,
    status_charisma         : status_info,
    specificity_arr         : Array<char_specificity>;
    common_specificity_arr  : Array<common_specificity>;
    skill_arr               : Array<skill>
}



export type { character, char_specificity, common_specificity, skill };