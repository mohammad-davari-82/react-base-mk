import './Header.css';
import React from "react";
import {useLocation} from 'react-router-dom'
import MenuItem from "../Menu/MenuItem/MenuItem";

const Header = () => {
    let location = useLocation();
    const menus = [
        {
          to: "/",
          key:"shop",
          title:"Shop",
        },
        {
          key:"blog",
          to: "/blog",
          title:"Blog",
        },
        {
          key:"more",
          to: "/more",
          title:"More",
        
        },
    ]
return(
    <div className="Header">
        <MenuItem/>
        <h3>{location.pathname }</h3>
    </div>
)
    
}

export default Header;