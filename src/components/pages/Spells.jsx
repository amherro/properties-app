import React from 'react';
import Header from '../Header';
import Searchbox from '../search/Searchbox';

const Spells = () => {
  return (
    <>
      <Searchbox
        url="https://hp-api.onrender.com/api/spells"
        pageName="Spells"
      />
    </>
  );
};

export default Spells;
