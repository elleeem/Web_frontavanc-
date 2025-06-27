import React, { useState } from 'react';
import { PokeList, DetailView, Pokemon } from '../components';
import { useUser } from '../UserContext';

type PokemonData = {
  id: number;
  name: string;
  sprite: string;
  type: string;
  height: number;
  weight: number;
};

export const Main: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonData>({
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    type: 'grass',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  });

  const { currentUser, setCurrentUser, capturedPokemons, setCapturedPokemons } = useUser();

  const handleOnClick = (id: number): void => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        const newPokemon: PokemonData = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          type: data.types[0]?.type.name || 'unknown',
          sprite: data.sprites.front_default,
        };
        setPokemon(newPokemon);
      })
      .catch((err) => console.log(err));
  };

  const capturePokemon = (id: number) => {
    if (!currentUser) {
      alert('Sélectionnez un utilisateur');
      return;
    }
    setCapturedPokemons((prev) => {
      const userCaptures = prev[currentUser] || [];
      if (userCaptures.includes(id)) return prev; // déjà capturé

      return {
        ...prev,
        [currentUser]: [...userCaptures, id],
      };
    });
  };

  return (
    <div className="App">
      <h2>Sélection de l'utilisateur :</h2><br />

      <div className="button-group"><br/>
        <button onClick={() => setCurrentUser('Utilisateur 1')}>Utilisateur 1</button>
        <button onClick={() => setCurrentUser('Utilisateur 2')}>Utilisateur 2</button>
      </div>

      <p>Utilisateur actif : {currentUser || 'aucun'}</p>

      <PokeList handleOnClick={handleOnClick} />

      <DetailView pokemon={pokemon} />

      <button className='captured' onClick={() => capturePokemon(pokemon.id)}>Capturer ce Pokémon</button>

      <h3>Pokémons capturés par {currentUser} :</h3>
      <ul>
        {(capturedPokemons[currentUser || ''] || []).map((id) => (
          <li key={id}>Pokémon #{id}</li>
        ))}
      </ul>
    </div>
  );
};
