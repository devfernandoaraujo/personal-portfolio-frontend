//src/common/components/elements/home/home.tsx
import React, { useState, useEffect } from 'react';
import NavbarComponent from '@/common/components/elements/navbar';
import BannerComponent from '@/common/components/elements/banner';

const NavComponent = () => {
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

export default NavComponent;
