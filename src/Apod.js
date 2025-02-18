import React from 'react';
import dayjs from 'dayjs';
import ApodTitle from './components/ApodTitle';
import ApodImage from './components/ApodImage';
import ApodVideo from './components/ApodVideo'; // Novo componente para vídeos
import ApodExplanation from './components/ApodExplanation';
import NavigationButton from './components/NavigationButton';
import { ClipLoader } from 'react-spinners';
import useApod from './hooks/useApod';

const Apod = () => {
  const { apod, loading, error, date, setDate } = useApod(dayjs().format('YYYY-MM-DD'));
  const today = dayjs().format('YYYY-MM-DD');

  const handlePreviousDay = () => {
    setDate(dayjs(date).subtract(1, 'day').format('YYYY-MM-DD'));
  };

  const handleNextDay = () => {
    if (!dayjs(date).isSame(today, 'day')) {
      setDate(dayjs(date).add(1, 'day').format('YYYY-MM-DD'));
    }
  };

  const isNextDayDisabled = dayjs(date).isSame(today, 'day');
  console.log('isNextDayDisabled:', isNextDayDisabled);

  if (loading) return <ClipLoader color="#00BFFF" loading={loading} size={150} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Apod">
      <ApodTitle title={apod.title} />
      <p>{apod.date}</p>
      {apod.media_type === 'video' ? (
        <ApodVideo url={apod.url} title={apod.title} />
      ) : (
        <ApodImage url={apod.url} title={apod.title} />
      )}
      <ApodExplanation explanation={apod.explanation} />
      <NavigationButton onClick={handlePreviousDay}>Previous Day</NavigationButton>
      <NavigationButton onClick={handleNextDay} disabled={isNextDayDisabled}>
        Next Day
      </NavigationButton>
    </div>
  );
};

export default Apod;
