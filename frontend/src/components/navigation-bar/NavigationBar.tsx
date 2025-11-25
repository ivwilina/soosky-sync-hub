import React from "react";
import NavigationBarRoute from "./NavigationBarRoute";
import "./navigationBar.css";

/*-----------------------------------------------------------------------------------------*/

import HomeRouteIcon from "../../assets/icons/home.svg";
import QnARouteIcon from "../../assets/icons/qna.svg";
import MenuRouteIcon from "../../assets/icons/menu.svg";
import ProfileRouteIcon from "../../assets/icons/profile.svg";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-routes">
            <NavigationBarRoute label="home" icon={HomeRouteIcon} route="#" />
            <NavigationBarRoute label="q&a" icon={QnARouteIcon} route="#" />
            <NavigationBarRoute label="menu" icon={MenuRouteIcon} route="#" />
          </div>
          <div className="navbar-routes">
            <NavigationBarRoute label="profile" icon={ProfileRouteIcon} route="#" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
