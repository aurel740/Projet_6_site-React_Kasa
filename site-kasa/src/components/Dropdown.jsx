import React, { useState } from 'react';
import '../style/components/Dropdown.css';

const Dropdown = ({ data,type,type1 }) => {
  const [openDropdownIndexes, setOpenDropdownIndexes] = useState([]);

  const toggleDropdown = (index) => {
    const isOpen = openDropdownIndexes.includes(index);
    setOpenDropdownIndexes(isOpen
      ? openDropdownIndexes.filter((i) => i !== index)
      : [...openDropdownIndexes, index]);
  };

  const handleIconClick = (e, index) => {
    e.stopPropagation();
    toggleDropdown(index);
  };

  return (
    <div className="dropdown menuDefilant">
      {data.map((item, index) => (
        <div key={item.id}>
          <div className="dropdown__title" onClick={() => toggleDropdown(index)}>
            <h3>{item[type]}</h3>
            <i className={`fas ${openDropdownIndexes.includes(index) ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={(e) => handleIconClick(e, index)}></i>
          </div>
          {openDropdownIndexes.includes(index) ? <p>{item[type1]}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
