import React from 'react'

import foto1 from './fotoPedrasSmall.jpg';
import foto2 from './goldenHourSmall.jpg';
import foto3 from './interiorSmall.jpg';
import foto4 from './lagoaGaribaldiSmall.jpg';
import foto5 from './paragliderSmall.jpg';
import foto6 from './pistaSmall.JPG';
import foto7 from './rio1Small.jpg';
import foto8 from './sunshineMatinalSmall.jpg';

function Landscapes () {
    return (
        <div id="landscapeSection" className="container">
            <div>   
                <h3 className="sectionTitle">LANDSCAPES</h3>
            </div>

            <div className="gallery">
                <img className="pics" src={foto1} />
                <img className="pics" src={foto2} />
                <img className="pics" src={foto3} />
                <img className="pics" src={foto4} />  
                <img className="pics" src={foto5} />
                <img className="pics" src={foto6} />
                <img className="pics" src={foto7} />
                <img className="pics" src={foto8} />
            </div>
        </div>
    )
}

export default Landscapes;