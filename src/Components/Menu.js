import { css, Global } from '@emotion/react/macro';
import styled from '@emotion/styled/macro';
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import mq from '../Helper/MediaQuerie';

const stickyInnerWrapper = css`
    position: relative;
    z-index: 9999;
    transform: translate3d(0px, 0px, 0px);
`
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
   ${mq[2]}{
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
`
const navList= css`
    list-style-type: none;

    li{
        display:inline-block;
        padding: 56px 10px;
    }
`




class MenuComponent extends Component{
    render(){
        return (
            <header>
               <div css={ stickyInnerWrapper  }>
                    <nav css = { navbar }>
                        <div>
                            <a href="#">Brand</a>
                        </div>
                        <ul css ={ navList }>
                            <li>HOME</li>
                            <li>SERVICE</li>
                            <li>PORTFOLIO</li>
                            <li>SKILLS</li>
                            <li>TESTIMONIAL</li>
                            <li>CONTACT</li>
                        </ul>
                    </nav>
               </div>
            </header>
            
        )
    }
}

export default MenuComponent;