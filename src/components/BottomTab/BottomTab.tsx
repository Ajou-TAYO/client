import React from "react";
import "./BottomTab.css";

// eslint-disable-next-line react/function-component-definition
const BottomTab: React.FC = () => {
    return (
        <nav>
            <div>Home</div> {/* 텍스트 대신 페이지 링크된 버튼 추가 */}
            <div>Bus Map</div>
            <div>Alliance Map</div>
            <div>Ajou Map</div>
            <div>MyProfile</div>
        </nav>
    );
};

export default BottomTab;
