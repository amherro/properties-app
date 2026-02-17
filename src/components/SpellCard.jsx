import React from 'react';

const SpellCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default SpellCard;
