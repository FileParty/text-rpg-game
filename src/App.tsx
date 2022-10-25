import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/main.scss';
import Main from './view/Main';
import Character from './view/Character';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ loginStat, setLoginStat] = useState(false);

  useEffect(() => {
    if( loginStat ) {

    } else {

    }
  }, [])

  return (
    <div className="App">
      
      <BrowserRouter>
        <header className="App-header">
          <Link className="title_text" to={"/"}>TEXT GAME RPG</Link>
        </header>
        <Routes>
          {/* 메인화면 */}
          <Route path="/" element={<Main />}></Route>
          {/* 메인화면/캐릭터선택 */}
          <Route path="/character" element={<Character/>}></Route>
          {/* 메인화면/게임설명 */}
          <Route path="/description">3</Route>
          {/* 메인화면/캐릭터선택/마을 */}
          <Route path="/game/town">4</Route>
          {/* 메인화면/캐릭터선택/마을/의뢰소 */}
          <Route path="/game/town/requestoffice">5</Route>
          {/* 메인화면/캐릭터선택/마을/상점 */}
          <Route path="/game/town/shop">6</Route>
          {/* 메인화면/캐릭터선택/마을/여관 */}
          <Route path="/game/town/motel">7</Route>
          {/* 메인화면/캐릭터선택/필드 */}
          <Route path="/game/field">8</Route>
          <Route path="*">페이지를 찾을 수 없습니다.</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
