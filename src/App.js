import logo from './Assets/Images/logo.svg';
import './App.css';
import MenuComponent from './Components/Menu';
import HomeComponent from './Components/Home';
import ServicesComponent from './Components/Services';
import PortfolioComponent from './Components/Portfolio';
import SkillsComponent from './Components/Skills';
import TestimonialComponent from './Components/Testimonial';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
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
