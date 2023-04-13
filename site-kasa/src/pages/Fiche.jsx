import React from 'react';
import Banniere from '../components/Banniere';
import DescriptionLogement from '../components/DescriptionLogement';
import { useParams } from 'react-router-dom';

const Fiche = () => {
    const {id} = useParams();
    return (
        <div>
            <Banniere/>
            <DescriptionLogement id={id}/>
        </div>
    );
};

export default Fiche;