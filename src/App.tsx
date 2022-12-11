import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainComponent from './view/MainComponent';
import CharacterChoiceComponent from './view/CharacterChoiceComponent';
import ErrorComponent from './view/ErrorComponent';
import DescriptionComponent from './view/DescriptionComponent';
import DeveloperComponent from './view/DeveloperComponent';
import TownComponent from './view/TownComponent';
import FildComponent from "./view/FildComponent";
import { useDispatch } from "react-redux";
import { select_loginState } from "./js/loginState";
import './css/main.scss';

function App() {

  const dispatch = useDispatch();
  const [ loginStat, chgLoginStat ] = useState(false);
  const [ loginInfo, chgLoginInfo ] = useState("");

  function changeLoginState() {
    let loginChar = dispatch(select_loginState()).loginState.character;
    chgLoginInfo(loginChar.id);
    chgLoginStat(true);
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <header className="App-header">
          <Link className="title_text" to={"/"}>TEXT GAME RPG</Link>
          <div className="login-div">
                { loginStat
                  ? <>
                      <h3 className="suc_login_text">ID : <span>{loginInfo}</span></h3>
                    </>
                  : <> 
                    <h3 className="non_login_text">로그인이 필요합니다.</h3>
                  </>
                  }
          </div>
        </header>
        <Routes>
          {/* 메인화면 */}
          <Route path="/" element={<MainComponent />}></Route>
          {/* 메인화면/캐릭터선택 */}
          <Route path="/character" element={<CharacterChoiceComponent changeLoginState={changeLoginState} />}></Route>
          {/* 메인화면/게임설명 */}
          <Route path="/description" element={<DescriptionComponent />}></Route>
          {/* 메인화면/개발자정보 */}
          <Route path="/developer" element={<DeveloperComponent />}></Route>
          {/* 메인화면/캐릭터선택/마을 */}
          <Route path="/game/town/:page" element={<TownComponent />}></Route>
          {/* 메인화면/캐릭터선택/필드 */}
          <Route path="/game/field" element={<FildComponent />}></Route>
          <Route path="*" element={<ErrorComponent />}>페이지를 찾을 수 없습니다.</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
