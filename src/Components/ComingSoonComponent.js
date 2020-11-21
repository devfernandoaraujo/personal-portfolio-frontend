import { jsx, css, Global } from '@emotion/react/macro';
import styled from '@emotion/styled/macro'
import React, { Component } from 'react';
import ReactDOM from "react-dom";




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
    font: 5vw 'Arizonia', Helvetica, sans-serif;
    font-weight: 700;
    
`

const subTitle = css`
    opacity: 1;
    display: block;
    color: rgba(255, 255, 255, 1);
    font-size: 2vw;
    font-weight: 700;
    font-style: italic;
    font-family: Great Vibes;
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
                <p>ssssssssssssssssssss</p>
              </article>
            </section>
          </div>
          
          
          
        </Container>
    );
  }
}

export default ComingSoonComponent;