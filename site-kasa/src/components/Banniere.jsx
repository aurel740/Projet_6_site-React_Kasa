import React from 'react';
import "../style/components/Banniere.css"
import Navigation from './Navigation';

const Banniere = () => {
    return (
        <div>
            <nav>
                <img src="../assets/LOGO.png" alt="Logo Kasa"/>
                <Navigation />
            </nav>
        </div>
    );
};

export default Banniere;