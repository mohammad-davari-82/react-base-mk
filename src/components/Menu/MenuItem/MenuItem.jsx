import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import Navbar from '../Navbar/Navbar'

import { BrowserView, MobileView,} from 'react-device-detect';

const MenuView = () => {
  return(
    <>
        <BrowserView>
            <Navbar />
        </BrowserView>
        <MobileView>
            <FooterMenu />
        </MobileView>
    </>
  );
};


export default MenuView;