import { useState, useEffect } from 'react';

const useLogements = () => {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('../data/logements.json')
      .then(response => response.json())
      .then(data => {
        setLogements(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);
  

  const getLogementById = (id) => {
    return logements.find(logement => logement.id === id);
  }

  return { logements, isLoading, getLogementById };
};

export default useLogements;