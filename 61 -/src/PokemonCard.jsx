import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };
    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      {pokemonDetails && (
        <>
          <h3>{pokemonDetails.name}</h3>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <div className="pokemon-details">
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonCard;