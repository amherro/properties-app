import React from 'react';

const CharacterCard = ({ data, house }) => {
  return (
    <div className={`card ${house ? house : 'noHouseListed'}`}>
      <h3 className="name">{data.name}</h3>
      <p className="house">House: {data.house ? data.house : 'N/A'}</p>
      <p className="dob">DOB: {data.dateOfBirth ? data.dateOfBirth : 'N/A'}</p>
      <p className="patronus">
        {data.patronus.toUpperCase() && `Patronus: ${data.patronus}`}
      </p>
    </div>
  );
};

export default CharacterCard;
