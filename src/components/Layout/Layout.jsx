import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserView , MobileView } from "react-device-detect";
const Layout = ({children}) => {
  const mobileView = (<div className="Layout"><Header/>{children}</div>);
  const webView = (<div className="Layout"><Header/>{children}<Footer/></div>)

  return (
    <>
      <BrowserView>{webView}</BrowserView>
      <MobileView>{mobileView}</MobileView>
    </>
  );
}

export default Layout;