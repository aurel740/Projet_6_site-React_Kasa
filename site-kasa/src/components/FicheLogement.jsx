import React from 'react';
import '../style/components/FicheLogement.css'

const FicheLogement = (logement) => {
    return (
        <div className='fiche' style={{backgroundImage:`url(${logement.cover})`}}>
            <h2>{logement.title}</h2>
            <h3>coucou</h3>
        </div>
    );
};

export default FicheLogement;