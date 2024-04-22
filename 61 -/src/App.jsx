// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';
import './index.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1 className="title">PokeInfo</h1>
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="pokemon-container">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
