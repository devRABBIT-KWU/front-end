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
} from "react-icons/md"

const imageEditorOptions = {
    // 에디터 옵션 설정...
    includeUI: {
        loadImage: {
          path: 'https://pbs.twimg.com/media/Fl3bm3WacAI0477?format=jpg&name=medium',
          name: 'SampleImage',
        },
        uiSize: {
          width: '90vw',
          height: '90vh',
        },
      },
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70,
      },
      usageStatistics: true,
};

class ToolBoxAndCanvas extends Component {
    state = {
        clickedButton: 0,
        fileMenuActivated: false
    };

    editorRef = React.createRef();

    UndoHandler = () => {  // 실행취소 (Undo)
        const editorInstance = this.editorRef.current.getInstance();
        editorInstance.undo(); 
    }

    ClearObjectsHandler = () => {
        const editorInstance = this.editorRef.current.getInstance();
        editorInstance.clearObjects(); 
    }

    TextInputHandler = () => {  // 텍스트 삽입 (Add text)
        const editorInstance = this.editorRef.current.getInstance();
        editorInstance.addText('Sample Text');
    }

    CursorDownHandler = () => {
        // 커서 클릭 이벤트 핸들러
    }

    render(){
        return(
            <div className="ToolBoxAndCanvasWrapper">
                <div className="ToolBox">
                    <div className="ToolBoxButton" title="실행 취소 (Undo)" onClick={this.UndoHandler}>
                        <MdOutlineUndo size={"1.5rem"}/><br />
                    </div>
                    <div className="ToolBoxButton" title="다시 실행 (Redo)" onClick={this}>
                        <MdOutlineRedo size={"1.5rem"} /><br />
                    </div>
                    <hr />
                    <div className="ToolBoxButton" title="선택한 오브젝트 초기화 (Reset selected object)" onClick={this}>
                        <MdRestartAlt size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="선택한 오브젝트 제거 (Remove selected object)" onClick={this}>
                        <MdDeleteOutline size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton important" title="오브젝트 모두 제거 (Remove ALL object)" onClick={this.ClearObjectsHandler}>
                        <MdDeleteOutline size={"1.5rem"} /><br />
                    </div>
                    <hr />
                    <div className="ToolBoxButton" title="자르기 (Crop)" onClick={this}>
                        <MdCrop size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="뒤집기 (Flip)" onClick={this}>
                        <MdFlip size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="회전 (Rotate)" onClick={this}>
                        <MdRotate90DegreesCcw size={"1.5rem"} /><br />
                    </div>
                    <hr />
                    <div className="ToolBoxButton" title="선 그리기 (Draw line)" onClick={this}>
                        <MdDraw size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="도형 그리기 (Draw shape)" onClick={this}>
                        <MdOutlineCategory size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="아이콘 삽입 (Add icon)" onClick={this}>
                        <MdOutlineInsertEmoticon size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="텍스트 삽입 (Add text)" onClick={this.TextInputHandler}>
                        <MdOutlineTextFields size={"1.5rem"} /><br />
                    </div>
                    <hr />
                    <div className="ToolBoxButton" title="워터마크 (Watermark)" onClick={this}>
                        <MdOutlineBrandingWatermark size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="필터 (Filter)" onClick={this}>
                        <MdPhotoFilter size={"1.5rem"} /><br />
                    </div>
                    <hr />
                    <div className="ToolBoxButton" title="이동 (Move)" onClick={this}>
                        <MdOutlineBackHand size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="확대 (Zoom in)" onClick={this}>
                        <MdOutlineZoomIn size={"1.5rem"} /><br />
                    </div>
                    <div className="ToolBoxButton" title="축소 (Zoom out)" onClick={this}>
                        <MdOutlineZoomOut size={"1.5rem"} /><br />
                    </div>
                    <hr />
                    <div className="ForegroundColor" />
                    <div className="BackgroundColor" />
                </div>
                <div className="ImageEditorWrapper" style={{float: "left"}}>
                    <ImageEditor
                        ref={this.editorRef} {...imageEditorOptions}
                    />
                </div>
            </div>
        );
    }
}

export default ToolBoxAndCanvas;