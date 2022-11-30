import { Character } from "../data/dto/CharacterDTO";


const loginStateMap:Map<string, any> = new Map;

export const create_loginState = (character:Character) => ({
    type : 'CREATE',
    data: {
        character
    }
});

export const loginState = (stat = loginStateMap, action:any) => {
    console.log(action);
    switch( action.type ) {
        case "CREATE" : 
            loginStateMap.set("character", action.data);
            return {
                ...stat
            }
        default : 
            return loginStateMap
    }
}