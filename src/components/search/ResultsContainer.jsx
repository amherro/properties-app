import CardContainer from '../CardContainer';

const ResultsContainer = ({ results, loading }) => {
  return (
    <>
      <div className="results-section">
        {loading ? (
          <h3 className="data-loading-header">Loading...</h3>
        ) : results.length !== 0 ? (
          results.map((result, index) => (
            <CardContainer key={result.id} data={result} />
          ))
        ) : (
          <p className="no-result-message">
            No results to display. Please try something else.
          </p>
        )}
      </div>
    </>
  );
};

export default ResultsContainer;
