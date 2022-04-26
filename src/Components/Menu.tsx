import React, { useState} from 'react';
import {css, injectGlobal } from '@emotion/css/macro';
import { hello } from '../Helper/HelperFunctions';


injectGlobal`
    .navbar-toggler{
        border: 0;
        padding:0;
        border-radius:0;
        height: 80px;
    }
    
    .navbar-toggler:focus{
        box-shadow: none;
    }


    .navbar-toggler span{
        background:#0db3c7;
        display: block;
        width: 1.875rem;
        height: 0.125rem;
        background-image: -ms-linear-gradient(0deg,#ed3d82 0,#f66264 75%,#fe8645 100%);
        margin: auto auto 0.313rem;
        --webkit-transform: all .4s linear;
        transition:all .4s linear;
    }
`
const icon_bar = css`
    
`

const MenuComponent =() =>{
    
    const [activeMenu, setActiveMenu] = useState(false);
    
    const toggleMenu = async () =>{
        const currentState = activeMenu;
        await setActiveMenu(!currentState);
    }


    return(
        <nav className={`navbar navbar-expand-lg navbar-light ms-3`}>
            <div className={ `container-fluid`}>
                <a href="#" className={`navbar-brand mr-3`}>Tutorial Republic
                    {/*<img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"></img>*/}
                </a>
                <button type="button" className={`navbar-toggler`} onClick={ toggleMenu}>
                    <span css={ icon_bar }></span>
                    <span css={ icon_bar }></span>
                    <span css={ icon_bar }></span>
                </button>
                <div className={`${activeMenu? 'show' : ''} collapse navbar-collapse`} id="navbarCollapse">
                    <div className={`navbar-nav`}>
                        <a href="#" className={`nav-item nav-link active`}>HOME</a>
                        <a href="#" className={`nav-item nav-link`}>SERVICES</a>
                        <a href="#" className={`nav-item nav-link`}>PORTFOLIO</a>
                        <a href="#" className={`nav-item nav-link`}>SKILLS</a>
                        <a href="#" className={`nav-item nav-link`}>TESTIMONIAL</a>
                        <a href="#" className={`nav-item nav-link`}>CONTACT</a>
                    </div>
                </div>
            </div>    
        </nav>
    );
}

export default MenuComponent;