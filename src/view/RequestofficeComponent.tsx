import { useDispatch } from "react-redux";
import { insert_monster } from "../js/loginState";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import "../css/town.scss";
import "../css/requestoffice.scss";
import { Card } from "react-bootstrap";
import { monsterMap } from "../data/json/MonsterList";
import { Character } from "../data/dto/CharacterDTO";


export default function RequestofficeComponent() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ monsterInfoList, chgMonsterInfoList ] = useState(new Array<Character>());

    useEffect(() => {
        if( monsterInfoList.length === 0 ) {
            const monsterMapList = [...monsterInfoList];
            monsterMap.forEach((arg, key, map) => {
                monsterMapList.push(arg);
            });
            chgMonsterInfoList(monsterMapList);
        }
    }, [monsterInfoList])

    function selectMonster(arg:Character) {
        Swal.fire({
            title: '의뢰 선택',
            text: '정말 이 의뢰를 수행하시겠습니까?',
            cancelButtonText: "아니오",
            confirmButtonText: "예",
            preConfirm: () => {
                dispatch(insert_monster(arg));
                navigate("/game/field");
            }
        })
    }

    return <>
        <div className="requestoffice_div">
            { monsterInfoList.map((arg) => {
                return <Card className="requestoffice_monster_card" key={arg.getStringCharacterArg("name")} onClick={()=>{ selectMonster(arg) }}>
                    <Card.Img className="monster_img" variant="top" src={arg.getStringCharacterArg("images")} ></Card.Img>
                    <Card.Body>
                        <Card.Title className="monster_name">{arg.getStringCharacterArg("name")}</Card.Title>
                        <Card.Text className="monster_text">
                            Lv {arg.getNumberCharacterArg("level")}, 보상 {arg.getNumberCharacterArg("killGold")} 주화 <br/>
                            {arg.getStringCharacterArg("explation")}
                        </Card.Text>
                    </Card.Body>
                </Card>
            })}
            
        </div>
    </>
}