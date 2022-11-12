import React, { Component } from "react";
import "../stylesheet/Menu_top.scss";

class Menu_top extends Component {
    state = {
        fileMenuActivated: false
    };

    render() {
        return(
            <div className="Menu">
                <nav id="topMenu">
                    <ul>
                        <li>
                            파일
                            <div><ul id="fileMenu" className="HiddenDropDownNavMenu">
                                <li>업로드</li>
                                <li>다운로드</li>
                                <hr />
                                <li>서버에 저장</li>
                                <li>프로젝트 종료 및 삭제</li>
                            </ul></div>
                        </li>
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
        )
    };
}


export default Menu_top;