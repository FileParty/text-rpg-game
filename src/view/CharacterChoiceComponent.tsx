import { Container, CardGroup, Card, ListGroup, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState, useEffect, FunctionComponent} from 'react';
import { Character } from "../data/dto/CharacterDTO";
import { defaultCharachterList } from "../data/json/CharacterDefaultList";
import { useNavigate } from 'react-router-dom';
import "../css/character.scss";
import Swal from "sweetalert2";
import { insertCharacterLocalStorage, selectAllFulllocalStorage } from "../js/common";
import { useDispatch } from "react-redux";
import { create_loginState } from "../js/loginState";


function CharacterChoiceComponent() {

    let [ slideMarginLeft, slideMarginLeftChg ] = useState(0);

    let userCharacterList:Array<any> = selectAllFulllocalStorage();

    function slideMove(arg:number) {
        slideMarginLeftChg(slideMarginLeft + arg);
    }

    return (
        <Container>
            <div className="char_choice_header">
                <h3>캐릭터 선택</h3>
            </div>
            <div className="char_choice_save_list">
                { 
                    slideMarginLeft < 0
                    ? <><Button onClick={()=>{slideMove(400)}}
                            className="char_choide_save_slide_btns char_choide_save_slide_left_btn">{'<'}</Button></>
                    : <><Button className="char_choide_save_slide_btns char_choice_save_slide_btn_none" /></>
                }
                {
                    slideMarginLeft > -( userCharacterList.length * 400) + 1200
                    ? <><Button onClick={()=>{slideMove(-400)}}
                            className="char_choide_save_slide_btns char_choide_save_slide_right_btn">{'>'}</Button></>
                    : <><Button className="char_choide_save_slide_btns char_choice_save_slide_btn_none" /></>
                }
                <div className="char_choice_save_slide" style={{marginLeft:slideMarginLeft}}>
                    { userCharacterList.length > 0
                        ? userCharacterList.map((value, idx)=>{
                            return <>
                                <div key={value.character.id} className="char_choide_save_content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th colSpan={4}>캐릭터 {value.character.id}</th>
                                            </tr>
                                            <tr>
                                                <th>Lv</th>
                                                <td>{value.character.level}</td>
                                                <th>직업</th>
                                                <td>{value.character.name}</td>
                                            </tr>
                                            <tr>
                                                <th colSpan={2}>마지막<br/>플레이</th>
                                                <td colSpan={2}>{value.lastDate}</td>
                                            </tr>
                                            <tr>
                                                <th colSpan={2} rowSpan={2}>
                                                    <img src={value.character.images} className="char_choice_img" alt="캐릭터이미지" />
                                                </th>
                                                <th>진행</th>
                                                <td>1 단계</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><Button>선택</Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        })
                        : <> <h1 className="char_choice_save_list_null">저장된 캐릭터가 없습니다.</h1> </>
                    }
                </div>
            </div>
            <div className="char_choide_footer">
                <Button variant="primary" onClick={()=>{alert("얏호.")}}>신규생성</Button>
            </div>
            <CardGroup>
                { defaultCharachterList.map((defChar, idx) => {
                    return <CharacterCard key={idx} characterProps={defChar} />
                })}
            </CardGroup>
        </Container>
    )
}

/**
 * prop 타입을 설정해주지 않으면 ts 오류가 발생하여 따로 type을 선언해줌
 */
type CharacterProps = {
    characterProps: Character
}

const CharacterCard: FunctionComponent<CharacterProps> = function({ characterProps }) {

    const storage = localStorage;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const insertCharStat = (char:Character) => {
        dispatch(create_loginState(char));
    }

    const fn_character_select = (CharacterProps:Character) => {
       Swal.fire({
            title: '캐릭터의 ID를 입력하세요.',
            input: 'text',
            inputLabel: '캐릭터 ID : ',
            confirmButtonText: '생성',
            cancelButtonText: '취소',
            showCancelButton: true,
            inputValidator: (value) => {
                const specReg = /^[\s]+/g;
                if(!value) {
                    return 'ID를 입력해주세요.';
                } else if(specReg.test(value)) {
                    return 'ID에 공백을 넣을 수 없습니다.';
                } else if( value.length > 4 ) {
                    CharacterProps.setStringCharacterArg("id", value);
                    if( insertCharacterLocalStorage(CharacterProps) ) {
                        insertCharStat(CharacterProps);
                        Swal.fire("캐릭터가 생성되었습니다.");
                        navigate("/game/town");
                        return '';
                    } else {
                        return '이미 존재하는 ID입니다.';
                    }
                }
                return 'ID는 공백없이 4글자 이상입니다.';
            }
        });
    }

    return <>
        <Card className="char_card">
            <Card.Header>{characterProps.getStringCharacterArg("name")}</Card.Header>
            <Card.Img className="char_img" variant="top" src={characterProps.getStringCharacterArg("images")} alt={characterProps.getStringCharacterArg("name")} />
            <Card.Body>
                <Card.Text className="char_explation">{characterProps.getStringCharacterArg("explation")}</Card.Text>
                <ListGroup className="list-group-flush">
                     <ListGroup.Item>
                        <Table className="common-table">
                            <thead>
                                <tr>
                                    <th colSpan={4}>스테이터스</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>최대체력 : </th>
                                    <td>{characterProps.getNumberCharacterArg("maximumHitPoint")}(+{characterProps.getNumberCharacterArg("levelUpHitPoint")})</td>
                                    <th>자원명 : </th>
                                    <td>{characterProps.getStringCharacterArg("resourceName")}</td>
                                </tr>
                                <tr>
                                    <th>자원량 : </th>
                                    <td>{characterProps.getNumberCharacterArg("maximumResource")}(+{characterProps.getNumberCharacterArg("levelUpResource")})</td>
                                    <th>힘 : </th>
                                    <td>{characterProps.getNumberCharacterArg("strength")}(+{characterProps.getNumberCharacterArg("additionalStrength")})</td>
                                </tr>
                                <tr>
                                    <th>정신 : </th>
                                    <td>{characterProps.getNumberCharacterArg("mental")}(+{characterProps.getNumberCharacterArg("additionalMental")})</td>
                                    <th>민첩 : </th>
                                    <td>{characterProps.getNumberCharacterArg("agility")}(+{characterProps.getNumberCharacterArg("additionalAgility")})</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={() => { fn_character_select(characterProps) }}>선택</Button>
            </Card.Body>
        </Card>
    </>
}

export default CharacterChoiceComponent;