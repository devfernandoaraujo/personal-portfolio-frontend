import { css, Global, keyframes } from '@emotion/react/macro';
import React, { Component } from 'react';
import mq from '../Helper/MediaQuerie';
import bannerImage from '../Assets/Images/banner_img.d852f421.svg';
import programmer from '../Assets/Images/f_man.20b27179.png';
import table from '../Assets/Images/table.1040818b.png';



//Animation
const spin1 = keyframes`
    0%{
        transform: scale(.9);
    }
    100%{
        transform: scale(1.5);d
    }
`
const spin2 = keyframes`
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(2.5rem);
    }
`
const fadeInRight = keyframes`
    0%{
        opacity: 0;
        transform:translateX(1.25rem);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`
const fadeInUp = keyframes`
    0%{
        opacity: 0;
        transform: translateY(1.125rem)
    }
    100%{
        opacity: 1;
        transform: translateY(0)
    }
`

const fadeInLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-1.25rem);
    }
    100%{
        opacity: 1;
        transform: translateX(0)
    }
`
const fadeInDown = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-1.25);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

//end animation

const freelancerBannerArea = css`
    height: 59.375rem;
    position: relative;
    z-index: 1;
    display:flex;
    align-items: center;

    ${mq[4]}{
        height: 43.75rem;
    }
`

//Bubbles

const homeBubble= css`
    

`
const bubble = css`
    position: absolute;
    border-radius: 50%;
`
const bOne = css`
    width: 0.62rem;
    height: 0.62rem;
    background: #00c99c;
    top: 25%;
    left: 5.32rem;
    animation: ${spin2} 2s infinite alternate;
    transform: translateY(-50%);
`
const bTwo = css`
    background:#fca249;
    top: 40%;
    left: 9.69rem;
    animation: ${spin1} 2s infinite alternate;
    transform: translateY(-50%);
    width: 1.87rem;
    height: 1.87rem;
    ${mq[4]}{
        top: 6.25rem;
    }
`
const bThree = css`
    background: #7d95fa;
    top: 85%;
    left: 15.94rem;
    animation: ${spin1} 1s infinite alternate;
    width: 0.87rem;
    height: 0.87rem;
`
const bFour = css`
    width: 0.62rem;
    height: 0.62rem;
    background: #d27dfa;
    top: 6.25rem;
    left: 12.82rem;
    animation: ${spin1} 2s infinite alternate;
`
const bFive = css`
    background: #ff9398;
    top: 15.62rem;
    left: 22.18rem;
    animation: ${spin1} 3s infinite alternate;
    width: 1.87rem;
    height: 1.87rem;
`
const bSix = css`
    background: #f1d53b;
    top: 75%;
    left: 3.43rem;
    animation: ${spin2} 2s infinite alternate;
    height: 0.87rem;
    width: 0.87rem;
`
//end bubbles

///Banner image

const sShape = css`
    position: absolute;
    top: -0.063rem;
    height: 100%;
    width: auto;
    right: 0;
    z-index: -1;
`
const cfadeInRight = css`
    animation-name: ${fadeInRight};
`
const bannerAnimation = css`
    animation-duration:2s;
    animation-delay:0ms;
    animation-iteration-count: 1;
    opacity:1;
`

//end banner image

//Buttons
const theme_btn = css`
    font-size: 1.25rem;
    font-weight: 500;
    color: #040c2c;
    font-family: Montserrat,sans-serif;
    border: 0.125rem solid #040c2c;
    padding: 0.625rem 2.25rem;
    border-radius: 0.188rem;
    position: relative;
    transform: translateZ(0);
    cursor: pointer;
    min-width: 8.75rem;
    text-align: center;
    display: inline-block;
`
//end Buttons


const containerPosition = css`
    position:relative;
    z-index: 999;
`

const softwareEngineerContent = css`
    margin-right:-3.43rem;
    & > a{
        margin-top: 2.5rem;
        color:#fff;
        display: inline-flex;
        background: #0db3c7;
        border-color: #0db3c7;
    
    }
    h2{
        font-size:3.125rem;
        font-weight:700;
        line-height:4.375rem;
        padding-bottom:1.875rem;
        letter-spacing: -0.063px;
        font-family: Montserrat,sans-serif;
        margin-bottom: 0;
        ${mq[4]}{
            line-height:4rem;
        }
        span{
            color: #0db3c7;
            font-weight:900;
        }
    }

    h4{
        span{
            background: rgba(13,179,199,.12);
            font-size: 0.875rem;
            text-transform: uppercase;
            padding: 0.938rem 1.875rem;
            display: inline-block;
            font-weight: 600;
            letter-spacing: 0.375rem;
            color: #0db3c7;
            ${mq[4]}{
                font-size: 0.813rem;
                letter-spacing: 0.25rem;
            }
        }
    }
`
const softwareEngineerAnimation = css`
    animation-duration: 2s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
    transition: opacity 3s ease-in-out;
`

const dreamsAnimation= css`
    animation-duration: 3s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`
const btnHireMeAnimation= css`
    animation-duration: 3s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`

const tColor = css`
    color: #040c2c;
`
const cfadeInUp = css`
    animation-name: ${fadeInUp};
`

const frelencerImage = css`
    position: relative;

    ${mq[4]}{
        width: 28.125rem;
    }
`
const cFadeInLeft = css`
    animation-name: ${fadeInLeft};
`
const fImageOne= css`
    top: 13.75rem;
    left: 6.25rem;
    z-index: 1;
    position: absolute;
`
const softwareEngineerProgrammerAnimation = css`
    animation-duration: 1.4s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`

const fImageTwo = css`
    top: 8.438rem;
    left: 7.188rem;
    position: absolute;
    z-index: -1;
`
const tableAnimation = css`
    animation-duration: 1.2s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`
const cFadeInDown = css`
    animation-name: ${fadeInDown};
`
const fImageThree = css`
    top: 17rem;
    right: 5.875rem;
    position: absolute;
    z-index: -1;
`
const coffeeAnimation = css`
    animation-duration: 1.6s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`

class HomeComponent extends Component{
    render(){
        return (
            <section css = { freelancerBannerArea } id="home">
                <div css = { homeBubble }>
                    <div css ={ [bubble, bOne] }> </div>
                    <div css ={ [bubble, bTwo] }> </div>
                    <div css ={ [bubble, bThree] }> </div>
                    <div css ={ [bubble, bFour] }> </div>
                    <div css ={ [bubble, bFive] }> </div>
                    <div css ={ [bubble, bSix] }> </div>
                </div>
                <img css ={[sShape, cfadeInRight, bannerAnimation ]} alt="banner" src={ bannerImage } />
                <div css ={containerPosition} className="container" >
                    <div className="row">
                        <div className="col-lg-6">
                            <div css={ softwareEngineerContent }>
                                <h2 css ={ [softwareEngineerAnimation, tColor, cfadeInUp] }>
                                    Hey there!
                                    <br/>
                                    I'm Fernando Araujo
                                    <br/>
                                    <span>Software Engineer</span>
                                </h2>
                                <h4 css ={[dreamsAnimation,cfadeInUp]}>
                                    <span>Turning dreams in reality</span>
                                </h4>
                                <a href="#" css={[btnHireMeAnimation, cfadeInUp, theme_btn]}>
                                    Hire me
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div css={frelencerImage}>
                                <img css={[softwareEngineerProgrammerAnimation, cFadeInLeft, fImageOne]} alt="programmer image" src={ programmer } />
                                <img css={[tableAnimation, cfadeInRight, fImageTwo]} alt="table" src={ table } />
                                <img css={ coffeeAnimation, fadeInDown, fImageThree} src="data:image/png;base64,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"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeComponent;