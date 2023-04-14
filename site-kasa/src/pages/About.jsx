import React from 'react';
import Banniere from '../components/Banniere';
import ImagePaysage from '../components/ImagePaysage';
import Menudefilant from '../components/Menudefilant';


const About = () => {

    return (
        <div className='corps'>
            <Banniere />
            <ImagePaysage />
            <Menudefilant />
        </div>
    );
};

export default About;