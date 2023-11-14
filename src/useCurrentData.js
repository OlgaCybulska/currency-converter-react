import { useState, useEffect } from "react";

const useCurrentData = () => {
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

  return {
    formattedDate,
  };
};
export default useCurrentData;
