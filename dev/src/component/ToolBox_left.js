// 스타일시트 파일
import "../stylesheet/ToolBox_left.scss";

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

const ToolBox_left = (is_detail_setting_required) => {
    return(
        <div className="ToolBox">
            <div className="ToolBoxButton" title="실행 취소 (Undo)">
                <MdOutlineUndo size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="다시 실행 (Redo)">
                <MdOutlineRedo size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="선택한 오브젝트 초기화 (Reset selected object)">
                <MdRestartAlt size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="선택한 오브젝트 제거 (Remove selected object)">
                <MdDeleteOutline size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="자르기 (Crop)">
                <MdCrop size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="뒤집기 (Flip)">
                <MdFlip size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="회전 (Rotate)">
                <MdRotate90DegreesCcw size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="선 그리기 (Draw line)">
                <MdDraw size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="도형 그리기 (Draw shape)">
                <MdOutlineCategory size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="아이콘 삽입 (Add icon)">
                <MdOutlineInsertEmoticon size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="텍스트 삽입 (Add text)">
                <MdOutlineTextFields size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="워터마크 (Watermark)">
                <MdOutlineBrandingWatermark size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="필터 (Filter)">
                <MdPhotoFilter size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="이동 (Move)">
                <MdOutlineBackHand size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="확대 (Zoom in)">
                <MdOutlineZoomIn size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="축소 (Zoom out)">
                <MdOutlineZoomOut size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ForegroundColor" />
            <div className="BackgroundColor" />
        </div>
    );
}

export default ToolBox_left;