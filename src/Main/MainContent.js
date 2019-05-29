import React from 'react'

import Portraits from './Portraits/Portraits'
import Landscapes from './Landscapes/Landscapes'
import Clothing from './Clothing/Clothing'
import Food from './Food/Food'
import Footer from './Footer/Footer'

function MainContent() {
    return (
        <div id="mainBody" className="main">
            <Portraits />
            <Landscapes />
            <Clothing />
            <Food />
            <Footer />
        </div>
    )
}
//TESTEEEEEEEEE
export default MainContent;