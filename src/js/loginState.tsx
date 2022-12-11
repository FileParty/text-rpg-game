import { Character } from "../data/dto/CharacterDTO";


export const loginStateMap:Map<string, any> = new Map();
export const monsterSelect:Map<string, any> = new Map();

export const session_key = "character";
export const monster_key = "monster";

export const create_loginState = (character:Character) => ({
    type : 'CREATE',
    data: {
        character
    }
});

export const select_loginState = () => ({
    type : 'SELECT',
    loginState: loginStateMap.get(session_key)
})

export const insert_monster = (monster:Character) => ({
    type : 'INSERT_MONSTER',
    data: {
        monster
    }
})

export const select_monster = () => ({
    type : 'SELECT',
    monsterState: loginStateMap.get(monster_key)
})

export const loginState = (stat = loginStateMap, action:any) => {
    switch( action.type ) {
        case "CREATE" : 
            loginStateMap.set(session_key, action.data);
            return {
                ...stat
            }
        case "SELECT" :
            return {
                ...stat,
                loginState : loginStateMap.get(session_key)
            }
        case "INSERT_MONSTER" : 
            loginStateMap.set(monster_key, action.data);
            return {
                ...stat
            }
        case "SELECT_MONSTER" : 
            return {
                ...stat,
                loginState : loginStateMap.get(monster_key)
            }
        default : 
            return loginStateMap
    }
}