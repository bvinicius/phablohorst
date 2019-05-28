import React from 'react';

import fotoAbout from './aboutMe.jpg';

function Footer() {
    return (
        <footer id="contactSection" >
            <h3 className="sectionTitle">ABOUT ME</h3>
            <div id="aboutMe">
                <img id="fotoAbout"src={fotoAbout}></img>
            </div>
        </footer>
    )
}

export default Footer;