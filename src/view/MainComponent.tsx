import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';


function MainComponent() {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="main_div">
                <div>
                    <h1>메인화면</h1>
                    <div className="bottom_div_btn">
                        <Button variant="primary" onClick={()=>{navigate('/character')}}>게임 시작</Button> <br/><br/>
                        <Button variant="success">게임 설명</Button>
                        &nbsp;&nbsp;
                        <Button variant="info">개발자 정보</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MainComponent;