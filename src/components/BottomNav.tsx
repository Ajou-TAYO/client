import React from "react";
import { Link } from "react-router-dom";
import "./BottomNav.css";

const BottomTab: React.FC = () => {
    return (
        <nav>
          <div><Link to="/">Home</Link></div> {/* 텍스트 대신 페이지 링크된 버튼 추가 */}
          <div><Link to="/bus">Bus Map</Link></div>
          <div><Link to="/aliance">Alliance Map</Link></div>
          <div><Link to="/">Ajou Map</Link></div>
          <div><Link to="/">MyProfile</Link></div>
        </nav>
    );
};

export default BottomTab;