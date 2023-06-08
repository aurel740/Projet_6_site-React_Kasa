import React, { useState } from 'react';
import useLogements from '../Hooks/useLogements';
import "../style/components/Carousel.css"

const Carousel = ({ id }) => {
  const { getLogementById } = useLogements();
  const logement = getLogementById(id);
  const [picture, setPictures] = useState(0);

  //si logement pas encore charger ,affiche Loading...
  if (!logement) {
    return <div>Loading...</div>
  }

  //ex: picture=4 et logement.pictures.length=5 => (4+1)%5=0
  const imageSuivante = () => {
    const suivant = (picture + 1) % logement.pictures.length;
    setPictures(suivant);
  }

  const imagePrecedente = () => {
    const precedent = (picture - 1 + logement.pictures.length) % logement.pictures.length;
    setPictures(precedent);
  }
  const afficherNavigation = logement.pictures.length > 1;
  
  return (
    <div className='carousel'>
      <img src={logement.pictures[picture]} className='carousel-image' alt={logement.title} />
      {afficherNavigation ? (
        <div className='carousel-controls'>
          <i className="fa-solid fa-angle-left" onClick={imagePrecedente}></i>
          <i className="fa-solid fa-angle-right" onClick={imageSuivante}></i>
        </div>
      ) : null}
      <p className='count'>{picture + 1}/{logement.pictures.length}</p>
    </div>
  );
};

export default Carousel;