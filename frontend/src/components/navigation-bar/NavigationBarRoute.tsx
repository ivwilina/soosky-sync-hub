import React from 'react'
import "./navigationBarRoute.css";

/*-----------------------------------------------------------------------------------------*/

interface NavigationBarRoute {
  label: string;
  icon: string;
  route: string;
}


const NavigationBarRoute:React.FC<NavigationBarRoute> = ({label, icon}) => {
  return (
    <>
      <div className="navbar-route-wrapper">
        <div className="navbar-route-container">
          <img src={icon} alt={label + " icon"} />
          <span>{label}</span>
        </div>
      </div>
    </>
  )
}

export default NavigationBarRoute