import { css, Global } from '@emotion/react/macro';
import React, { Component } from 'react';
import mq from '../Helper/MediaQuerie';

const frelencerBannerArea = css`
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
    animation: spin2 2s infinite alternate;
    transform: translateY(-50%);
`
const bTwo = css`
    background:#fca249;
    top: 40%;
    left: 9.69rem;
    animation: spin1 2s infinite alternate;
    transform: translateY(-50%);
    width: 1.87rem;
    height: 1.87rem;
    ${mq[4]}{
        top: 6.25rem;
    }
`
const bThree = css`

`
const bFour = css`
    width: 0.62rem;
    height: 0.62rem;
`
const bFive = css`

`
const bSix = css`

`


class HomeComponent extends Component{
    render(){
        return (
            <section css = { frelencerBannerArea } id="home">
                <div css = { homeBubble }>
                    <div css ={ [bubble, bOne] }> </div>
                    <div css ={ [bubble, bTwo] }> </div>
                    <div css ={ [bubble, bThree] }> </div>
                    <div css ={ [bubble, bFour] }> </div>
                    <div css ={ [bubble, bFive] }> </div>
                    <div css ={ [bubble, bSix] }> </div>
                </div>
            </section>
        )
    }
}

export default HomeComponent;