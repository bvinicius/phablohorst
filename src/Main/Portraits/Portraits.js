import React from 'react'

import ReactBnbGallery from 'react-bnb-gallery';

import '../MainContent.css';

import foto1 from './bazaSmall.jpg';
import foto2 from './cevaBazaSmall.jpg';
import foto3 from './portraitEdsonCBRSmall.jpg';
import foto4 from './portraitMichelSmall.jpg';
import foto5 from './portraitViniSmall.jpg';


function Portraits () {
    return (
        <div id="portraitSection" className="container">
            <div>   
                <h3 className="sectionTitle">PORTRAITS</h3>
            </div>

            <div className="gallery">
                <img className="pics" src={foto1} />
                <img className="pics" src={foto2} />
                <img className="pics" src={foto3} />
                <img className="pics" src={foto4} />  
                <img className="pics" src={foto3} />
                <img className="pics" src={foto4} /> 
                <img className="pics" src={foto5} />
                <img className="pics" src={foto2} />
                <img className="pics" src={foto3} />
                <img className="pics" src={foto4} /> 
                <img className="pics" src={foto3} />
                <img className="pics" src={foto4} /> 
            </div>
        </div>
    )
}

export default Portraits;