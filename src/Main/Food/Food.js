import React from 'react'

import foto1 from './batataFritaSmall.jpg';
import foto2 from './bifesSmall.jpg';
import foto3 from './picadao2Small.jpg';
import foto4 from './picadao3Small.jpg';
import foto5 from './picadao4Small.jpg';
import foto6 from './picadaoSmall.jpg';
import foto7 from './porcaoBatataSmall.jpg';
import foto8 from './torreSmall.jpg';
import foto9 from './xizaoSmall.jpg';
import foto10 from './xis2Small.jpg';

function Food () {
    return (
        <div id="foodSection" className="container">
            <div>   
                <h3 className="sectionTitle">FOOD</h3>
            </div>
            <div className="gallery">
                <img className="pics" src={foto1} />
                <img className="pics" src={foto2} />
                <img className="pics" src={foto3} />
                <img className="pics" src={foto4} />
                <img className="pics" src={foto9} />                    
                <img className="pics" src={foto5} />
                <img className="pics" src={foto6} />
                <img className="pics" src={foto7} />
                <img className="pics" src={foto8} />
                <img className="pics" src={foto10} />
            </div>
        </div>
    )
}

export default Food;