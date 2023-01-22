import React, { Component } from "react";

import "../stylesheet/Menu_top.scss";

class Menu_top extends Component {
	state = {
		file_menu_activated: false,
		edit_menu_activated: false,
		select_menu_activated: false,
		filter_menu_activated: false,
		view_menu_activated: false,
		recommendImage_menu_activated: false,
		help_menu_activated: false,
	};

	render() {
		return (
			<div className="Menu">
				<nav id="TopMenu">
					<ul>
						<li
							className={this.state.file_menu_activated ? "Selected" : ""}
							onClick={() =>
								this.setState({
									file_menu_activated: !this.state.file_menu_activated,
									edit_menu_activated: false,
									select_menu_activated: false,
									filter_menu_activated: false,
									view_menu_activated: false,
									recommendImage_menu_activated: false,
									help_menu_activated: false,
								})
							}>
							파일 <span className="EnglishMenuText">(File)</span>
							<div>
								<ul id="fileMenu" className={"DropDownNavMenu " + (this.state.file_menu_activated ? "" : "Hidden")}>
									<li onClick={this.props.ImageUploadHandler}>새로 만들기 <span className="EnglishMenuText">(New Project)</span></li>
									<li className="Unavailable">불러오기 <span className="EnglishMenuText">(Load)</span></li>
									<hr />
									<li className="Unavailable">서버에 저장 <span className="EnglishMenuText">(Save)</span></li>
									<li onClick={this.props.DownloadHandler}>다운로드 <span className="EnglishMenuText">(Download)</span></li>
									<hr />
									<li onClick={this.props.ProjectExitHandler}>프로젝트 종료 및 삭제 <span className="EnglishMenuText">(Delete and Exit)</span></li>
								</ul>
							</div>
						</li>
						<li
							className={this.state.edit_menu_activated ? "Selected" : ""}
							onClick={() =>
								this.setState({
									edit_menu_activated: !this.state.edit_menu_activated,
									file_menu_activated: false,
									select_menu_activated: false,
									filter_menu_activated: false,
									view_menu_activated: false,
									recommendImage_menu_activated: false,
									help_menu_activated: false,
								})
							}>
							편집 <span className="EnglishMenuText">(Edit)</span>
							<ul id="editMenu" className={"DropDownNavMenu " + (this.state.edit_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.UndoHandler}>실행 취소 <span className="EnglishMenuText">(Undo)</span></li>
								<li onClick={this.props.RedoHandler}>다시 실행 <span className="EnglishMenuText">(Redo)</span></li>
								<hr />
								<li onClick={this.props.CopyToClipboardhandler}>클립보드에 복사 <span className="EnglishMenuText">(Copy)</span></li>
							</ul>
						</li>
						<li
							className={this.state.select_menu_activated ? "Selected" : ""}
							onClick={() =>
								this.setState({
									select_menu_activated: !this.state.select_menu_activated,
									file_menu_activated: false,
									edit_menu_activated: false,
									filter_menu_activated: false,
									view_menu_activated: false,
									recommendImage_menu_activated: false,
									help_menu_activated: false,
								})
							}>
							선택 <span className="EnglishMenuText">(Select)</span>
							<ul id="selectMenu" className={"DropDownNavMenu " + (this.state.select_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.SelectAllHandler}>모두 선택 <span className="EnglishMenuText">(Select all)</span></li>
								<li onClick={this.props.DeSelectHandler}>선택 해제 <span className="EnglishMenuText">(Deselect)</span></li>
							</ul>
						</li>
						<li
							className={this.state.filter_menu_activated ? "Selected" : ""}
							onClick={() =>
								this.setState({
									filter_menu_activated: !this.state.filter_menu_activated,
									file_menu_activated: false,
									edit_menu_activated: false,
									select_menu_activated: false,
									view_menu_activated: false,
									recommendImage_menu_activated: false,
									help_menu_activated: false,
								})
							}>
							필터 <span className="EnglishMenuText">(Filter)</span>
							<ul id="filterMenu" className={"DropDownNavMenu " + (this.state.filter_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.FilterPreset1}>필터 프리셋 #1 <span className="EnglishMenuText">(Filter preset #1)</span></li>
								<li onClick={this.props.FilterPreset2}>필터 프리셋 #2 <span className="EnglishMenuText">(Filter preset #2)</span></li>
								<li onClick={this.props.FilterPreset3}>필터 프리셋 #3 <span className="EnglishMenuText">(Filter preset #3)</span></li>
								<li onClick={this.props.FilterPreset4}>필터 프리셋 #4 <span className="EnglishMenuText">(Filter preset #4)</span></li>
								<hr />
								<li onClick={this.props.FilterHandler}>사용자 지정 필터...</li>
							</ul>
						</li>
						<li
							className={this.state.view_menu_activated ? "Selected" : ""}
							onClick={() =>
								this.setState({
									view_menu_activated: !this.state.view_menu_activated,
									file_menu_activated: false,
									edit_menu_activated: false,
									select_menu_activated: false,
									filter_menu_activated: false,
									recommendImage_menu_activated: false,
									help_menu_activated: false,
								})
							}>
							보기 <span className="EnglishMenuText">(View)</span>
							<ul id="viewMenu" className={"DropDownNavMenu " + (this.state.view_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.ZoomInHandler}>확대 <span className="EnglishMenuText">(Zoom in)</span></li>
								<li onClick={this.props.ZoomOutHandler}>축소 <span className="EnglishMenuText">(Zoom out)</span></li>
								<li onClick={this.props.ResetZoomHandler}>원본 크기로 <span className="EnglishMenuText">(Original size)</span></li>
								<hr />
								<li onClick={this.props.FlipXHandler}>좌우 반전 <span className="EnglishMenuText">(Flip horizontal)</span></li>
								<li onClick={this.props.FlipYHandler}>상하 반전 <span className="EnglishMenuText">(Flip vertical)</span></li>
								<li onClick={this.props.ResetFlip}>되돌리기 <span className="EnglishMenuText">(Reset Flip)</span></li>
							</ul>
						</li>
						<li className="Unavailable">이미지 추천 <span className="EnglishMenuText">(Image Recommendation)</span></li>
						<li className="Unavailable">도움말 <span className="EnglishMenuText">(Help)</span></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu_top;
