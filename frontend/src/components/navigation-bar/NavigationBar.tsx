import NavigationBarRoute from "./NavigationBarRoute";
import "./navigationBar.css";

/*-----------------------------------------------------------------------------------------*/

import HomeRouteIcon from "../../assets/icons/home.svg";
import QnARouteIcon from "../../assets/icons/qna.svg";
import ProfileRouteIcon from "../../assets/icons/profile.svg";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-routes">
            <NavigationBarRoute label="home" icon={HomeRouteIcon} route="dashboard" />
            <NavigationBarRoute label="q&a" icon={QnARouteIcon} route="incognito-letter" />
          </div>
          <div className="navbar-routes">
            <NavigationBarRoute label="profile" icon={ProfileRouteIcon} route="profile"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
