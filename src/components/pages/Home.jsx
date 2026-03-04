import ChacterCardHome from '../CharacterCardHome';
import SpellCardHome from '../SpellCardHome';
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
      const slicedData = data.slice(0, 3);
      setCharacterResults(slicedData);
    } catch (error) {
      toast('Something went wrong...', { className: 'error-toast' });
      throw new Error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchSpells = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://hp-api.onrender.com/api/spells');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      const slicedData = data.slice(0, 3);
      setSpellResults(slicedData);
    } catch (error) {
      toast('Something went wrong...', { className: 'error-toast' });
      throw new Error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
    fetchSpells();
  }, []);

  return (
    <>
      <h2 className="home-heading">
        Learn more about the world of Harry Potter
      </h2>
      <section className="home-content">
        <h3 className="characters-home home-section-heading">Characters</h3>
        <ChacterCardHome results={characterResults} loading={loading} />
        <h3 className="spells-home home-section-heading">Spells</h3>
        <SpellCardHome results={spellResults} loading={loading} />
      </section>
    </>
  );
};

export default Home;
