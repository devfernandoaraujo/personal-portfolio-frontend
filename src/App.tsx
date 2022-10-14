import React from 'react';
import HomeComponent from './Components/Home';
import AboutComponent from './Components/About';
import ServicesComponent from './Components/Services';
import PortfolioComponent from './Components/Portfolio';
import SkillsComponent from './Components/Skills';
import TestimonialComponent from './Components/Testimonial';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className="body_wrapper">
      <HomeComponent />
      <AboutComponent />
      <ServicesComponent />
      <PortfolioComponent />
      <SkillsComponent />
      <TestimonialComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
