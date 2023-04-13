import React from 'react';
import Banniere from '../components/Banniere';
import { NavLink } from 'react-router-dom';
import "../style/pages/Page404.css"

const Page404 = () => {

    const Navigation = () => {
        return (
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active":"")}>
            <li className='lienRetour'>Retourner sur la page d'accueil</li>
            </NavLink>
        );
    };
    return (
        <div className='Error404'>
            <Banniere />
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Navigation />
        </div>
    );
};

export default Page404;