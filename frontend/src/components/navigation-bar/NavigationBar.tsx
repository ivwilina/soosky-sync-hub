import NavigationBarRoute from "./NavigationBarRoute";
import "./navigationBar.css";

/*-----------------------------------------------------------------------------------------*/

import HomeRouteIcon from "../../assets/icons/home.svg";
import QnARouteIcon from "../../assets/icons/qna.svg";
import MenuRouteIcon from "../../assets/icons/menu.svg";
import ProfileRouteIcon from "../../assets/icons/profile.svg";
import { useAuth } from "../../contexts/auth/useAuth";

const NavigationBar = () => {
  const {logout} = useAuth();
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-routes">
            <NavigationBarRoute label="home" icon={HomeRouteIcon} route="dashboard" />
            <NavigationBarRoute label="q&a" icon={QnARouteIcon} route="incognito-letter" />
            <NavigationBarRoute label="menu" icon={MenuRouteIcon} route="#" />
          </div>
          <div className="navbar-routes">
            <NavigationBarRoute label="profile" icon={ProfileRouteIcon} route="#" onClick={logout}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
