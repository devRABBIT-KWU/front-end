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

	editorRef = React.createRef();

	UndoHandler = () => {
		// 실행취소 (Undo)
	};

	RedoHandler = () => {
		// 실행취소 (Undo)
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
							파일
							<div>
								<ul id="fileMenu" className={"DropDownNavMenu " + (this.state.file_menu_activated ? "" : "Hidden")}>
									<li>새로 만들기 (New Project)</li>
									<li className="Unavailable">불러오기 (Load)</li>
									<hr />
									<li>서버에 저장 (Save)</li>
									<li>다운로드 (Download)</li>
									<hr />
									<li>프로젝트 종료 및 삭제 (Delete and Exit)</li>
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
							편집
							<ul id="editMenu" className={"DropDownNavMenu " + (this.state.edit_menu_activated ? "" : "Hidden")}>
								<li onClick={this.UndoHandler}>실행 취소 (Undo)</li>
								<li onClick={this.RedoHandler}>다시 실행 (Redo)</li>
								<hr />
								<li onClick={this.RedoHandler}>클립보드에 복사 (Copy)</li>
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
							선택
							<ul id="selectMenu" className={"DropDownNavMenu " + (this.state.select_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.SelectAllHandler}>모두 선택 (Select all)</li>
								<li onClick={this.props.DeSelectHandler}>선택 해제 (Deselect)</li>
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
							필터
							<ul id="filterMenu" className={"DropDownNavMenu " + (this.state.filter_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.FilterPreset1}>필터 프리셋 #1 (Filter preset #1)</li>
								<li onClick={this.props.FilterPreset2}>필터 프리셋 #2 (Filter preset #2)</li>
								<li onClick={this.props.FilterPreset3}>필터 프리셋 #3 (Filter preset #3)</li>
								<li onClick={this.props.FilterPreset4}>필터 프리셋 #4 (Filter preset #4)</li>
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
							보기
							<ul id="viewMenu" className={"DropDownNavMenu " + (this.state.view_menu_activated ? "" : "Hidden")}>
								<li onClick={this.props.ZoomInHandler}>확대 (Zoom in)</li>
								<li onClick={this.props.ZoomOutHandler}>축소 (Zoom out)</li>
								<li onClick={this.props.ResetZoomHandler}>원본 크기로 (Original size)</li>
								<hr />
								<li onClick={this.props.FlipXHandler}>좌우 반전 (Flip horizontal)</li>
								<li onClick={this.props.FlipYHandler}>상하 반전 (Flip vertical)</li>
								<li onClick={this.props.ResetFlip}>되돌리기 (Reset Flip)</li>
							</ul>
						</li>
						<li className="Unavailable">이미지 추천</li>
						<li className="Unavailable">도움말</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu_top;
