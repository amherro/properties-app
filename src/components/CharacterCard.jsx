import React from 'react';

const CharacterCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>{data.house}</p>
      <p>{data.dateOfBirth}</p>
      <p>{data.patronus.toUpperCase()}</p>
    </div>
  );
};

export default CharacterCard;
