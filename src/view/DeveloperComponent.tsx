import { Link } from "react-router-dom";

export default function DeveloperComponent() {
    return <>
        <div className="common_text_div">
            <p>
                한양사이버대학교 컴퓨터공학과 김인술<br/>
                <hr/>
                github : <a href='https://github.com/FileParty/text-rpg-game'>https://github.com/FileParty/text-rpg-game</a>
            </p>
            <hr/>
            <Link className="link" to={"/"}>메인으로</Link>
        </div>
    </>
}