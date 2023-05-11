// 패키지/컴포넌트
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// 자체작성 패키지/컴포넌트
//import DetailSetting from "./component/DetailSetting_right";
import ToolBoxAndCanvas from "./component/ToolBoxAndCanvas";
import Login from "./component/Login.js";
import SignUp from "./component/SignUp.js";
// 스타일시트 파일
import "./stylesheet/App.scss";
import "./stylesheet/font.css";
// 이미지 파일 (로고 등)
import APP_LOGO from "./image/carrot.png";
//import USER_PROFILE_IMAGE from "./image/sample_profile.png";

// NHN - ToastUI Image Editor
import "tui-image-editor/dist/tui-image-editor.css";

// 새로고침 경고 이벤트 리스너
window.addEventListener("beforeunload", (event) => {
	event.preventDefault();
	event.returnValue = "";
});

function App() {
	document.documentElement.lang = "ko";

	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("id") && localStorage.getItem("pw")) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, []);

	return (
		<div className="App">
			<div className="AppTitleBar">
				<div className="AppLogoAndFileName">
					<img className="AppLogo" src={APP_LOGO} alt="당근에디터 아이콘" /> 당근에디터&nbsp;
					<span className="ProgramVersionText">v0.1.1.dev230126A.alpha</span>
					<span id="imageID" style={{ marginLeft: "2.5rem" }}></span>
					{isLogin == false ? (
						<div className="LoginWrapper">
							<ul>
								<li>
									<Link to="/login" style={{ textDecoration: "none", color: "#ff5500" }}>
										로그인
									</Link>
								</li>
								<li>
									<Link to="/signup" style={{ textDecoration: "none", color: "#ff5500" }}>
										회원가입
									</Link>
								</li>
							</ul>
						</div>
					) : (
						<div className="LoginWrapper" style={{ fontSize: "18px", fontStyle: "bold" }}>
							{localStorage.getItem("id")}님, 환영합니다 !
							<button
								onClick={() => {
									setIsLogin(false);
									localStorage.clear();
									window.location.reload();
								}}>
								로그아웃
							</button>
						</div>
					)}
				</div>
				{/* 백엔드 미구현으로 인한 사용자 로그인 부분 주석처리
					<div className="LoginUserInfo">
						<div id="UserName">
							데브래빗(devRABBIT)
							<div id="UserGroup">팀 사용자</div>
						</div>
						
						<img className="UserProfileImage" src={USER_PROFILE_IMAGE} alt="임시 애플리케이션 아이콘" />
					</div>
					*/}
			</div>
			<Routes>
				<Route path="/" element={<ToolBoxAndCanvas />} />
				<Route path="/login" element={<Login id={id} setId={setId} setIsLogin={setIsLogin} pw={pw} setPw={setPw} />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
