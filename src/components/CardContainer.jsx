import { useLocation } from 'react-router';
import SpellCard from './SpellCard';
import CharacterCard from './CharacterCard';
const Card = ({ data }) => {
  const location = useLocation();
  return (
    <>
      {(() => {
        if (location.pathname === '/spells') {
          return <SpellCard data={data} />;
        } else if (location.pathname === '/characters') {
          return <CharacterCard data={data} />;
        }
      })()}
    </>
  );
};

export default Card;
