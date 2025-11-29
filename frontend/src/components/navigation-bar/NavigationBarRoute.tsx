import React from 'react'
import "./navigationBarRoute.css";
import { Link } from 'react-router-dom';

/*-----------------------------------------------------------------------------------------*/

interface NavigationBarRoute {
  label: string;
  icon: string;
  route: string;
}


const NavigationBarRoute:React.FC<NavigationBarRoute> = ({label, icon, route}) => {
  return (
    <>
      <Link to={route} className="navbar-route-wrapper">
        <div className="navbar-route-container">
          <img src={icon} alt={label + " icon"} />
          <span>{label}</span>
        </div>
      </Link>
    </>
  )
}

export default NavigationBarRoute