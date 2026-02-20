import { useState } from 'react';
import CharacterModal from './CharacterModal';

const CharacterCard = ({ data, house }) => {
  const [modalData, setModalData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const getModalData = async (data) => {
    setModalData(data);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className={`card ${house ? house : 'noHouseListed'}`}>
      {data.image && <img src={data.image} alt="" className="characterImg" />}
      <h3 className="name">{data.name}</h3>
      {isVisible && (
        <CharacterModal modalData={modalData} closeModal={closeModal} />
      )}
      <button
        onClick={() => getModalData(data)}
        command="show-modal"
        commandfor="character-modal"
        className="more-info"
      >
        More Information
      </button>
    </div>
  );
};

export default CharacterCard;
