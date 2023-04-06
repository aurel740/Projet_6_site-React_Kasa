import React from 'react';
import Banniere from '../components/Banniere';
import ImagePaysage from '../components/ImagePaysage';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Banniere />
            <ImagePaysage />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;