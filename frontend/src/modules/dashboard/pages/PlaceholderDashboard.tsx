import React from "react";
import ConstructionIcon from "../../../assets/icons/construction.svg";
import "../styles/placeholderDashboard.css";

const PlaceholderDashboard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <img src={ConstructionIcon} alt="Under construction" />
          <span>under contruction!!</span>
        </div>
      </div>
    </>
  );
};

export default PlaceholderDashboard;
