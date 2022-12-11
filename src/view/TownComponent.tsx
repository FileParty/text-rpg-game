import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { create_loginState, select_loginState } from "../js/loginState";
import "../css/town.scss";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import MotelComponent from "./MotelComponent";
import RequestofficeComponent from "./RequestofficeComponent";
import { insertCharacterLocalStorageAny } from "../js/common";


function TownComponent() {

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const townLoginInfoChg = () => {
        chgLoginInfo(dispatch(select_loginState()).loginState);
    }

    const [ loginInfo, chgLoginInfo ] = useState(dispatch(select_loginState()).loginState);

    useEffect(()=> {
        if( loginInfo === undefined || loginInfo === null || loginInfo.character === null || loginInfo.id === '' ) {
            Swal.fire("로그인 정보를 찾을 수 없습니다.");
            navigate("/");
        }
    });

    function townPage() {
        switch(params.page) {
            case "requestoffice" : 
                return <><RequestofficeComponent /></>
            case "shop" : 
                return <>상점</>
            case "motel" : 
                return <><MotelComponent townEvent={townLoginInfoChg}/></>
            default :
                return <>
                    <div className="town_ground_divs">
                        <Link to="/game/town/requestoffice">의뢰소</Link>
                    </div>
                    <div className="town_ground_divs">
                        <Link to="/game/town/shop">상점</Link>
                    </div>
                    <div className="town_ground_divs">
                        <Link to="/game/town/motel">여관</Link>
                    </div>
                </>
        }
    }

    function saveCharacterInfo() {
        Swal.fire({
            title: '캐릭터 저장',
            text: 'ID : ' + loginInfo.character.id + ' 의 캐릭터를 저장하시겠습니까?',
            confirmButtonText: '저장',
            cancelButtonText: '취소',
            preConfirm: () => {
                dispatch(create_loginState(loginInfo));
                console.log(loginInfo.character);
                insertCharacterLocalStorageAny(loginInfo.character);
                Swal.fire("저장되었습니다.");
            }
        })
        
    }

    function selectCharacterInfo() {
        let charInfo = loginInfo.character;
        Swal.fire({
            title: '<strong>캐릭터 정보</strong>',
            width: 800,
            html: 
                ' <table class="town_popup_info"> '
                + '<tr>'
                + ' <th>캐릭터 ID </th><td>' + charInfo.id + '</td>'
                + ' <th>직업 </th><td>' + charInfo.name + ' </td>'
                + ' <th>Level </th><td>' + charInfo.level + ' </td>'
                + '</tr>'
                + '<tr>'
                + ' <th>체력 </th><td colspan="2">' + charInfo.currentHitPoint  + '/' + charInfo.maximumHitPoint + ' </td>'
                + ' <th>' + charInfo.resourceName  + '</th>'
                + ' <td colspan="2">' + charInfo.currentResource  + '/' + charInfo.maximumResource + ' </td>'
                + '</tr>'
                + '<tr>'
                + ' <th>힘 </th><td>' + charInfo.strength + '</td>'
                + ' <th>정신 </th><td>' + charInfo.mental + '</td>'
                + ' <th>민첩 </th><td>' + charInfo.agility + '</td>'
                + '</tr>'
                + '<tr>'
                + ' <th>경험치 </th> <td>' + charInfo.experience + '</td>'
                + ' <th>설명 </th>'
                + ' <td colspan="3">' + charInfo.explation + '</td>'
                + '</tr>'
                + '</table> ',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '확인'
          })
    }


    return <>
        <Container className="town_container">
            <div className="town_main_div">
                {townPage()}
            </div>
            <div className="town_sub_div">
                <div className="town_sub_btn_divs">
                    <Button variant="info" className="town_sub_event_btn" onClick={()=>{saveCharacterInfo()}}>저장</Button>
                </div>
                <div className="town_sub_btn_divs">
                    <Button variant="success" className="town_sub_event_btn" onClick={()=>{selectCharacterInfo()}}>캐릭터정보</Button>
                </div>
                <div className="town_sub_btn_divs">
                    <Button className="town_sub_event_btn">가방</Button>
                </div>
                <div className="town_sub_btn_divs">
                    <h3 className="town_user_gold"><span className="town_user_gold_display">
                            {loginInfo != null ? loginInfo.character.gold : '0'}</span>&nbsp;주화</h3>
                </div>
            </div>
        </Container>
    </>
    
}

export default TownComponent;