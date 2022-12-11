import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { create_loginState, select_loginState, select_monster } from '../js/loginState';

import '../css/field.scss';


function FildComponent() {

    const dispatch = useDispatch();
    const [ loginUser, chgLoginUser ] = useState(dispatch(select_loginState()).loginState);
    const [ monster, chgMonster ] = useState(dispatch(select_monster()).monsterState);

    useEffect(() => {

    }, []);

    return <>
        <div className="field_div">
            <div className="field_info_div field_monster_div">

            </div>
            <div className="field_log">

            </div>
            <div className="field_info_div field_user_div">

            </div>
        </div>
    </>
}


export default FildComponent;