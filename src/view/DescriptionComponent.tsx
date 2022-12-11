import { Link } from "react-router-dom";


export default function DescriptionComponent() {
    return <>
        <div className="common_text_div">
            <p>
                텍스트 게임으로 캐릭터를 선택한 다음<br/>
                마을에서 의뢰소를 통해 몬스터와 전투를 하여 당신의 캐릭터를 성장시키세요!<br/>
                전투 후 마을의 여관에서 휴식을 취하거나 상점에서 새로운 물건을 구입하세요!<br/>
            </p>
            <Link className="link" to={"/"}>메인으로</Link>
        </div>
    </>
}