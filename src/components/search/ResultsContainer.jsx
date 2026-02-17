import CardContainer from '../CardContainer';

const ResultsContainer = ({ searchResults, loading, pageName }) => {
  return (
    <>
      <div className="results-section">
        {loading ? (
          <h3 className="data-loading-header">Loading...</h3>
        ) : (
          searchResults.map((result, index) => (
            <CardContainer key={result.id} data={result} />
          ))
        )}
      </div>
    </>
  );
};

export default ResultsContainer;
