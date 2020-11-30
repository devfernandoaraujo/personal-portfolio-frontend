import { jsx, css, Global } from '@emotion/react/macro';
import styled from '@emotion/styled/macro';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import beardImage from '../Assets/Images/beard.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const Container = styled('div')({
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#fc0303",GradientType=1)',
        display: "grid",
        gridTemplateColumns:'repeat(5, 20%)',
        gridTemplateRows: 'repeat(3, auto)',
        gridGap: '1vh'
        
})

const headerColumn = css`
    grid-column: 2 / span 3;
    grid-row: 1;
`

const title = css`
    opacity: 1;
    position: relative;
    background-color: rgba(255, 255, 255, 0);
    color: rgba(112, 112, 112, 1);
    text-align: center;
    font: 4vw 'Spartan', sans-serif;
    
    
`

const subTitle = css`
    opacity: 1;
    display: block;
    color: rgba(255, 255, 255, 1);
    font-size: 2vw;
    font-weight: bold;
    font-style: italic;
    font-family: 'Playfair Display', serif;
    text-align: center;
    
`
const hrSpan = css`
    display: block;
    opacity: 0.550000011920929;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    font-size: 1vw;
     
`
const hr = css`
    background: rgb(255,0,0);
    background: -moz-linear-gradient(170deg, rgba(255,255,255,1) 21%, rgba(53,200,136,1) 46%);
    background: -webkit-linear-gradient(170deg, rgba(255,255,255,1) 21%, rgba(53,200,136,1) 46%);
    background: linear-gradient(170deg, rgba(255,255,255,1) 21%, rgba(53,200,136,1) 46%);
    border-radius: 65vw;
    height: 0.05vh;
`


const contentColumn = css`
    grid-column: 2 / span 3;
    grid-row: 2;
`

const SpeechBallonGrid = styled('div')({
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#fc0303",GradientType=1)',
        display: "grid",
        gridTemplateColumns:'repeat(5, 12vw)',
        gridTemplateRows: 'repeat(1, auto)'
        
})

const speechBallonColumnLeft = css`
    grid-column: 1 / span 3;
    grid-row: 1;
    align-self: center;
`
const beardImageColumnRight = css`
    grid-column: 4 / span 2;
    grid-row: 1;
    align-self: center;
`


const speechBallon = css`
    opacity: 1;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    width: 100%;
    height: 40%;
`
const beardImageRight = css`
    width : 90%;
    height: 80%;
    
`

const svgMainText = css`
    width:70%;
    font-family: 'Times New Roman', Times, serif;
    font-style: normal;
    font-size:1.5vw;
    fill:black;
`
const svgSmallText = css`
    width:70%;
    font-family: 'Times New Roman', Times, serif;
    font-style: normal;
    font-size:1.0vw;
    fill:black;
`
const A = styled.a`
  fill:blue;
  &:active{
    fill:red;
  }
  &:after{
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const fontAwesomeLinkEdin = css`
  color: #2867B2;
`

const fontAwesomeGitHub = css`
  color: #333333;
`

class ComingSoonComponent extends Component{
  render(){
    return (
        <Container>
          <Global 
            styles={css`
              html{
                height:100vh;
                background: rgb(255,0,0);
                background: -moz-linear-gradient(170deg, rgba(255,0,0,1) 0%, rgba(252,3,3,1) 60%, rgba(252,3,3,1) 100%);
                background: -webkit-linear-gradient(170deg, rgba(255,0,0,1) 0%, rgba(252,3,3,1) 60%, rgba(252,3,3,1) 100%);
                background: linear-gradient(170deg, rgba(255,0,0,1) 0%, rgba(252,3,3,1) 60%, rgba(252,3,3,1) 100%);
              };
              body{
                height: 100vh;
              };
              #root{
                height: 100vh;
              }
            `}
          />

          <div css={ headerColumn }>
              <header>
                <h1 css={ title }>Fernando de Matos Araujo
                  <span css={ subTitle }>Canada based Web Developer</span>
                  <span css={ hrSpan }><hr css={ hr }></hr></span>
                </h1>
              </header>
          </div>
          <div css={ contentColumn }>
            <section>
              <article>
                <SpeechBallonGrid>
                  <div css={ speechBallonColumnLeft }>
                    <svg data-layer="eac5da70-bcd6-47f2-a210-015b9d4d689d" css={ speechBallon } preserveAspectRatio="none" viewBox="-0.75 -0.75 861.956787109375 442.5" fill="rgba(255, 255, 255, 1)">
                      <path d="M 81 441 C 36.26460266113281 441 0 404.7354125976563 0 360 L 0 81 C 0 36.26460266113281 36.26460266113281 0 81 0 L 603.9999389648438 0 C 648.7352905273438 0 684.9999389648438 36.26460266113281 684.9999389648438 81 L 684.9999389648438 235.1881866455078 L 809.0946044921875 340.5411071777344 L 860.4567260742188 381.5955200195313 L 684.9999389648438 346.1705627441406 L 684.9999389648438 360 C 684.9999389648438 404.7354125976563 648.7352905273438 441 603.9999389648438 441 L 81 441 Z"  />
                      
                      <text css={ svgMainText } x="40%" text-anchor="middle" y="10%" stroke="#000000" >A full blown portfolio site is coming</text>
                      <text css={ svgMainText } dy="19%"  x="40%" text-anchor="middle" stroke="#000000">very soon! I've just been busy, give a</text>
                      <text css={ svgMainText } dy="28%"  x="40%" text-anchor="middle" stroke="#000000">beard a break!</text>
                      <text css={ svgSmallText } dy="50%"  x="15%" text-anchor="start" stroke="#000000">If you waana keep up with me or wanna say hi, check out the</text>
                      <text css={ svgSmallText } dy="57%"  x="15%" text-anchor="start" stroke="#000000">links below or get in touch on <A stroke="blue" href="mailto:fernandomatosaraujo@gmail.com">fernandomatosaraujo@gmail.com</A></text>
                      
                      <A href="http://www.linkedin.com/in/fernando-maraujo/">
                        <FontAwesomeIcon preserveAspectRatio="xMidYMin slice" x="30%"   y="70%" viewBox="0 0 100 100" width="2%"  height="2%"  css={fontAwesomeLinkEdin} icon={ faLinkedin } fixedWidth />
                      </A>
                      <A href="https://github.com/devfernandoaraujo">
                        <FontAwesomeIcon preserveAspectRatio="xMidYMin slice" x="45%"   y="70%" viewBox="0 0 100 100" width="2%"  height="2%"  css={fontAwesomeGitHub} icon={ faGithub } fixedWidth />
                      </A>
                    </svg>
                  </div>
                  <div css={ beardImageColumnRight }>
                    <image>
                      <img css={ beardImageRight } src={ beardImage } alt="Beard Image" />
                    </image>
                  </div>
                </SpeechBallonGrid>
                
              </article>
            </section>
          </div>
          
          
          
        </Container>
    );
  }
}

export default ComingSoonComponent;