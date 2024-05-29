import React, { useEffect, useState } from 'react'
import './Header.css';
import HeaderOption from './HeaderOption';
import { Outlet, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { useMediaQuery } from 'react-responsive'

import { useLocation } from 'react-router-dom';
import Footer from './Footer';
function Header() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1324px)' })

  const handleSidebar = {

  }

  const [isActive, setIsActive] = useState([false, false, false]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/Home' || '') {
      setIsActive([false, false, false])
    }
  }, [location])

  const hadlerActive = (ind) => {

    if(ind == 1){
      const newState = [...isActive];
      newState[ind] = !isActive[ind];
      newState[0] = false;
      newState[2] = false;
      setIsActive(newState);
    }
    else if(ind == 0){
      const newState = [...isActive];
      newState[ind] = !isActive[ind];
      newState[1] = false;
      newState[2] = false;
      setIsActive(newState);

    }
    else if(ind == 2) {
      const newState = [...isActive];

      newState[ind] = !isActive[ind];
      newState[1] = false;
      newState[0] = false;
      setIsActive(newState);

    }
  }
  return (
    <div>
      {isBigScreen &&
        <div className="header">
          <div className="header_left">
            <h4><Link to="Home">Mahendra Uppari</Link></h4>
            <span><Link to="Home" className='fontSize18'> Software Developer</Link></span>
            <LaptopMacIcon className="laptop_icon" />
          </div>
          <div className="header_right">
            <HeaderOption onClick={() => hadlerActive(0)} title="Resume" activeClass={isActive[0] ? 'headerOption_title active' : 'headerOption_title'} />
            <HeaderOption onClick={() => hadlerActive(1)} title="Projects" ind="1" activeClass={isActive[1] ? 'headerOption_title active' : 'headerOption_title'} />
            <HeaderOption onClick={() => hadlerActive(2)} title="Contact" ind="2" activeClass={isActive[2] ? 'headerOption_title active' : 'headerOption_title'} />
          </div>

        </div>}

      {isTabletOrMobile && <div className="header">

        <div className="header_left">
          <h4><Link to="Home">Mahendra Uppari</Link></h4>
          <span><Link to="Home"> Software Developer</Link></span>
          <LaptopMacIcon className="laptop_icon" />
        </div>
        <div className="header_right">
          <MenuIcon onClick={handleSidebar} />
          {/* <HeaderOption title="Resume" />
  <HeaderOption title="Projects" />
  <HeaderOption title="Contact" /> */}
        </div>

      </div>}
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default Header;
