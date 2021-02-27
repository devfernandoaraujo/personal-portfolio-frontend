import { css, Global } from '@emotion/react/macro';
import styled from '@emotion/styled/macro';
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import mq from '../Helper/MediaQuerie';


const navbar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
   background-color: #282c34;
  color: white;
   ${mq[0]}{
      color:red
    }

  ul{
      list-style:none;
      padding: 0;
      display:flex;
      align-items:center;
      justify-content: space-between;
  }
`




class MenuComponent extends Component{
    render(){
        return (
            <header >
                <nav css = { navbar }>
                    <div class="logo"><a href="#">Brand</a></div>
                    <ul >
                        <li>HOME</li>
                        <li>SERVICE</li>
                        <li>PORTFOLIO</li>
                        <li>SKILLS</li>
                        <li>TESTIMONIAL</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </header>
            
        )
    }
}

export default MenuComponent;