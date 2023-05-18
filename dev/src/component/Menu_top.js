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
									<li onClick={this.props.ImageUploadHandler}>
										새로 만들기 <span className="EnglishDropDownMenuText">(New Project)</span>
									</li>
									<li onClick={this.props.NotAvailableYetHandler}>
										불러오기 <span className="EnglishDropDownMenuText">(Load)</span>
									</li>
									<hr />
									<li onClick={this.props.ExportToDjangoServerHandler}>
										서버에 저장 <span className="EnglishDropDownMenuText">(Save)</span>
									</li>
									<li onClick={() => this.props.DownloadHandler("jpeg")}>
										JPEG로 다운로드 <span className="EnglishDropDownMenuText">(Download as JPEG)</span>
									</li>
									<li onClick={() => this.props.DownloadHandler("png")}>
										PNG로 다운로드 <span className="EnglishDropDownMenuText">(Download as PNG)</span>
									</li>
									<hr />
									<li onClick={this.props.NotAvailableYetHandler}>
										페이스북으로 내보내기 <span className="EnglishDropDownMenuText">(Export to Facebook)</span>
									</li>
									<li onClick={this.props.NotAvailableYetHandler}>
										인스타그램으로 내보내기 <span className="EnglishDropDownMenuText">(Export to Instagram)</span>
									</li>
									<li onClick={this.props.ExportToTwitterHandler}>
										트위터로 내보내기 <span className="EnglishDropDownMenuText">(Export to Twitter)</span>
									</li>
									<hr />
									<li onClick={this.props.ProjectExitHandler}>
										프로젝트 종료 및 삭제 <span className="EnglishDropDownMenuText">(Delete and Exit)</span>
									</li>
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
								<li onClick={this.props.UndoHandler}>
									실행 취소 <span className="EnglishDropDownMenuText">(Undo)</span>
								</li>
								<li onClick={this.props.RedoHandler}>
									다시 실행 <span className="EnglishDropDownMenuText">(Redo)</span>
								</li>
								<hr />
								<li onClick={this.props.CopyToClipboardhandler}>
									클립보드에 복사 <span className="EnglishDropDownMenuText">(Copy)</span>
								</li>
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
								<li
									className={this.props.selectModeActivated ? "MenuClicked" : ""}
									onClick={() => {
										this.props.SelectAllHandler();
									}}>
									선택 가능 모드 <span className="EnglishDropDownMenuText">(Selectable Mode)</span>
								</li>
								<li onClick={this.props.DeSelectHandler}>
									선택 해제 <span className="EnglishDropDownMenuText">(Deselect)</span>
								</li>
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
								<li className={this.props.filter_preset_1 ? "MenuClicked" : ""} onClick={this.props.FilterPreset1}>
									필터: 흑백 <span className="EnglishDropDownMenuText">(Filter: Grayscale)</span>
								</li>
								<li className={this.props.filter_preset_2 ? "MenuClicked" : ""} onClick={this.props.FilterPreset2}>
									필터: 세피아 <span className="EnglishDropDownMenuText">(Filter: Sepia)</span>
								</li>
								<li className={this.props.filter_preset_3 ? "MenuClicked" : ""} onClick={this.props.FilterPreset3}>
									필터: 엠보싱 <span className="EnglishDropDownMenuText">(Filter: Emboss)</span>
								</li>
								<li className={this.props.filter_preset_4 ? "MenuClicked" : ""} onClick={this.props.FilterPreset4}>
									필터: 반전 <span className="EnglishDropDownMenuText">(Filter: Color Invert)</span>
								</li>
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
								<li onClick={this.props.ZoomInHandler}>
									확대 <span className="EnglishDropDownMenuText">(Zoom in)</span>
								</li>
								<li onClick={this.props.ZoomOutHandler}>
									축소 <span className="EnglishDropDownMenuText">(Zoom out)</span>
								</li>
								<li onClick={this.props.ResetZoomHandler}>
									원본 크기로 <span className="EnglishDropDownMenuText">(Original size)</span>
								</li>
								<hr />
								<li onClick={this.props.FlipXHandler}>
									좌우 반전 <span className="EnglishDropDownMenuText">(Flip horizontal)</span>
								</li>
								<li onClick={this.props.FlipYHandler}>
									상하 반전 <span className="EnglishDropDownMenuText">(Flip vertical)</span>
								</li>
								<li onClick={this.props.ResetFlip}>
									되돌리기 <span className="EnglishDropDownMenuText">(Reset Flip)</span>
								</li>
							</ul>
						</li>
						<li
							className={this.props.recommend_image_Activated ? "Selected" : ""}
							onClick={() => {
								this.setState(
									{
										view_menu_activated: false,
										file_menu_activated: false,
										edit_menu_activated: false,
										select_menu_activated: false,
										filter_menu_activated: false,
										help_menu_activated: false,
									},
									() => {
										this.props.ChangeRecommend();
									}
								);
							}}>
							이미지 추천 <span className="EnglishMenuText">(Image Recommendation)</span>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu_top;
