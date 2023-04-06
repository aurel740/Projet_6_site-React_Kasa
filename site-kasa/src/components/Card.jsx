import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/components/Card.css"

const Card = () => {
    const [donnees,setdonnees]=useState([])
    
    useEffect(() => {
        axios.get('../data/logements.json')
          .then(res => {
            console.log(res.data);
            setdonnees(res.data);
          })
          .catch(error => console.error(error));
      }, []);


    return (
        <div className='container'>
            {donnees.map((logement) => 
            <div className='fiche' style={{backgroundImage:  `url(${logement.cover})` }}> 
            <div className='fondNoir'><h2>{logement.title}</h2> </div> 
            </div> )}
        </div>
    );
};

export default Card;