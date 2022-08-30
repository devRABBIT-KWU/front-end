import "../stylesheet/Menu_top.scss";

const Menu_top = () => {
    return(
        <div className="Menu">
            <nav id="topMenu">
                <ul>
                    <li>파일</li>
                    <li className="Unavailable">편집</li>
                    <li className="Unavailable">이미지</li>
                    <li className="Unavailable">레이어</li>
                    <li className="Unavailable">문자</li>
                    <li className="Unavailable">선택</li>
                    <li className="Unavailable">필터</li>
                    <li className="Unavailable">3D</li>
                    <li className="Unavailable">보기</li>
                    <li>이미지 추천</li>
                    <li className="Unavailable">도움말</li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu_top;