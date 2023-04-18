import React, { useState } from 'react';
import useLogements from '../Hooks/useLogements';
import "../style/components/Carousel.css"

const Carousel = ({ id }) => {
  const { getLogementById } = useLogements();
  const logement = getLogementById(id);
  const [picture, setPictures] = useState(0);

  if (!logement) {
    return <div>Loading...</div>
  }

  const imageSuivante = () => {
    const suivant = (picture + 1) % logement.pictures.length;
    setPictures(suivant);
  }

  const imagePrecedente = () => {
    const precedent = (picture - 1 + logement.pictures.length) % logement.pictures.length;
    setPictures(precedent);
  }

  return (
    <div className='carousel'>
      <img src={logement.pictures[picture]} className='carousel-image' alt={logement.title} />
      <div className='carousel-controls'>
      <i className="fa-solid fa-angle-left" onClick={imagePrecedente}></i>
      <i className="fa-solid fa-angle-right" onClick={imageSuivante}></i>
      </div>
      <p className='count'>{picture + 1}/{logement.pictures.length}</p>
    </div>
  );
};

export default Carousel;