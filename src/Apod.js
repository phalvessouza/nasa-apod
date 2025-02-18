import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApodTitle from './components/ApodTitle';
import ApodImage from './components/ApodImage';
import ApodExplanation from './components/ApodExplanation';
import { ClipLoader } from 'react-spinners';

const Apod = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
        );
        setApod(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) return <ClipLoader color="#00BFFF" loading={loading} size={150} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Apod">
      <ApodTitle title={apod.title} />
      <p>{apod.date}</p>
      <ApodImage url={apod.url} title={apod.title} />
      <ApodExplanation explanation={apod.explanation} />
    </div>
  );
};

export default Apod;