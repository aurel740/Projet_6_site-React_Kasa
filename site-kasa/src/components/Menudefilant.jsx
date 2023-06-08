import React, {useEffect,useState} from 'react';
import CollapseItem from './CollapseItem';


const Menudefilant = () => {
    const [menu,setMenu]=useState([]);
    
    useEffect(() => {
      fetch('../data/descriptionAbout.json')
        .then(res => res.json())
        .then(data => {
          setMenu(data);
        })
        .catch(error => console.error(error));
    }, []);


    return (
    <div className="menuDefilant">
      {menu.map((item, index) => (
        <CollapseItem
        className="titreMenu"
          key={item.id}
          title={item.title}
          content={<p>{item.description}</p>}
          isOpen={false} 
          toggleCollapse={() => {}}
        />
      ))}
    </div>
    );
};

export default Menudefilant;