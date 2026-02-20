import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';
const CharacterModal = ({ modalData, closeModal }) => {
  return (
    <dialog
      id="character-modal"
      className={`${modalData.house.toLowerCase() ? modalData.house.toLowerCase() : 'noHouseListed'}`}
      closedby="close"
    >
      <button
        className="modal-close"
        commandfor="character-modal"
        command="close"
        onClick={() => closeModal()}
      >
        <Icon path={mdiCloseCircleOutline} size={1.4} />
      </button>
      <span className="modal-data">
        <img
          src={modalData.image}
          alt={`Image of ${modalData.name}`}
          className="characterImg"
        />
        <h3 className="name">{modalData.name}</h3>
        <p className="dob">
          DOB: {modalData.dateOfBirth ? modalData.dateOfBirth : 'N/A'}
        </p>
        <p className="gender">Gender: {modalData.gender}</p>
        <p className="house">
          House: {modalData.house ? modalData.house : 'N/A'}
        </p>
        <p className="patronus">
          {modalData.patronus && `Patronus: ${modalData.patronus}`}
        </p>
        <p className="ancestry">
          {modalData.ancestry && `Ancestry: ${modalData.ancestry}`}
        </p>
        <p className="status">
          {`Status: ${modalData.alive ? 'Alive' : 'Deceased'}`}
        </p>
        <p className="actor">
          {modalData.actor && `Actor: ${modalData.actor}`}
        </p>
      </span>
    </dialog>
  );
};

export default CharacterModal;
