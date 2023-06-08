/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import useLogements from '../Hooks/useLogements';
import "../style/components/DescriptionLogement.css";
import "../style/components/Collapse.css"
import Carousel from './Carousel';
import Rating from './Rating';
import CollapseItem from './CollapseItem';

const DescriptionLogement = ({ id }) => {
    const { getLogementById, isLoading } = useLogements();
    const logement = getLogementById(id);
    const [openDescription, setOpenDescription] = useState(false);
    const [openEquipments, setOpenEquipments] = useState(false);
  
    const toggleDescription = () => {
      setOpenDescription(!openDescription);
    };
  
    const toggleEquipments = () => {
      setOpenEquipments(!openEquipments);
    };
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <section className="DescriptionLogement">
        <Carousel id={id} />
        <div className="description">
            <div className='infoLogement'>
          <div className="titreLogement">
            <h2>{logement.title}</h2>
            <h3>{logement.location}</h3>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="host">
            <span className="profil">
              <span className="nom">
                {logement.host.name.split(' ')[0]}
                <br />
                {logement.host.name.split(' ')[1]}
              </span>
              <img src={logement.host.picture} alt="" />
            </span>
            <span className="rating">
              <Rating rating={logement.rating} />
            </span>
          </div>
          </div>
            <div className="collapseContainer">
              <CollapseItem
                className="collapseDescription"
                title="Description"
                content={
                    <p className='text'>{logement.description}</p>
                }
                isOpen={openDescription}
                toggleCollapse={toggleDescription}
              />
              <CollapseItem
                className="collapseEquipments"
                title="Équipements"
                content={
                  <ul className='liste'>
                    {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                }
                isOpen={openEquipments}
                toggleCollapse={toggleEquipments}
              />
            </div>
        </div>
      </section>
    );
  };
  
  

export default DescriptionLogement;