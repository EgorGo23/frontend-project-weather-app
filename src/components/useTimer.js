import { useEffect, useState } from 'react';
import getFormattedDate from '../getFormattedDate';

const useTimer = () => {
  const [timer, setTimer] = useState(getFormattedDate());
  const tick = () => setTimer(getFormattedDate());

  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000,
    );
    return () => clearInterval(timerID);
  }, [timer]);


  return timer;
};

export default useTimer;
