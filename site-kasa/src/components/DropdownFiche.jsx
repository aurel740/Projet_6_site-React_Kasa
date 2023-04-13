import React, { useState } from 'react';
import useLogements from '../Hooks/useLogements';
import "../style/components/DropdownFiche.css";

const DropdownFiche = ({ id }) => {
  const { getLogementById } = useLogements();
  const logement = getLogementById(id);
  const [openDescription, setOpenDescription] = useState(false);
  const [openEquipments, setOpenEquipments] = useState(false);

  const toggleDescription = () => {
    setOpenDescription(!openDescription);
  };

  const toggleEquipments = () => {
    setOpenEquipments(!openEquipments);
  };

  const handleIconClick = (e, toggleFunc) => {
    e.stopPropagation();
    toggleFunc();
  };

  return (
    <div className="dropdownFiche">
      <div className="dropdownDescription">
        <div className="dropdown__title" onClick={toggleDescription}>
          <h3>description</h3>
          <i className={`fas ${openDescription ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={(e) => handleIconClick(e, toggleDescription)}></i>
        </div>
        {openDescription && <p>{logement.description}</p>}
      </div>
      <div className="dropdownEquipments">
        <div className="dropdown__title" onClick={toggleEquipments}>
          <h3>Équipements</h3>
          <i className={`fas ${openEquipments ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={(e) => handleIconClick(e, toggleEquipments)}></i>
        </div>
        {openEquipments && (
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownFiche;


