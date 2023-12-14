export const Result = ({ result }) => (
  <p>
    {!!result && (
      <>
        Po wymianie <strong>{result.sourceAmount.toFixed(2)}&nbsp;</strong>{" "}
        PLN&nbsp; otrzymasz&nbsp;
        <strong>{result.targetAmount.toFixed(2)}&nbsp;</strong>
        {result.currency}
      </>
    )}
  </p>
);

export default Result;
