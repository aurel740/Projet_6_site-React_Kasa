import React from 'react';
import Banniere from '../components/Banniere';
import ImagePaysage from '../components/ImagePaysage';
import Card from '../components/Card';
const Home = () => {
    return (
        <>
        <div className='corps'>
            <Banniere />
            <ImagePaysage />
            <Card />
        </div>
        </>
    );
};

export default Home;