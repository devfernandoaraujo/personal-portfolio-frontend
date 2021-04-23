import { css, Global, keyframes } from '@emotion/react/macro';
import React, { Component } from 'react';
import mq from '../Helper/MediaQuerie';
import bannerImage from '../Assets/Images/banner_img.d852f421.svg';
import programmer from '../Assets/Images/f_man.20b27179.png';
import table from '../Assets/Images/table.1040818b.png';
import shadow from '../Assets/Images/shadow.1add9ee7.png';



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
const fadeInUp3 = keyframes`
    0%{
        transform: translateY(0.938rem)
    }
    100%{
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
const fImageFour = css`
    top: -1.063rem;
    right: -2.188rem;
    z-index: 0;
    ${mq[4]}{
        right: 0;
    }
`
const shodowAnimation = css`
    animation-duration: 1.6s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`

const imageFiveAnimation = css`
    animation-duration: 2s;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
`

const fImageFive = css`
    top: 2.313rem;
    left: 12.375rem;
    position: absolute;
    z-index: -1;
    img{
        animation: ${fadeInUp3} 1.5s .2s infinite alternate both;
    }
`
const fImageSix = css`
    top: 0;
    left: 18.25rem;
    position: absolute;
    z-index: 1;
    img{
        animation: ${fadeInUp3} 1.9s .3s infinite alternate-reverse both;
    }
`
const fImageSeven = css`
    top: 5.625rem;
    right: 6.75rem;
    z-index: 0;
    position: absolute;
    img{
        animation: ${fadeInUp3} 2.1s .2s infinite alternate both;
    }
`
const fImageEight = css`
    right: 1.25rem;
    top: 11.25rem;
    position: absolute;
    z-index: -1;
    img{
        animation: ${fadeInUp3} 3s .5s infinite alternate-reverse both;
    }
`
const fImageNine = css`
    right: -0.313rem;
    top: 4rem;
    position:absolute;
    z-index: -1;
    img{
        animation: ${fadeInUp3} 2.6s .4s infinite alternate-reverse both
    }
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
                <img loading="lazy" css ={[sShape, cfadeInRight, bannerAnimation ]} alt="banner" src={ bannerImage } />
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
                                <img loading="lazy" css={[softwareEngineerProgrammerAnimation, cFadeInLeft, fImageOne]} alt="programmer image" src={ programmer } />
                                <img loading="lazy" css={[tableAnimation, cfadeInRight, fImageTwo]} alt="table" src={ table } />
                                <img loading="lazy" css={ coffeeAnimation, fadeInDown, fImageThree} src="data:image/png;base64,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"></img>
                                <img loading="lazy" css={[ shodowAnimation, fImageFour, fadeInDown ]} alt="Shadow" src = {shadow} />
                                <div css = {[imageFiveAnimation, fadeInDown, fImageFive]}>
                                    <img loading="lazy" alt="" src="data:image/png;base64,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" />
                                </div>
                                <div css={ fImageSix}>
                                    <img loading="lazy" alt="" src="data:image/png;base64,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"/>
                                </div>
                                <div css={ fImageSeven}>
                                    <img loading="lazy" alt="" src="data:image/png;base64,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"/>
                                </div>
                                <div css={ fImageEight}>
                                    <img loading="lazy" alt="" src="data:image/png;base64,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"/>
                                </div>
                                <div css={ fImageNine}>
                                    <img loading="lazy" alt="" src="data:image/png;base64,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"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeComponent;