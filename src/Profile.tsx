import { Fragment, useState } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Favorite, Settings } from '@material-ui/icons';
import "./Profile.css";

function Profile() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="profileBox">
                <div className="profileImage" src="./profileImage.jpg" alt="profileImage"></div>
                <div className="title">김나영</div>
                <div className="subtitle">버스의 신</div>
            </div>
            <div>
                <div className="line"></div>
                <div className="listTitle">계정</div>
                <div className="line"></div>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
                <button className="listButton">비밀번호 변경</button>
            </div>
            <BottomNavigation className="bottomBar" value={value} onChange={handleChange}>
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Settings" icon={<Settings />} />
            </BottomNavigation>
        </div>
    );
}

export default Profile;