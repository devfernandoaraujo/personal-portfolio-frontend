import { jsx, css } from '@emotion/react/macro';
import styled from '@emotion/styled/macro'
import React, { Component } from 'react';
import ReactDOM from "react-dom";




const Main = styled('div')({
        background: 'rgb(255,0,0)',
        background: '-moz-linear-gradient(170deg, rgba(255,0,0,1) 0%, rgba(252,3,3,1) 60%, rgba(252,3,3,1) 100%)',
        background: '-webkit-linear-gradient(170deg, rgba(255,0,0,1) 0%, rgba(252,3,3,1) 60%, rgba(252,3,3,1) 100%)',
        background: 'linear-gradient(170deg, rgba(255,0,0,1) 0%, rgba(252,3,3,1) 60%, rgba(252,3,3,1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#fc0303",GradientType=1)',
        maxWidth: "1920px",
        display: "grid",
        gridTemplateColumns:'repeat(5, 20% [col-start])',
        gridTemplateRows: 'repeat(3,auto)',
        maxHeight: "1080px",
        position:"relative"
        
})

const header = css`
    grid-column: 2 / span 3;
    grid-row: 1;
`

const title = css`
    opacity: 1;
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    color: rgba(112, 112, 112, 1);
    font-size: 4vw;
    font-weight: 700;
    font-style: normal;
    font-family: Script MT;
    text-align: center;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
`
const subHeader = css`
    grid-column: 2 / span 3;
    grid-row: 2;
`

const subTitle = css`
    opacity: 1;
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    color: rgba(255, 255, 255, 1);
    font-size: 4vw;
    font-weight: 700;
    font-style: normal;
    font-family: Arial Rounded MT;
    text-align: center;
    line-height: 78.10000000000001;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
`

class ComingSoonComponent extends Component{
  render(){
    return (
        <Main>
          <header css={ header }>
            <h1 css={ title }>Fernando de Matos Araujo</h1>
            <section css={ subHeader }>
              <h3 css={ subTitle }>Canada based Web Developer</h3>
            </section>
          </header>
          <main>
            <p>dddd</p>
          </main>
        </Main>
    );
  }
}

export default ComingSoonComponent;