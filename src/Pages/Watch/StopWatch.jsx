import React, { useState, useEffect } from 'react';
import "../Watch/StopWatch.css"
import { Link } from 'react-router-dom';

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [dailyData, setDailyData] = useState([]);
  const [isGPSEnabled, setIsGPSEnabled] = useState(false);

  useEffect(() => {
    // Check if geolocation is available
    if ('geolocation' in navigator) {
      setIsGPSEnabled(true);
    } else {
      setIsGPSEnabled(false);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        setElapsedTime(now - startTime);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const handleStartStop = () => {
    if (isGPSEnabled) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (isRunning) {
            setEndTime(new Date().getTime());
            setIsRunning(false);

            // Store elapsed time data day-wise
            const formattedDate = new Date().toLocaleDateString();
            const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
            const existingDataIndex = dailyData.findIndex((data) => data.date === formattedDate);

            if (existingDataIndex !== -1) {
              const updatedData = [...dailyData];
              const existingDayIndex = updatedData[existingDataIndex].startTimes.findIndex(
                (start) => start.day === dayName
              );

              if (existingDayIndex !== -1) {
                // Timer started again on the same day, update only the end time
                updatedData[existingDataIndex].endTimes[existingDayIndex] = {
                  time: new Date().getTime(),
                  day: dayName,
                };
              } else {
                // New start time on the same day
                updatedData[existingDataIndex].startTimes.push({
                  time: startTime,
                  day: dayName,
                });
                updatedData[existingDataIndex].endTimes.push({
                  time: new Date().getTime(),
                  day: dayName,
                });
              }

              setDailyData(updatedData);
            } else {
              setDailyData([
                ...dailyData,
                {
                  date: formattedDate,
                  day: dayName,
                  startTimes: [
                    {
                      time: startTime,
                      day: dayName,
                    },
                  ],
                  endTimes: [
                    {
                      time: new Date().getTime(),
                      day: dayName,
                    },
                  ],
                },
              ]);
            }
          } else {
            setStartTime(new Date().getTime() - elapsedTime);
            setIsRunning(true);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Please enable GPS for this feature to work.');
        }
      );
    } else {
      alert('GPS is not available on this device.');
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(1);
    return `${minutes}:${seconds}` ;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-header">Here is your Records!</h1>
      <div className="stopwatch-display">
        <p>{formatTime(elapsedTime)}</p>
      </div>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={handleStartStop} disabled={!isGPSEnabled}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
      <div className="stopwatch-data">
        <h2>Elapsed Time Data (Day-wise)</h2>
        <table className="stopwatch-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {dailyData.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.day}</td>
                <td>
                  {data.startTimes.map((start, i) => (
                    <div key={i}>
                      {start.day}: {new Date(start.time).toLocaleTimeString()}
                    </div>
                  ))}
                </td>
                <td>
                  {data.endTimes.map((end, i) => (
                    <div key={i}>
                      {end.day}: {new Date(end.time).toLocaleTimeString()}
                    </div>
                  ))}
                </td>
              </tr>

              
            ))}
          </tbody>
        </table>

      </div>
      <Link to="/">

      <button className='back'>Back</button>
      </Link>
    </div>
  );
};

export default Stopwatch;