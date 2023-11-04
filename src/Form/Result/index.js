export const Result = ({ result }) => (
  <p>
    {!!result && (
      <>
        Po wymianie <strong>{result.sourceAmount.toFixed(2)}&nbsp;</strong>{" "}
        złotych&nbsp; otrzymasz&nbsp;
        <strong>{result.targetAmount.toFixed(2)}&nbsp;</strong>
        {result.resultName}
      </>
    )}
  </p>
);

export default Result;
