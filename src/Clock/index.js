import useCurrentData from "../useCurrentData";
import { Container } from "./styled";

const Clock = () => {
  const { formattedDate } = useCurrentData();

  return (
    <Container>
      <p>Dziś jest {formattedDate}</p>
    </Container>
  );
};

export default Clock;
