import React, { useState, useEffect } from 'react';

const TrackedHours = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isTracking) {
      setStartTime(Date.now() - elapsedTime);

      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isTracking, elapsedTime, startTime]);

  const startTracking = () => {
    setIsTracking(true);
  };

  const stopTracking = () => {
    setIsTracking(false);
  };

  const resetTracking = () => {
    setIsTracking(false);
    setStartTime(null);
    setElapsedTime(0);
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = seconds % 60;

    return `${minutes}:${formattedSeconds < 10 ? '0' : ''}${formattedSeconds}`;
  };

  return (
    <div>
      <h2>Tracked Hours</h2>
      <div>
        <p>Time: {formatTime(elapsedTime)}</p>
        {!isTracking ? (
          <button onClick={startTracking}>Start Tracking</button>
        ) : (
          <button onClick={stopTracking}>Stop Tracking</button>
        )}
        <button onClick={resetTracking}>Reset</button>
      </div>
    </div>
  );
};

export default TrackedHours;
