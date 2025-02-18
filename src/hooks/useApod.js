// src/hooks/useApod.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useApod = (initialDate) => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`,
        );
        setApod(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, [date]);

  return { apod, loading, error, date, setDate };
};

export default useApod;