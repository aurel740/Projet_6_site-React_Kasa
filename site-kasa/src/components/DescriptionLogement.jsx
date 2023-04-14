import React from 'react';
import useLogements from '../Hooks/useLogements';
import "../style/components/DescriptionLogement.css";
import Carousel from './Carousel';
import DropdownFiche from './DropdownFiche';
import Rating from './Rating';

const DescriptionLogement = ({id}) => {
    const {getLogementById}=useLogements();
    const logement=getLogementById(id);

    if(!logement){
        return <div>Loading...</div>
    }

    return (
        <section className='DescriptionLogement'>
            <Carousel id={id}/>
            <div className='en-tete'>
            <div className='en-tete1'>
            <h2>{logement.title}</h2>
            <h3>{logement.location}</h3>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            </div>
            <div className='host'>
                <span className='profil'>
                    <span className='nom'>
                {logement.host.name.split(' ')[0]}
        <br />
        {logement.host.name.split(' ')[1]}
        </span>
                    <img src={logement.host.picture} alt="" />
                </span>
                <span className='rating'><Rating rating={logement.rating} /></span>
            </div>
            </div>
            <DropdownFiche id={id}/>
        </section>
    );
};

export default DescriptionLogement;