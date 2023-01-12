import React, { Component } from "react";
import ImageEditor from "@toast-ui/react-image-editor";

// 스타일시트 파일
import "../stylesheet/ToolBox_left.scss";
import "../stylesheet/Canvas.scss";

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
import { CgEditFlipH, CgEditFlipV, CgRowFirst } from "react-icons/cg";
import { Container, Row, Col } from "react-bootstrap";

const imageEditorOptions = {
	// 에디터 옵션 설정...
	includeUI: {
		loadImage: {
			path: "https://pbs.twimg.com/media/Fl3bm3WacAI0477?format=jpg&name=medium",
			name: "SampleImage",
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
	constructor(props) {
		super(props);

		this.state = {
			clicked_button: 0,
			menu_file_activated: false,
			flip_activated: false,
			text_activated: false,
			cursor_xpos: 0,
			cursor_ypos: 0,
		};

		this.CursorDownHandler = this.CursorDownHandler.bind(this);
	}

	editorRef = React.createRef();

	HandHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.hand();
	}

	UndoHandler = () => {
		// 실행 취소
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.undo();
	};

	RedoHandler = () => {
		// 다시 실행
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
		editorInstance.startDrawingMode("CROPPER");

		editorInstance.crop(editorInstance.getCropzoneRect()).then(function () {
			editorInstance.stopDrawingMode();
			//resizeEditor();
		});
	};

	FlipHandler = () => {
		// 뒤집기 (하위 메뉴 호출)
		this.setState({ flip_activated: !this.state.flip_activated });
	};

	FlipXHandler = () => {
		// 뒤집기 하위 메뉴: 가로로 뒤집기
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.flipX();
	};

	FlipYHandler = () => {
		// 뒤집기 하위 메뉴: 세로로 뒤집기
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.flipY();
	};

	ResetFlip = () => {
		// 뒤집기 하위 메뉴: 뒤집기 취소
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.resetFlip();
	};
	
	RotateHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.rotate(-90);
	}

	DrawHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.draw();
	};

	TextInputHandler = () => {
		// 텍스트 삽입
		if (this.state.text_activated === false) {
			alert("!");
			const editorInstance = this.editorRef.current.getInstance();
			editorInstance.addText("Sample Text");
		}
		this.setState({text_activated: !this.state.text_activated});
	};

	FilterHandler = () => {
		// 필터
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.applyFilter();
	};

	CursorDownHandler = (event) => {
		// 커서 클릭 이벤트 핸들러
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.on("mousedown", function (event, originPointer) {
			console.log(originPointer);
			this.setState({
				cursor_xpos: parseInt(originPointer.x, 10),
				cursor_ypos: parseInt(originPointer.y, 10),
			});
		});
	};

	ZoomInHandler = () => {
		const editorInstance = this.editorRef.current.getInstance();
		editorInstance.zoom(this.cursor_xpos, this.cursor_ypos);
	};

	render() {
		const { flip_activated: flipActivated } = this.state;
		return (
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
					<div className="ToolBoxButton wip" title="자르기 (Crop)" onClick={this.CropHandler}>
						<MdCrop size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton" title="뒤집기 (Flip)" onClick={this.FlipHandler}>
						<MdFlip size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton" title="회전 (Rotate)" onClick={this.RotateHandler} >
						<MdRotate90DegreesCcw size={"1.5rem"} />
						<br />
					</div>
					<hr />
					<div className="ToolBoxButton wip" title="선 그리기 (Draw line)" onClick={this.DrawHandler}>
						<MdDraw size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton wip" title="도형 그리기 (Draw shape)">
						<MdOutlineCategory size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton wip" title="아이콘 삽입 (Add icon)">
						<MdOutlineInsertEmoticon size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton" title="텍스트 삽입 (Add text)" onClick={this.TextInputHandler}>
						<MdOutlineTextFields size={"1.5rem"} />
						<br />
					</div>
					<hr />
					<div className="ToolBoxButton wip" title="워터마크 (Watermark)">
						<MdOutlineBrandingWatermark size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton wip" title="필터 (Filter)" onClick={this.FilterHandler}>
						<MdPhotoFilter size={"1.5rem"} />
						<br />
					</div>
					<hr />
					<div className="ToolBoxButton wip" title="확대 (Zoom in)" onClick={this.ZoomInHandler}>
						<MdOutlineZoomIn size={"1.5rem"} />
						<br />
					</div>
					<div className="ToolBoxButton wip" title="축소 (Zoom out)">
						<MdOutlineZoomOut size={"1.5rem"} />
						<br />
					</div>
					<hr />
					<div className="ForegroundColor" />
					<div className="BackgroundColor" />
				</div>
				<div className="ImageEditorWrapper" style={{ float: "left" }}>
					<ImageEditor ref={this.editorRef} {...imageEditorOptions} />
					{flipActivated ? <FlipDetail FlipXHandler={this.FlipXHandler} FlipYHandler={this.FlipYHandler} ResetFlip={this.ResetFlip} /> : null}
				</div>
			</div>
		);
	}
}

function FlipDetail(props) {
	return (
		<div className="Modal">
			<CgEditFlipH className="Detail" size={"4rem"} title="X축 방향 뒤집기 (flip X)" onClick={props.FlipXHandler} />
			<CgEditFlipV className="Detail" size={"4rem"} title="Y축 방향 뒤집기 (flip Y)" onClick={props.FlipYHandler} />
			<MdRestartAlt className="Detail" size={"4rem"} title="되돌리기 (Reset)" onClick={props.ResetFlip} />
		</div>
	);
}

export default ToolBoxAndCanvas;
