import React from 'react';
import HomeComponent from './Components/Home';
import ServicesComponent from './Components/Services';
import PortfolioComponent from './Components/Portfolio';
import SkillsComponent from './Components/Skills';
import TestimonialComponent from './Components/Testimonial';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';

const App =() =>{
  return (

      <div className="body_wrapper">
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

