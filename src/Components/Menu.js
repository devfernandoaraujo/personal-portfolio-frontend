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

  ${mq[1]}{
      flex-direction: column;
    }
`
const navList= css`
    list-style-type: none;
    margin-right: auto;

    ${mq[1]}{
      width: 100%;
      text-align:center;
      padding-top: 0.8rem;
      display:none;
    }

    li{
        display:inline-block;
        padding: 0.8rem 0.8rem;
        
        ${mq[1]}{
            display:block;
            border-top: 0.1rem solid #fff;
            padding: 0.5rem;
        }

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
    line-height: 1.9rem;
`


const hamburgerMenu=css`
    display: none;
    cursor: pointer;
    ${mq[1]}{
      display:block !important;
      position:absolute;
      right:0.8rem;
      top:1.2rem;
    }
    div{
        width:1.6rem;
        height:0.2rem;
        background-color:#0DB3C7;
        margin-bottom:0.2rem;
    }
`
const containerIcon=css`
    ${mq[1]}{
        width: 90%;
    }
`   



class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeMenu: false,
        }
    }

    async menuToggle(){
        
        const currentState = this.state.activeMenu;
        await this.setState({activeMenu: !currentState});

    }

    render(){
        return (
                <nav css = { navbar }>
                    <div css={ containerIcon } className="auto-m">
                        <a href="#">Brand</a>
                    </div>
                    <ul className={ ['auto-m'] && this.state.activeMenu ? 'active' : '' } css ={ navList }>
                        <li css ={ navLink }><a href="#">HOME</a></li>
                        <li css ={ navLink }><a href="#">SERVICE</a></li>
                        <li css ={ navLink }><a href="#">PORTFOLIO</a></li>
                        <li css ={ navLink }><a href="#">SKILLS</a></li>
                        <li css ={ navLink }><a href="#">TESTIMONIAL</a></li>
                        <li css ={ navLink }><a href="#">CONTACT</a></li>
                    </ul>
                    <div css={ hamburgerMenu } onClick={ this.menuToggle.bind(this) }>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            
        )
    }
}

export default MenuComponent;