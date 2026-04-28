import { useState } from 'react';
import CharacterModal from './CharacterModal';
import Icon from '@mdi/react';
import { mdiLightningBoltOutline } from '@mdi/js';

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
      <div className={`${house}-card-top`}></div>
      {data.image ? <img src={data.image} className="characterImg" /> : <Icon className='no-image-icon' path={mdiLightningBoltOutline} size={3} alt=""  />}
      <div className="card-info">
        <h3 className="name">{data.name}</h3>
        {isVisible && (
          <CharacterModal modalData={modalData} closeModal={closeModal} />
        )}
        <p className='actor'>Portrayed by: {data.actor}</p>
        <div className={`house-pill ${house}-house-pill`}>
          <p className={`house ${house}-badge`}>{data.house}</p>
        </div>

        {/* <button
          onClick={() => getModalData(data)}
          command="show-modal"
          commandfor="character-modal"
          className="more-info"
        >
          More Information
        </button> */}
      </div>
    </div>
  );
};

export default CharacterCard;
