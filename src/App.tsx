import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/main.scss';

function App() {

  const [ loginStat, setLoginStat] = useState(false);

  useEffect(() => {
    if( loginStat ) {

    } else {

    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        텍스트 RPG 게임
      </header>
      <BrowserRouter>
        <Routes>
          {/* 메인화면 */}
          <Route path="/"></Route>
          {/* 메인화면/캐릭터선택 */}
          <Route path="/character"></Route>
          {/* 메인화면/게임설명 */}
          <Route path="/description"></Route>
          {/* 메인화면/캐릭터선택/마을 */}
          <Route path="/game/town"></Route>
          {/* 메인화면/캐릭터선택/마을/의뢰소 */}
          <Route path="/game/town/requestoffice"></Route>
          {/* 메인화면/캐릭터선택/마을/상점 */}
          <Route path="/game/town/shop"></Route>
          {/* 메인화면/캐릭터선택/마을/여관 */}
          <Route path="/game/town/motel"></Route>
          {/* 메인화면/캐릭터선택/필드 */}
          <Route path="/game/field"></Route>
          <Route path="*">페이지를 찾을 수 없습니다.</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
