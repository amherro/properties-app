const ResultsContainer = ({ searchResults, loading }) => {
  return (
    <>
      <div className="results-section">
        <h1>Results</h1>
        {loading ? (
          <h3 className="data-loading-header">Loading...</h3>
        ) : (
          searchResults.map((result, index) => (
            <div key={result.id} className="card">
              <h2>{result.name}</h2>
              <p>{result.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ResultsContainer;
