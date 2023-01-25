import React, { Component } from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import MenuTop from "./Menu_top";
import RecommendImage from "./RecommendImage";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// 스타일시트 파일
import "../stylesheet/ToolBox_left.scss";
import "../stylesheet/Canvas.scss";
import "tui-color-picker/dist/tui-color-picker.css";

// 이미지 파일 (샘플 이미지)
import SAMPLE_IMAGE from "../image/sample_image.png";

// react-icons
import {
	MdOutlineUndo,
	MdOutlineRedo,
	MdRestartAlt,
	MdDeleteOutline,
	MdCrop,
	MdFlip,
	MdRotate90DegreesCcw,
	MdDraw,
	MdOutlineCategory,
	MdOutlineInsertEmoticon,
	MdOutlineTextFields,
	MdOutlineBrandingWatermark,
	MdPhotoFilter,
	MdOutlineBackHand,
	MdOutlineZoomIn,
	MdOutlineZoomOut,
	/*MdOutlineDoDisturbAlt,*/
} from "react-icons/md";

import { IoResize, IoSearch } from "react-icons/io5";

const imageEditorOptions = {
	// 에디터 옵션 설정...
	includeUI: {
		loadImage: {
			path: SAMPLE_IMAGE,
			name: "sample_image",
		},
		uiSize: {
			width: "90vw",
			height: "90vh",
		},
	},
	selectionStyle: {
		cornerStyle: "circle",
		cornerSize: 10,
		cornerColor: "#ffffff",
		cornerStrokeColor: "#252830",
		transparentCorners: false,
		lineWidth: 1,
		rotatingPointOffset: 70,
	},
	usageStatistics: false,
};

class ToolBoxAndCanvas extends Component {
	state = {
		image: null,
		clickedButton: 0,
		fileMenuActivated: false,
		flipActivated: false,
		text_activated: false,
		handActivated: false,
		cursor_xpos: 0,
		cursor_ypos: 0,
		imageId: 0,
		filter_preset_1: false,
		filter_preset_2: false,
		filter_preset_3: false,
		filter_preset_4: false,
	};
	constructor(props) {
		super(props);
		this.state = {
			clicked_button: 0,
			menu_file_activated: false,
			flip_activated: false,
			text_activated: false,
			selectActivated: true,
			selectModeActivated: true,
			cursor_xpos: 0,
			cursor_ypos: 0,
			zoomLvl: 1,
			recommend_image_Activated: false,
		};
	}

	editorRef = React.createRef();
	fileInput = React.createRef();
	handRef = React.createRef();

	handleButtonClick = (e) => {
		this.fileInput.current.click();
	};

	UndoHandler = () => {
		// 실행취소 (Undo)
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.undo();
	};

	RedoHandler = () => {
		// 실행취소 (Undo)
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.redo();
	};

	RemoveActiveObjectHandler = () => {
		// 선택한 오브젝트 제거
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.removeActiveObject();
	};

	ClearObjectsHandler = () => {
		// 이 프로젝트 초기화
		const editorInstance = this.editorRef.current.getInstance();
		if (window.confirm("이 프로젝트의 모든 오브젝트를 삭제하고 초기화할까요?\n(Press 'OK' to delete all object and reset this project.)") === true) {
			editorInstance.clearObjects();
		} else {
			return;
		}
	};

	CropHandler = () => {
		// 자르기
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("crop");
	};

	FlipHandler = () => {
		// 뒤집기 (하위 메뉴 호출)
		const editorInstance = this.editorRef.current.getInstance();
		this.setState({ flip_activated: !this.state.flip_activated });
		editorInstance.ui.changeMenu("flip");
	};

	FlipXHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.flipX();
	};

	FlipYHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.flipY();
	};

	ResetFlip = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.resetFlip();
	};

	RotateHandler = () => {
		// 회전
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("rotate");
	};

	ResizeHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("resize");
	};
	DrawHandler = () => {
		// 선 그리기
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("draw");
	};

	ShapeDrawHandler = () => {
		// 도형 그리기
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("shape");
	};

	IconDrawHandler = () => {
		// 아이콘 삽입
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("icon");
	};

	TextInputHandler = () => {
		// 텍스트 삽입
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("text");
	};

	FilterHandler = () => {
		// 필터 적용
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("filter");
	};

	ZoomInHandler = () => {
		const { zoomIn } = this.handRef.current;
		zoomIn();
	};

	ZoomOutHandler = () => {
		const { zoomOut } = this.handRef.current;
		zoomOut();
	};

	ResetZoomHandler = () => {
		const { resetTransform } = this.handRef.current;
		resetTransform();
	};

	MoveHandler = () => {
		this.setState({ handActivated: !this.state.handActivated });
	};

	WaterMarkHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.changeMenu("mask");
	};

	ImageUploadHandler = (event) => {
		document.getElementById("ImageUploader").click();
	};

	ImageChangeHandler = (event) => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.loadImageFromFile(event.target.files[0]).then((result) => {
			console.log("old : " + result.oldWidth + ", " + result.oldHeight);
			console.log("new : " + result.newWidth + ", " + result.newHeight);
		});
	};

	DownloadHandler = () => {
		const link = document.createElement("a");
		const editorInstance = this.editorRef.current.getInstance();
		link.href = editorInstance.toDataURL();
		link.download = "download.png";
		link.click();
	};

	ProjectExitHandler = () => {
		if (window.confirm("정말 이 창을 닫고 프로젝트를 삭제할까요?\n(Are you sure to close this window and delete this project?)")) {
			window.close();
		}
	};

	CopyToClipboardhandler = async () => {
		const editorInstance = this.editorRef.current.getInstance();
		/*
		navigator.clipboard.write([new ClipboardItem({ 'image/png': editorInstance.toDataURL() })]).then(
			function () {
				console.log("success");
			},
			function (err) {
				console.log("failure: ", err);
			}
		);
		*/
		const blob = await (await fetch(editorInstance.toDataURL())).blob();
		try {
			const clipboardItem = new ClipboardItem({ [blob]: "image/png" });
			await navigator.clipboard.write([clipboardItem]);
			alert("클립보드에 이미지가 복사되었습니다!\n(Successfully copied image to clipboard!)");
		} catch (err) {
			try {
				const image = new File([blob], "image.png", { type: "image/png" });
				const clipboardItem2 = new ClipboardItem({ "image/png": image });
				await navigator.clipboard.write([clipboardItem2]);
				alert("클립보드에 이미지가 복사되었습니다!\n(Successfully copied image to clipboard!)");
			} catch (err2) {
				alert(
					"클립보드로의 이미지 복사에 실패했습니다.\n브라우저가 해당 기능을 지원하지 않습니다.\n(Failed to copy image to clipboard. This browser doesn't support this feature.)"
				);
			}
		}
	};

	ExportToTwitterHandler = async () => {
		const editorInstance = this.editorRef.current.getInstance();
		const blob = await (await fetch(editorInstance.toDataURL())).blob();
		const imageURL = URL.createObjectURL(blob);
		window.open(`https://twitter.com/intent/tweet?text=Check out this image!&url=${imageURL}`);
	};

	SelectAllHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		this.setState({ selectActivated: !this.state.selectActivated, selectModeActivated: !this.state.selectModeActivated }, () => {
			console.log(this.state.selectActivated);
			console.log(this.state.selectModeActivated);
			if (this.state.selectActivated) {
				editorInstance.changeSelectableAll(true);
			} else {
				editorInstance.changeSelectableAll(false);
			}
		});
	};

	DeSelectHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.deactivateAll();
	};

	FilterPreset1 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		this.setState({ filter_preset_1: !this.state.filter_preset_1 }, () => {
			if (this.state.filter_preset_1) {
				editorInstance.applyFilter("Grayscale");
			} else {
				editorInstance.removeFilter("Grayscale");
			}
		});
	};

	FilterPreset2 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		this.setState({ filter_preset_2: !this.state.filter_preset_2 }, () => {
			if (this.state.filter_preset_2) {
				editorInstance.applyFilter("Sepia");
			} else {
				editorInstance.removeFilter("Sepia");
			}
		});
	};

	FilterPreset3 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		this.setState({ filter_preset_3: !this.state.filter_preset_3 }, () => {
			if (this.state.filter_preset_3) {
				editorInstance.applyFilter("Emboss");
			} else {
				editorInstance.removeFilter("Emboss");
			}
		});
	};

	FilterPreset4 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		this.setState({ filter_preset_4: !this.state.filter_preset_4 }, () => {
			if (this.state.filter_preset_4) {
				editorInstance.applyFilter("Invert");
			} else {
				editorInstance.removeFilter("Invert");
			}
		});
	};

	ChangeRecommend = () => {
		this.setState({ recommend_image_Activated: !this.state.recommend_image_Activated });
	};

	AddRecommendImage = (url) => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.loadImageFromURL(url, "RecommendImage");
	};

	render() {
		return (
			<div>
				<MenuTop
					ImageUploadHandler={this.ImageUploadHandler}
					DownloadHandler={this.DownloadHandler}
					/*ExportToTwitterHandler={this.ExportToTwitterHandler}*/
					ProjectExitHandler={this.ProjectExitHandler}
					UndoHandler={this.UndoHandler}
					RedoHandler={this.RedoHandler}
					SelectAllHandler={this.SelectAllHandler}
					DeSelectHandler={this.DeSelectHandler}
					CopyToClipboardhandler={this.CopyToClipboardhandler}
					FilterPreset1={this.FilterPreset1}
					FilterPreset2={this.FilterPreset2}
					FilterPreset3={this.FilterPreset3}
					FilterPreset4={this.FilterPreset4}
					FilterHandler={this.FilterHandler}
					ZoomInHandler={this.ZoomInHandler}
					ZoomOutHandler={this.ZoomOutHandler}
					ResetZoomHandler={this.ResetZoomHandler}
					FlipXHandler={this.FlipXHandler}
					FlipYHandler={this.FlipYHandler}
					ResetFlip={this.ResetFlip}
					selectModeActivated={this.state.selectModeActivated}
					filter_preset_1={this.state.filter_preset_1}
					filter_preset_2={this.state.filter_preset_2}
					filter_preset_3={this.state.filter_preset_3}
					filter_preset_4={this.state.filter_preset_4}
					recommend_image_Activated={this.state.recommend_image_Activated}
					ChangeRecommend={this.ChangeRecommend}
				/>
				<input type="file" id="ImageUploader" onChange={this.ImageChangeHandler} style={{ display: "none" }} />
				<div className="ToolBoxAndCanvasWrapper">
					<div className="ToolBox">
						<div className="ToolBoxButton" title="돋보기 (Extension)" onClick={this.MoveHandler}>
							<IoSearch size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="실행 취소 (Undo)" onClick={this.UndoHandler}>
							<MdOutlineUndo size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="다시 실행 (Redo)" onClick={this.RedoHandler}>
							<MdOutlineRedo size={"1.5rem"} />
							<br />
						</div>
						<hr />
						<div className="ToolBoxButton" title="선택한 오브젝트 제거 (Remove selected object)" onClick={this.RemoveActiveObjectHandler}>
							<MdDeleteOutline size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton important" title="오브젝트 모두 제거 (Remove ALL object)" onClick={this.ClearObjectsHandler}>
							<MdRestartAlt size={"1.5rem"} />
							<br />
						</div>
						<hr />
						<div className="ToolBoxButton" title="자르기 (Crop)" onClick={this.CropHandler}>
							<MdCrop size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="뒤집기 (Flip)" onClick={this.FlipHandler}>
							<MdFlip size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="회전 (Rotate)" onClick={this.RotateHandler}>
							<MdRotate90DegreesCcw size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="크기 재설정(Resize)" onClick={this.ResizeHandler}>
							<IoResize size={"1.5rem"} />
							<br />
						</div>
						<hr />
						<div className="ToolBoxButton" title="선 그리기 (Draw line)" onClick={this.DrawHandler}>
							<MdDraw size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="도형 그리기 (Draw shape)" onClick={this.ShapeDrawHandler}>
							<MdOutlineCategory size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="아이콘 삽입 (Add icon)" onClick={this.IconDrawHandler}>
							<MdOutlineInsertEmoticon size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="텍스트 삽입 (Add text)" onClick={this.TextInputHandler}>
							<MdOutlineTextFields size={"1.5rem"} />
							<br />
						</div>
						<hr />
						<div className="ToolBoxButton" title="워터마크 (Watermark)" onClick={this.WaterMarkHandler}>
							<MdOutlineBrandingWatermark size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="필터 (Filter)" onClick={this.FilterHandler}>
							<MdPhotoFilter size={"1.5rem"} />
							<br />
						</div>
						<hr />
						<div className="ToolBoxButton" title="확대 (Zoom in)" onClick={this.ZoomInHandler}>
							<MdOutlineZoomIn size={"1.5rem"} />
							<br />
						</div>
						<div className="ToolBoxButton" title="축소 (Zoom out)" onClick={this.ZoomOutHandler}>
							<MdOutlineZoomOut size={"1.5rem"} />
							<br />
						</div>
					</div>
					<div className="ImageEditorWrapper" style={{ float: "left" }}>
						<>
							<TransformWrapper ref={this.handRef} disabled={!this.state.handActivated} panning={{ disabled: !this.state.handActivated }}>
								<TransformComponent>
									<ImageEditor ref={this.editorRef} {...imageEditorOptions} />
								</TransformComponent>
							</TransformWrapper>
						</>
					</div>
					{this.state.recommend_image_Activated ? (
						<RecommendImage
							AddRecommendImage={(url) => this.AddRecommendImage(url)}
							recommend_image_Activated={this.state.recommend_image_Activated}
						/>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default ToolBoxAndCanvas;
