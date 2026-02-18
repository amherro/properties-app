import React from 'react';
import CharacterModal from './CharacterModal';

const CharacterCard = ({ data, house }) => {
  return (
    <div className={`card ${house ? house : 'noHouseListed'}`}>
      {data.image && <img src={data.image} alt="" className="characterImg" />}
      <h3 className="name">{data.name}</h3>
      <dialog>
        <CharacterModal data={data} />
      </dialog>
      <button className="more-info">More Information</button>
    </div>
  );
};

export default CharacterCard;
