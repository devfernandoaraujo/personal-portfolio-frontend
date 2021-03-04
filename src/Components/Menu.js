import { css, Global } from '@emotion/react/macro';
import styled from '@emotion/styled/macro';
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import mq from '../Helper/MediaQuerie';


const navbar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: red;
  width:100%;
  -webkit-transform:translateY(0);
  transform: translateY(0);
  position: fixed;
  z-index: 1001;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  -webkit-backface-visibility: hidden;
  padding: .5rem 1rem;
`
const navList= css`
    list-style-type: none;

    li{
        display:inline-block;
        padding: 10px 10px;
        

    }

    li > a{
        text-decoration: none;

        color: #fff;
    }

    li> a:hover{
        text-decoration-line: underline;
        text-underline-offset: 0.5rem;
    }
`

const navLink = css`
    font: 600 14px/30px Montserrat, sams-serif;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    padding: 0;
    cursor: pointer;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
    line-height: 30px;
`

const hamburgerMenu=css`
    display: none;
    ${mq[1]}{
      display:block !important;
    }
    div{
        width:25px;
        height:3px;
        background-color:#0DB3C7;
        margin-bottom:3px;
    }
`




class MenuComponent extends Component{
    render(){
        return (
            <header>
                <nav css = { navbar }>
                    <div className="auto-m">
                        <a href="#">Brand</a>
                    </div>
                    <ul className="auto-m" css ={ navList }>
                        <li css ={ navLink }><a href="#">HOME</a></li>
                        <li css ={ navLink }><a href="#">SERVICE</a></li>
                        <li css ={ navLink }><a href="#">PORTFOLIO</a></li>
                        <li css ={ navLink }><a href="#">SKILLS</a></li>
                        <li css ={ navLink }><a href="#">TESTIMONIAL</a></li>
                        <li css ={ navLink }><a href="#">CONTACT</a></li>
                    </ul>
                    <div css={ hamburgerMenu }>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </header>
            
        )
    }
}

export default MenuComponent;