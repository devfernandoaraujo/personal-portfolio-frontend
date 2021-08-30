import React from 'react';
import logo from './logo.svg';
import MenuComponent from './Components/Menu';
import HomeComponent from './Components/Home';
import ServicesComponent from './Components/Services';
import PortfolioComponent from './Components/Portfolio';
import SkillsComponent from './Components/Skills';
import TestimonialComponent from './Components/Testimonial';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';
import './App.css';

const App =() =>{
  return (
    <div>
      <div>
        <MenuComponent />
        <HomeComponent />
        <ServicesComponent />
        <PortfolioComponent />
        <SkillsComponent />
        <TestimonialComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
