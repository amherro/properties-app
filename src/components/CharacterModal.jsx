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
      <h3 className="name">{modalData.name}</h3>
      <p className="house">
        House: {modalData.house ? modalData.house : 'N/A'}
      </p>
      <p className="dob">
        DOB: {modalData.dateOfBirth ? modalData.dateOfBirth : 'N/A'}
      </p>
      <p className="patronus">
        {modalData.patronus && `Patronus: ${modalData.patronus}`}
      </p>
      <p className="ancestry">
        {modalData.ancestry && `Ancestry: ${modalData.ancestry}`}
      </p>
    </dialog>
  );
};

export default CharacterModal;
