import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const menu = [
    {
      to: "/",
      key:"shop",
      title:"Shop"
    },
    {
      to: "/blog",
      key:"blog",
      title:"Blog"
    },
    {
      to: "/about",
      key:"about",
      title:"About"
    },
    {
      to: "/contact",
      key:"contact",
      title:"Contact"
    },

  ];
  
  return(
      <nav key={menu.key} className="navbar navbar-expand-lg navbar-light bg-light">
        <div  className="container-fluid">
           <ul className="navbar-nav float-left">
              {menu.map((item) => ( 
                <Link className="link" to={item.to}>
                <li className="nav-item">
                 <div className="nav-link" >
                    {item.title}
                 </div>
                </li>
                </Link>
              ))}
           </ul>
          </div>
      </nav>
  );
};


export default Navbar