const ResultsContainer = ({ searchResults, loading }) => {
  return (
    <>
      <div className="results-section">
        <h1>Results</h1>
        {loading ? (
          <h3 className="data-loading-header">Loading...</h3>
        ) : (
          searchResults.map((result, index) => <h2 key={index}>{result}</h2>)
        )}
      </div>
    </>
  );
};

export default ResultsContainer;
