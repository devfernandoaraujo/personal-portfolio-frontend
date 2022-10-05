import React, { useState} from 'react';
import MenuComponent from './Menu';
import BannerComponent from './Banner';

   
const HomeCOmponent =() =>{
   
    
    const [activeMenu, setActiveMenu] = useState(false);
    
    const toggleMenu = async () =>{
        const currentState = activeMenu;
        await setActiveMenu(!currentState);
    }


    return(
        <React.Fragment>
            <MenuComponent />
            <BannerComponent />
        </React.Fragment>
    );
}

export default HomeCOmponent;