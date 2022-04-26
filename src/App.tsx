import React from 'react';
import {css, injectGlobal } from '@emotion/css/macro';
import normalize from 'emotion-normalize';
import logo from './logo.svg';
import MenuComponent from './Components/Menu';
import HomeComponent from './Components/Home';
import ServicesComponent from './Components/Services';
import PortfolioComponent from './Components/Portfolio';
import SkillsComponent from './Components/Skills';
import TestimonialComponent from './Components/Testimonial';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';


injectGlobal`
  ${normalize}
  body{
        line-height: 2rem;
        font-size: 1rem;
        font-family: Open Sans, sans-serif;
        color: #797979;
      }
`
const body_wrapper = css`
  overflow: hidden;
`

const App =() =>{
  return (
      <div css={body_wrapper}>
        <MenuComponent />
        <HomeComponent />
        <ServicesComponent />
        <PortfolioComponent />
        <SkillsComponent />
        <TestimonialComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
  );
}

export default App;
