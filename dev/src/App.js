// 패키지/컴포넌트
import { Component } from "react";

// 자체작성 패키지/컴포넌트
import Menu from "./component/Menu_top";
import DetailSetting from "./component/DetailSetting_right";
import ToolBoxAndCanvas from "./component/ToolBoxAndCanvas";


// 스타일시트 파일
import "./stylesheet/App.scss";

// 이미지 파일 (로고 등)
import APP_LOGO from "./image/sample_logo.png";
import USER_PROFILE_IMAGE from "./image/sample_profile.png";

// NHN - ToastUI Image Editor
import "tui-image-editor/dist/tui-image-editor.css";

class App extends Component {
  render() {
    document.documentElement.lang = 'ko';
    return (
      <div className="App">
        <div className="AppTitleBar">
          <div className="AppLogoAndFileName">
            <img
              className="AppLogo"
              src={APP_LOGO}
              alt="임시 애플리케이션 아이콘"
            />{" "}
            SampleImage.png
          </div>
          {/* 이 부분을 컴포넌트로 대체할 것 */}
          <div className="LoginUserInfo">
            <div id="UserName">데브래빗(devRABBIT)
              <div id="UserGroup">팀 사용자</div>
            </div>
            
            <img
              className="UserProfileImage"
              src={USER_PROFILE_IMAGE}
              alt="임시 애플리케이션 아이콘"
            />
          </div>
        </div>

        <Menu />
        <ToolBoxAndCanvas/>

      </div>
    );
  }
}

export default App;
