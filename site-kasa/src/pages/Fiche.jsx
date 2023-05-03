import React from 'react';
import Banniere from '../components/Banniere';
import DescriptionLogement from '../components/DescriptionLogement';
import { useParams } from 'react-router-dom';
import useLogements from '../Hooks/useLogements';
import Page404 from './Page404';

const Fiche = () => {
  const { id } = useParams();
  const { logements, isLoading }=useLogements();

  // Trouver le logement avec l'id correspondant
  const logement = logements.find((logement) => logement.id === id);

  // Si les données sont en train de charger, afficher "Loading..."
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Si le logement n'existe pas, afficher la page 404
  if (!logement) {
    return <Page404 />;
  }

  // Sinon, afficher les informations du logement
  return (
    <div className='corps'>
      <Banniere />
      <DescriptionLogement id={id} />
    </div>
  );
};

export default Fiche;

