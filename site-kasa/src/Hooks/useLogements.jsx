import { useState, useEffect } from 'react';
import axios from 'axios';

const useLogements = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    axios.get('../data/logements.json')
      .then(res => {
        setLogements(res.data);
      })
      .catch(error => console.error(error));
  }, []);

  const getLogementById = (id) => {
    return logements.find(logement => logement.id === id);
  }

  return { logements, getLogementById };
};

export default useLogements;