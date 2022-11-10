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
    MdOutlineDoDisturbAlt,
} from "react-icons/md"

const ToolBox_left = (is_detail_setting_required) => {
    return(
        <div className="ToolBox">
            <div className="ToolBoxButton" title="실행 취소">
                <MdOutlineUndo size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="다시 실행">
                <MdOutlineRedo size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="선택한 오브젝트 초기화">
                <MdRestartAlt size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="선택한 오브젝트 제거">
                <MdDeleteOutline size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="자르기">
                <MdCrop size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="뒤집기">
                <MdFlip size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="회전">
                <MdRotate90DegreesCcw size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="선 그리기">
                <MdDraw size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="도형 그리기">
                <MdOutlineCategory size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="아이콘 삽입">
                <MdOutlineInsertEmoticon size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="텍스트 삽입">
                <MdOutlineTextFields size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="워터마크">
                <MdOutlineBrandingWatermark size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="필터">
                <MdPhotoFilter size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ToolBoxButton" title="이동">
                <MdOutlineBackHand size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="확대">
                <MdOutlineZoomIn size={"1.5rem"} /><br />
            </div>
            <div className="ToolBoxButton" title="축소">
                <MdOutlineZoomOut size={"1.5rem"} /><br />
            </div>
            <hr />
            <div className="ForegroundColor" />
            <div className="BackgroundColor" />
        </div>
    );
}

export default ToolBox_left;