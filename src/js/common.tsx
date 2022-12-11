import { Character  } from "../data/dto/CharacterDTO"


/**
 * 로컬스토리지에 저장/조회시 캐릭터정보 외에 log나 skill, 아이템 등 추가 정보를 저장하기 위해 map 형식으로 저장함
 */


interface storageModel {
    id:string,
    lastDate:string,
    character:Character
}

function getFullDate():string {
    return new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate();
}

export function insertCharacterLocalStorage(obj:Character) {
    if( localStorage.getItem(obj.getStringCharacterArg("id") ) === undefined ) {
        return false;
    } else {
        let regDt:string = getFullDate();
        let storageSaveMap:storageModel = {id:obj.getStringCharacterArg("id"), lastDate:regDt, character:obj};
        localStorage.setItem(storageSaveMap.id, JSON.stringify(storageSaveMap));
        return true;
    }
}

export function insertCharacterLocalStorageAny(obj:any) {
    if( localStorage.getItem(obj.id) === undefined ) {
        return false;
    } else {
        console.log("save");
        let regDt:string = getFullDate();
        let storageSaveMap:storageModel = {id:obj.id, lastDate:regDt, character:obj};
        localStorage.setItem(storageSaveMap.id, JSON.stringify(storageSaveMap));
        return true;
    }
}

export function selectCharacterLocalStoreage(charId:string) {
    const storageSaveMap:storageModel = JSON.parse(localStorage.getItem(charId));
    return storageSaveMap.character;
}

export function selectFullLocalStoreage(saveId:string) {
    return JSON.parse(localStorage.getItem(saveId));
}

export function selectAllFulllocalStorage() {
    let localStorageList:Array<any> = [];
    for( let i = 0; i < localStorage.length; i++) {
        localStorageList.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
    }
    return localStorageList;
}

export {}