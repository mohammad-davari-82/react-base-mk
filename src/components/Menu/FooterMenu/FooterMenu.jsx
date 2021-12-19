import React, { useState , useEffect} from 'react'
import "./FooterMenu.css";

import {  Col, Row } from "antd";
import { Link ,  useLocation} from 'react-router-dom'
import {ShopOutlined , ReadOutlined , MoreOutlined} from "@ant-design/icons";




const iconStyle = { fontSize: "22px", justifyContent: "center" , color:"#211717" };
const FooterMenu = () => {
  useEffect(() => {
    if (location && location.pathname) {
      const key =location.pathname.replace("/", "");
      setCurrent(key == "" ? menus[0].key : key);
    }
  });


  const location = useLocation();
  const menus = [
    {
      to: "/",
      key:"shop",
      title:"Shop",
      isActive:true,
      icon:<ShopOutlined style={iconStyle} />
    },
    {
      key:"blog",
      to: "/blog",
      title:"Blog",
      isActive:false,
      icon: <ReadOutlined style={iconStyle} />,

    },
    {
      key:"more",
      to: "/more",
      title:"More",
      isActive:false,
      icon: <MoreOutlined style={iconStyle} />,
    },
   

  ];
  const [current, setCurrent] = useState(menus[0].key);

  const menuElements = menus.map((menu) => {
    return (
      <Col key={menu.key} span={4} justify="center" align="middle">
        <div
          style={{
            display: "inline-block",
            paddingBottom: "8px",
            paddingTop: "8px",
          }}
        >
          <Link to={menu.to} className={menu.key == current ? "isActive" : ""}>
            <div>
              {menu.icon ?? <div style={{ iconStyle }}>{menu.textIcon}</div>}
            </div>
            <div>{menu.title}</div>
          </Link>
        </div>
      </Col>
    );
  });

  return <Row className="footer fixed-bottom shadow-lg">{menuElements}</Row>;
};



export default FooterMenu;