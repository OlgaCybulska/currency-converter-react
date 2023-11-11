import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  let [currentDate, setCurrentDate] = useState(new Date());

  const formattedDate = currentDate.toLocaleString("pl-PL", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <p>Dziś jest {formattedDate}</p>
    </div>
  );
};

export default Clock;
