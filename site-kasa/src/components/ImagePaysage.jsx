import React, { useState } from 'react';
import "../style/components/imagePaysage.css"

const ImagePaysage = () => {
let text = useState("Chez vous,partout et ailleurs");
const isAboutPage = window.location.pathname === "/about"
let imgFond ="../assets/falaise.jpg";;
if (isAboutPage){
imgFond = "../assets/montagne.jpg";
text=""
}

    return (
        <div className='imagePaysage' style={{backgroundImage:  `url(${imgFond})`}}> 
            <h1>{text}</h1>
        </div>
    );
};

export default ImagePaysage;