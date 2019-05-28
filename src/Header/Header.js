import React from 'react';

import './Header.css'
import '../App.css'

function Header() {

    return (
        <header id="header" className="header">
            <h1 id="mainTitle" onClick={homeStyle}><a href="#">PHABLO ALEXSANDER</a></h1>
            <ul  id="menu" className="navBar">
                <li ><a className="links" href="#portraitSection" onClick={menuStyle}>PORTRAITS</a></li>
                <li><a className="links" href="#landscapeSection" onClick={menuStyle}>LANDSCAPES</a></li>
                <li><a className="links" href="#clothingSection" onClick={menuStyle}>CLOTHING</a></li>
                <li><a className="links" href="#foodSection" onClick={menuStyle}>FOOD</a></li>
                <li><a className="links" href="#contactSection" onClick={menuStyle}>ABOUT ME</a></li>
            </ul>
        </header>
    );
}

const headerStyle = {
    
};

const titleStyle = {
    paddingTop: "25px",
    transition: "500ms"
};

function menuStyle() {
    document.getElementById("header").style.position="sticky";
    document.getElementById("header").style.top="0";

    document.getElementById("mainTitle").style.paddingTop="20px";

    document.getElementById("menu").style.paddingBottom="30px";
}

function homeStyle() {
    document.getElementById("header").style.position = "static";

    document.getElementById("mainTitle").style.paddingTop = "250px";

    document.getElementById("menu").paddingTop = "280px";
}




export default Header;
