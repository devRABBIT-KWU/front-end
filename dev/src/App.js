// 패키지/컴포넌트
import { Component } from "react";

// 자체작성 패키지/컴포넌트
//import DetailSetting from "./component/DetailSetting_right";
import ToolBoxAndCanvas from "./component/ToolBoxAndCanvas";

// 스타일시트 파일
import "./stylesheet/App.scss";

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

class App extends Component {
	render() {
		document.documentElement.lang = "ko";
		return (
			<div className="App">
				<div className="AppTitleBar">
					<div className="AppLogoAndFileName">
						<img className="AppLogo" src={APP_LOGO} alt="임시 애플리케이션 아이콘" /> 당근에디터&nbsp;
						<span className="ProgramVersionText">v0.1.1.dev230126A.alpha</span>
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

				<ToolBoxAndCanvas />
			</div>
		);
	}
}

export default App;
