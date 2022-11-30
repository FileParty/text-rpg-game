import { Character  } from "../data/dto/CharacterDTO"


/**
 * 로컬스토리지에 저장/조회시 캐릭터정보 외에 log나 skill, 아이템 등 추가 정보를 저장하기 위해 map 형식으로 저장함
 */


interface storageModel {
    id:string,
    lastDate:string,
    character:Character
}

export function insertCharacterLocalStorage(obj:Character) {
    if( localStorage.getItem(obj.getStringCharacterArg("id") ) ) {
        return false;
    } else {
        let regDt:string = (new Date().getFullYear + "-" + new Date().getMonth + "-" + new Date().getDate);
        let storageSaveMap:storageModel = {id:obj.getStringCharacterArg("id"), lastDate:regDt, character:obj};
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
    let localStorageList:Array<any> = new Array;
    for( let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        localStorageList.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
    }
    return localStorageList;
}

export {}