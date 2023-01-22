import React, { Component, useState } from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import { SketchPicker } from "react-color";
import "tui-color-picker/dist/tui-color-picker.css";
import MenuTop from "./Menu_top";

// 스타일시트 파일
import "../stylesheet/ToolBox_left.scss";
import "../stylesheet/Canvas.scss";

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
	MdOutlineFileUpload,
	MdOutlineCheck,
	/*MdOutlineDoDisturbAlt,*/
} from "react-icons/md";
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";
import { RxReset } from "react-icons/rx";
import { IoResize } from "react-icons/io5";
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
		cursor_xpos: 0,
		cursor_ypos: 0,
		waterMarkActivated: false,
		imageId: 0,
		brushColorActivated: false,
		shapeColorActivated: false,
		brushColor: "#000000",
		shapeColor: "#000000",
	};
	constructor(props) {
		super(props);
		this.state = {
			clicked_button: 0,
			menu_file_activated: false,
			flip_activated: false,
			text_activated: false,
			cursor_xpos: 0,
			cursor_ypos: 0,
			zoomLvl: 1,
		};
		this.CursorDownHandler = this.CursorDownHandler.bind(this);
	}

	editorRef = React.createRef();
	fileInput = React.createRef();
	BcolorRef = React.createRef();
	IcolorRef = React.createRef();

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

	CursorDownHandler = (event) => {
		// 커서 클릭 이벤트 핸들러
		/*
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.on("mousedown", function (event, originPointer) {
			console.log(originPointer);
			this.setState({
				cursor_xpos: parseInt(originPointer.x, 10),
				cursor_ypos: parseInt(originPointer.y, 10),
			});
		});
		*/
	};

	ZoomInHandler = () => {
		if (this.state.zoomLvl < 5) {
			this.setState({ zoomLvl: this.state.zoomLvl + 1 }, () => {
				const editorInstance = this.editorRef.current.getInstance();
				editorInstance.zoom({ x: 500, y: 500, zoomLevel: this.state.zoomLvl });
			});
		}
	};

	ZoomOutHandler = () => {
		if (this.state.zoomLvl > 1) {
			this.setState({ zoomLvl: this.state.zoomLvl - 1 }, () => {
				const editorInstance = this.editorRef.current.getInstance();
				editorInstance.zoom({ x: 500, y: 500, zoomLevel: this.state.zoomLvl });
			});
		}
	};

	ResetZoomHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.resetZoom();
	};

	MoveHandler = () => {
		//기능 안됨
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.ui.toggleZoomButtonStatus("hand");
	};

	WaterMarkHandler = (e) => {
		let file = e.target.files[0];
		const editorInstance = this.editorRef.current.getInstance();
		let imgUrl = URL.createObjectURL(file);
		editorInstance.addImageObject(imgUrl).then((objectProps) => {
			this.setState({ imageId: objectProps.id });
		});
	};

	WaterMarkApply = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.applyFilter("mask", { maskObjId: this.state.imageId }, false);
	};

	SetBrushColor = (color) => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.setBrush({ width: 8, color: color.hex });
		this.BcolorRef.current.style.background = color.hex;
	};

	SetShapeColor = (color) => {
		//const editorInstance = this.editorRef.current.getInstance();
		this.IcolorRef.current.style.background = color.hex;
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
		} catch (err) {
			try {
				const image = new File([blob], "image.png", { type: "image/png" });
				const clipboardItem2 = new ClipboardItem({ "image/png": image });
				await navigator.clipboard.write([clipboardItem2]);
			} catch (err2) {
				console.error("[!] Failed to copy image: ", err2);
			}
		}
	};

	SelectAllHandler = () => {
		/* 동작 안됨 */
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.changeSelectableAll(true);
	};

	DeSelectHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.deactivateAll();
	};

	FilterPreset1 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.applyFilter("Grayscale");
	};

	FilterPreset2 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.applyFilter("Sepia");
	};

	FilterPreset3 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.applyFilter("Emboss");
	};

	FilterPreset4 = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.applyFilter("Invert");
	};

	render() {
		const { flipActivated, waterMarkActivated, brushColorActivated, shapeColorActivated } = this.state;
		return (
			<div>
				<MenuTop
					ImageUploadHandler={this.ImageUploadHandler}
					DownloadHandler={this.DownloadHandler}
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
				/>
				<input type="file" id="ImageUploader" onChange={this.ImageChangeHandler} style={{ display: "none" }} />
				<div className="ToolBoxAndCanvasWrapper">
					<div className="ToolBox">
						<div className="ToolBoxButton wip" title="이동 (Move)" onClick={this.HandHandler}>
							<MdOutlineBackHand size={"1.5rem"} />
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
						<div
							className="ToolBoxButton"
							title="워터마크 (Watermark)"
							onClick={() => {
								this.setState({
									waterMarkActivated: !this.state.waterMarkActivated,
								});
							}}>
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
						<hr />
						<div
							className="BrushColor Detail"
							ref={this.BcolorRef}
							title="Brush Color"
							onClick={() => {
								this.setState({
									brushColorActivated: !this.state.brushColorActivated,
								});
							}}
						/>
						<div
							className="IconColor Detail"
							ref={this.IcolorRef}
							title="Icon Color"
							onClick={() => {
								this.setState({
									shapeColorActivated: !this.state.shapeColorActivated,
								});
							}}
						/>
					</div>
					<div className="ImageEditorWrapper" style={{ float: "left" }}>
						<ImageEditor ref={this.editorRef} {...imageEditorOptions} />
						{flipActivated ? <FlipDetail FlipXHandler={this.FlipXHandler} FlipYHandler={this.FlipYHandler} ResetFlip={this.ResetFlip} /> : null}
						{waterMarkActivated ? (
							<WaterMarkDetail
								WaterMarkHandler={this.WaterMarkHandler}
								fileInput={this.fileInput}
								handleButtonClick={this.handleButtonClick}
								WaterMarkApply={this.WaterMarkApply}
							/>
						) : null}
						{brushColorActivated ? <BrushColorDetail brushColor={this.state.brushColor} SetBrushColor={this.SetBrushColor} /> : null}
						{shapeColorActivated ? <ShapeColorDetail shapeColor={this.state.shapeColor} SetShapeColor={this.SetShapeColor} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

function FlipDetail(props) {
	return (
		<div className="DetailIcon">
			<CgEditFlipH className="Detail" size={"4rem"} title="X축 방향 뒤집기 (flip X)" onClick={props.FlipXHandler} />
			<CgEditFlipV className="Detail" size={"4rem"} title="Y축 방향 뒤집기 (flip Y)" onClick={props.FlipYHandler} />
			<RxReset className="Detail" size={"4rem"} title="되돌리기 (Reset)" onClick={props.ResetFlip} />
		</div>
	);
}

function WaterMarkDetail(props) {
	return (
		<div className="DetailIcon">
			<MdOutlineFileUpload className="Detail" size={"4rem"} title="파일 업로드 (Upload)" onClick={props.handleButtonClick} />
			<input type="file" ref={props.fileInput} style={{ display: "none" }} onChange={props.WaterMarkHandler} />
			<MdOutlineCheck className="Detail" size={"4rem"} title="적용 (Apply)" onClick={props.WaterMarkApply} />
		</div>
	);
}
function BrushColorDetail(props) {
	return (
		<div className="BrushColorPicker">
			<SketchPicker color={props.brushColor} onChange={props.SetBrushColor} />
		</div>
	);
}
function ShapeColorDetail(props) {
	return (
		<div className="IconColorPicker">
			<SketchPicker color={props.shapeColor} onChange={props.SetShapeColor} />
		</div>
	);
}
export default ToolBoxAndCanvas;
