import { useState, useEffect } from 'react';

const useLongPolling = (endpoint, interval = 5000) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const newData = await response.json();
      console.log(newData)
      setData(newData);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    const poll = async () => {
      await fetchData();
      setTimeout(poll, interval);
    };

    poll(); // Inicia el primer polling al montar el componente

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(poll);
    };
  }, [endpoint, interval]); // El segundo argumento [endpoint, interval] asegura que useEffect se ejecute solo cuando estos valores cambien

  return data;
};

export default useLongPolling;
