import CharacterCard from '../CharacterCard';
import ResultsContainer from '../search/ResultsContainer';
import ChacterCardHome from '../CharacterCardHome';
import { useState, useEffect, use } from 'react';

const Home = () => {
  const [characterResults, setCharacterResults] = useState([]);
  const [spellResults, setSpellResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://hp-api.onrender.com/api/characters');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      const slicedData = data.slice(0, 5);
      setCharacterResults(slicedData);
    } catch (error) {
      toast('Something went wrong...', { className: 'error-toast' });
      throw new Error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <h2 className="home-heading">
        Pick a category to learn more
        <br /> about the world of Harry Potter
      </h2>
      <section className="characters-home">
        <h3>Characters</h3>
        {/* {characterResults.map((character) => {
          <CharacterCard
            data={character}
            house={character.house.toLowerCase()}
            key={character.id}
          />;
        })} */}
        <ChacterCardHome results={characterResults} loading={loading} />
      </section>
    </>
  );
};

export default Home;
