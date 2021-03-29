import { css, Global, keyframes } from '@emotion/react/macro';
import React, { Component } from 'react';
import mq from '../Helper/MediaQuerie';
import bannerImage from '../Assets/Images/banner_img.d852f421.svg';



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
    animation-name: fadeInRight;
`
const bannerAnimation = css`
    animation-duration:500ms;
    animation-delay:0ms;
    animation-iteration-count: 1;
    opacity:1;
`

//end banner image

const softwareEngineerContent = css`
    margin-right:-3.43rem;
`
const softwareEngineerAnimation = css`
    animation-duration: 500ms;
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
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-6">
                            <div css={ softwareEngineerContent }>
                                <h2 css ={ softwareEngineerAnimation } className="react-reveal fadeInUp t-color">
                                    "Hey there!"
                                    <br/>
                                    "I'm Fernando Araujo "
                                    <span>Software Engineer</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeComponent;