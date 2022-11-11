import React, { useState } from 'react';
import NavbarComponent from './Navbar';
import BannerComponent from './Banner';

const HomeCOmponent = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = async () => {
    const currentState = activeMenu;
    await setActiveMenu(!currentState);
  };

  return (
    <React.Fragment>
      <NavbarComponent />
      <BannerComponent />
    </React.Fragment>
  );
};

export default HomeCOmponent;
