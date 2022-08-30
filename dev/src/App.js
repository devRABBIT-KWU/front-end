// 패키지/컴포넌트
import { Component } from "react";

// 자체작성 패키지/컴포넌트
import Menu from "./component/Menu_top";
import ToolBox from "./component/ToolBox_left";
import DetailSetting from "./component/DetailSetting_right";

// 스타일시트 파일
import "./stylesheet/App.scss";

// 이미지 파일 (로고 등)
import APP_LOGO from "./image/sample_logo.png";
import USER_PROFILE_IMAGE from "./image/sample_profile.png";

// NHN - ToastUI Image Editor
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";

class App extends Component {
  render() {
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
        <ToolBox />


        {/*
        <Menu_top />
        <ToolBox_left />
        <DetailSetting_right />
        */}
        
      </div>
    );
  }
}

export default App;
