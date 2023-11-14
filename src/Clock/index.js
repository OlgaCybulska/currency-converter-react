import useCurrentData from "../useCurrentData";
import "./style.css";

const Clock = () => {
  const { formattedDate } = useCurrentData();

  return (
    <div className="clock">
      <p>Dziś jest {formattedDate}</p>
    </div>
  );
};

export default Clock;
