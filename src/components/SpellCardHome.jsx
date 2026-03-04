import React from 'react';
import SpellCard from './SpellCard';

const SpellCardHome = ({ results, loading }) => {
  return (
    <>
      <div className="results-section">
        {loading ? (
          <h3 className="data-loading-header">Loading...</h3>
        ) : (
          results.map((result, index) => (
            <SpellCard key={result.id} data={result} />
          ))
        )}
      </div>
    </>
  );
};

export default SpellCardHome;
