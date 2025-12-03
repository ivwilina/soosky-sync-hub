import React from 'react'
import "./navigationBarRoute.css";
import { Link } from 'react-router-dom';

/*-----------------------------------------------------------------------------------------*/

interface NavigationBarRoute {
  label: string;
  icon: string;
  route: string;
  onClick?: () => void;
}


const NavigationBarRoute:React.FC<NavigationBarRoute> = ({label, icon, route, onClick}) => {
  return (
    <>
      <Link to={route} className="navbar-route-wrapper" onClick={onClick}>
        <div className="navbar-route-container">
          <img src={icon} alt={label + " icon"} />
          <span>{label}</span>
        </div>
      </Link>
    </>
  )
}

export default NavigationBarRoute