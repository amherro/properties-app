import CharacterCard from './CharacterCard';

const ChacterCardHome = ({ results, loading }) => {
  return (
    <div className="results-section">
      {loading ? (
        <h3 className="data-loading-header">Loading...</h3>
      ) : (
        results.map((result, index) => (
          <CharacterCard
            key={result.id}
            data={result}
            house={result.house.toLowerCase()}
          />
        ))
      )}
    </div>
  );
};

export default ChacterCardHome;
