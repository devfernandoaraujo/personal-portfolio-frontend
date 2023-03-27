//src/common/components/elements/home/home.tsx
import React, { useState, useEffect, useRef } from 'react';
import NavbarComponent from '@/common/components/elements/navbar';
import BannerComponent from '@/common/components/elements/banner';

const NavComponent = () => {
  return (
    <React.Fragment>
      <NavbarComponent />
      <BannerComponent />
    </React.Fragment>
  );
};

export default NavComponent;
