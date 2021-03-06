import logo from './Assets/Images/logo.svg';
import { injectGlobal } from '@emotion/css/macro';
import { jsx, css } from '@emotion/react/macro';
import MenuComponent from './Components/Menu';
import HomeComponent from './Components/Home';
import ServicesComponent from './Components/Services';
import PortfolioComponent from './Components/Portfolio';
import SkillsComponent from './Components/Skills';
import TestimonialComponent from './Components/Testimonial';
import ContactComponent from './Components/Contact';
import FooterComponent from './Components/Footer';

injectGlobal`
  *{
    padding: 0;
    margin: 0;
  }

  *, ::after,::before{
    box-sizing: border-box;
  }

  div{
    display: block;
  }

  body{
    line-height: 30px;
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    color: #797979;
    font-weight: 400;
    text-align: left;
    background-color: #fff;
  }

  img, svg{
    vertical-align: middle;
  }

  img{
    border-style: none;
  }

  a{
    background-color: transparent;
    text-decoration: none;
    color:#007bff;
  }

  li{
    text-align: -webkit-match-parent;
  }


  .auto-m{
    margin: auto !important;
  }

  .active{
    display:block !important;
  }
`

const  bodyWraper = css`
  overflow: hidden;
`
const stickyInnerWrapper = css`
  position: relative;
  z-index: 9999;
  transform: translate3d(0px 0px 0px);
`

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
    <div css={ bodyWraper }>
      <div css={ stickyInnerWrapper }>
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
