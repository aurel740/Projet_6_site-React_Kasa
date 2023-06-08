import React, { useState } from 'react';


const CollapseItem = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapseItem ${isOpen ? 'open' : ''} ${className}`}>
      <div className="collapse__title" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={toggleCollapse}></i>
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
};

export default CollapseItem;
