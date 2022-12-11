import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../css/town.scss';
import { useDispatch } from "react-redux";
import { select_loginState, create_loginState } from "../js/loginState";
import { useNavigate } from 'react-router-dom';

export default function MotelComponent(prop:any) {

    let [ lodgmentGold, chgLodgmentGold ] = useState(30);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [ loginInfo, chgLoginInfo ] = useState(dispatch(select_loginState()).loginState);

    useEffect(() => {
        console.log(loginInfo);
        if( loginInfo !== undefined && loginInfo !== null  && loginInfo.character !== undefined  && loginInfo.id !== '' ) {
            chgLodgmentGold(30 * Number(loginInfo.character.level) );
        }
    }, [loginInfo])

    function characterLodgment() {
        if( Number(loginInfo.character.gold) >= lodgmentGold ) {
            Swal.fire("여관에서 머물면서 체력을 회복하였습니다.");
            loginInfo.character.currentHitPoint = loginInfo.character.maximumHitPoint;
            loginInfo.character.gold = Number(loginInfo.character.gold) - lodgmentGold;
            dispatch(create_loginState(loginInfo.character));
            chgLoginInfo(loginInfo.character);
            prop.townEvent();
        }
    }

    return <>
        <div className="motel_div">
            <div className="motel_action_div">
                <span>가격 :: <strong>{lodgmentGold}</strong> 주화</span>
                <Button variant="danger" onClick={() => {characterLodgment()} }>숙박</Button>
            </div>
            <div className="town_common_btns_div">
                <Button className="back_btn" variant="info" onClick={() => { navigate("/game/town/default") }}>마을로 돌아가기</Button>
            </div>
        </div>
    </>
}