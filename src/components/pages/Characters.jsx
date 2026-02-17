// import React from 'react';
import Searchbox from '../search/Searchbox';

const Characters = () => {
  return (
    <>
      <Searchbox
        url="https://hp-api.onrender.com/api/characters"
        pageName="Characters"
      />
    </>
  );
};

export default Characters;
