import React from "react";
import "./navigationBarRoute.css";
import { Link, useLocation } from "react-router-dom";

/*-----------------------------------------------------------------------------------------*/

interface NavigationBarRouteProps {
  label: string;
  icon: string;
  route: string;
  onClick?: () => void;
}

const NavigationBarRoute: React.FC<NavigationBarRouteProps> = ({
  label,
  icon,
  route,
  onClick,
}) => {
  const location = useLocation();
  const isActive = location.pathname === `/${route}`;
  const isRootActive = location.pathname === "/dashboard" && route === "/dashboard";
  const isCurrentActive = isActive || isRootActive;
  const className = `navbar-route-wrapper ${isCurrentActive ? "active" : ""}`;
  return (
    <>
      <Link to={route} className={className} onClick={onClick}>
        <div className="navbar-route-container">
          <img src={icon} alt={label + " icon"} />
          <span>{label}</span>
        </div>
      </Link>
    </>
  );
};

export default NavigationBarRoute;
