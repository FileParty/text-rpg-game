
/**
 * 특성
 * - 각 캐릭터의 기본으로 주어지는 추가 효과 혹은 게임 진행 중 획득가능한 긍정적/부정적인 효과
 */
 class Specificity 
 {
    private id: string = "";
    private name: string = "";
    private explation: string = "";
    private applicationType: ApplicationType = ApplicationType.default; // 적용 유형
    private applicationMethod: ApplicationMethod = ApplicationMethod.default; // 적용 방식
    private additionalValue: number = 0;
    private conditions: Function = () => {}; // 적용 조건( 전투시 적용에 사용됩니다. )
    private numberOfTurns: number = 0; // 적용 턴수( 전투시 적용에 사용됩니다. )

    constructor() {}

    setStringCharacterArg(characterStringType: string, arg: string) {
        switch( characterStringType ) {
            case "id" : this.id = arg; break;
            case "name" : this.name = arg; break;
            case "explation" : this.explation = arg; break;
            default : return false;
        }
        return true;
    }

    getStringCharacterArg(characterStringType: string):string {
        switch( characterStringType ) {
            case "id" : return this.id;
            case "name" : return this.name;
            case "explation" : return this.explation;
            default : return "";
        }
    }


}

enum ApplicationType
{
    default = 0,
    oneOff = 1, // 일회성 적용
    applyLevelUp = 2, // 레벨업시 적용
    appliedInbattle = 3, // 전투시 적용
}

enum ApplicationMethod
{
    default = "default",
    strength = "strength", // 스텟 - 힘
    mental = "mental", // 스텟 - 정신
    agility = "agility", // 스텟 - 민첩
    hitPoint = "hitPoint", // 체력
    resource = "resource", // 자원
}


export { Specificity, ApplicationType, ApplicationMethod };