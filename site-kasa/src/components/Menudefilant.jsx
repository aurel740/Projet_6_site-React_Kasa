import React, {useEffect,useState} from 'react';
import axios from 'axios';
import "../style/components/Menudefilant.css";
import Dropdown from './Dropdown';


const Menudefilant = () => {
    const [menu,setMenu]=useState([]);
    
    useEffect(() => {
        axios.get('../data/descriptionAbout.json')
          .then(res => {
            setMenu(res.data);
          })
          .catch(error => console.error(error));
      }, []);


    return (

<>
<Dropdown data={menu} type={"title"} type1={'description'}/>
</>
    );
};

export default Menudefilant;