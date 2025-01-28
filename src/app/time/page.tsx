"use client";

import { useState, useEffect } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmWebsite, setAlarmWebsite] = useState("");
  const [timeUntilAlarm, setTimeUntilAlarm] = useState("");

  useEffect(() => {
    // Get stored alarm details
    const storedTime = localStorage.getItem("alarmTime");
    const storedWebsite = localStorage.getItem("alarmWebsite");
    
    if (storedTime) setAlarmTime(storedTime);
    if (storedWebsite) setAlarmWebsite(storedWebsite);

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);

      if (storedTime) {
        const [hours, minutes] = storedTime.split(":");
        const alarmDate = new Date();
        alarmDate.setHours(parseInt(hours));
        alarmDate.setMinutes(parseInt(minutes));
        alarmDate.setSeconds(0);

        // If alarm time has passed for today, set it for tomorrow
        if (now > alarmDate) {
          alarmDate.setDate(alarmDate.getDate() + 1);
        }

        // Calculate time difference
        const timeDiff = alarmDate.getTime() - now.getTime();
        const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        setTimeUntilAlarm(`${hoursLeft}h ${minutesLeft}m`);

        // Check if alarm should trigger
        if (
          now.getHours() === parseInt(hours) &&
          now.getMinutes() === parseInt(minutes) &&
          now.getSeconds() === 0
        ) {
          if (storedWebsite) {
            window.open(storedWebsite, "_blank");
          }
        }
      }
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-28 px-7 leading-relaxed flex flex-col items-center">
      <h1 className="font-black text-4xl mb-8">
        {currentTime.toLocaleTimeString()}
      </h1>
      
      {alarmTime && (
        <div className="text-center space-y-4">
          <p className="text-xl">
            Alarm set for: <span className="font-bold">{alarmTime}</span>
          </p>
          {timeUntilAlarm && (
            <p className="text-lg">
              Time until alarm: <span className="font-bold">{timeUntilAlarm}</span>
            </p>
          )}
          {alarmWebsite && (
            <p className="text-sm opacity-75">
              Website: {alarmWebsite}
            </p>
          )}
        </div>
      )}
    </section>
  );
}