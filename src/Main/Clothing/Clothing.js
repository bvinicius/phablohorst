import React from 'react'

import foto1 from './cloBagSmall.jpg';
import foto2 from './cloClosingSmall.jpg';
import foto3 from './cloThialeSmall.jpg';
import foto4 from './cloDramaticSmall.jpg';
import foto5 from './cloBossSmall.jpg';
import foto6 from './cloMadameSmall.jpg';
import foto7 from './cloFrancesSmall.jpg';
import foto8 from './cloTenisSmall.jpg';

function Clothing () {
    return (
        <div id="clothingSection" className="container">
            <div>   
                <h3 className="sectionTitle">CLOTHING</h3>
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
                <img className="pics" src={foto6} />
                <img className="pics" src={foto7} />
                <img className="pics" src={foto8} />
                <img className="pics" src={foto2} />
                <img className="pics" src={foto3} />
                <img className="pics" src={foto6} />

            </div>  
        </div>
    )
}

export default Clothing;