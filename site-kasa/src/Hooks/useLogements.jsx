import { useState, useEffect } from 'react';
// import axios from 'axios';

const useLogements = () => {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   axios.get('../data/logements.json')
  //     .then(res => {
  //       setLogements(res.data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

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