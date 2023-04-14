import React from 'react';
import "../style/components/Banniere.css"
import Navigation from './Navigation';

const Banniere = () => {
    return (
        <>
            <nav>
                <img src="../assets/LOGO.png" alt="Logo Kasa"/>
                <Navigation />
            </nav>
        </>
    );
};

export default Banniere;