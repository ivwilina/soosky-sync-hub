import React from "react";
import ConstructionIcon from "../../../assets/icons/construction.svg";
import "../styles/placeholderDashboard.css";
import { useAuth } from "../../../contexts/auth/useAuth";

const PlaceholderDashboard = () => {
  const {userRole} = useAuth();

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <img src={ConstructionIcon} alt="Under construction" />
          <span>hello {userRole}!</span>
          <span>this site is under contruction!!</span>
        </div>
      </div>
    </>
  );
};

export default PlaceholderDashboard;
