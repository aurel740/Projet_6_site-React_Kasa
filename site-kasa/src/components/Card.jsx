import React from 'react';
import "../style/components/Card.css";
import { NavLink } from 'react-router-dom';
import useLogements from '../Hooks/useLogements';


const Card = () => {
const {logements} = useLogements();


    return (
        <div className='ficheLogement'>
            {logements.map((logement) => 
            <NavLink to={`/FicheLogement/${logement.id}`} key={logement.id}>
            <div className='fiche' key={logement.id} style={{backgroundImage:  `url(${logement.cover})` }}> 
            <div className='fondNoir'><h2>{logement.title}</h2> </div> 
            </div>
            </NavLink> )}
        </div>
    );
};

export default Card;