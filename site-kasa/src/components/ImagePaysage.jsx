import React, { useState, useEffect } from 'react';
import '../style/components/imagePaysage.css';

const ImagePaysage = () => {
  const [text, setText] = useState('Chez vous,partout et ailleurs');
  const [imgFond, setImgFond] = useState('../assets/falaise.jpg');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isAboutPage = window.location.pathname === '/about';

  // écouter la taille de la fenêtre
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAboutPage) {
      setText('');
      setImgFond('../assets/montagne.jpg');
    }
    else if (windowWidth <= 769) {
      setText('Chez vous,\npartout et ailleurs');
    }
    else {
      setText('Chez vous,partout et ailleurs');
    }
  }, [isAboutPage, windowWidth]);

  return (
    <div className='imagePaysage' alt='photo paysage' style={{backgroundImage: `url(${imgFond})`}}> 
      <h1 style={{ whiteSpace: "pre-wrap" }}>{text}</h1>
    </div>
  );
};

export default ImagePaysage;

