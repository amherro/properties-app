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
      const slicedData = data.slice(0, 8);
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
      const slicedData = data.slice(0, 4);
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
      <section className="home-content">
        <h2 className="home-heading">
          An enchanted collection of Harry Potter characters and spells.
        </h2>
        <div className="home-result-container">
          <h3 className="home-section-heading">Characters</h3>
          <ChacterCardHome results={characterResults} loading={loading} />
        </div>
        <div className="spells-home">
          <h3 className="spells-home home-section-heading">Spells</h3>
          <SpellCardHome results={spellResults} loading={loading} />
        </div>
      </section>
    </>
  );
};

export default Home;
