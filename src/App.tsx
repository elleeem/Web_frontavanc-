import React, { useEffect, useState } from "react";
import { Pokemon, User } from "./types";
import UserSelector from "./components/UserSelector";
import PokemonList from "./components/Pokedex";
import UserTeam from "./components/WelcomePage";
import "./assets/fonts.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { name: "Utilisateur 1", team: [] }, //Tableau des utilisateurs avec chacun une team vide
    { name: "Utilisateur 2", team: [] }
  ]);
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10") //librairie de base intégrée à JS. Autre axios
      .then(res => res.json())
      .then(data => {
        const pokemonWithImages = data.results.map((pokemon: Pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return {
            ...pokemon,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
        setPokemonList(pokemonWithImages);
      });
  }, []); //Mettre un catch pour gérer les erreurs. Mettre le [] parce que sinon le useEffect tourne en boucle


  const addToTeam = (pokemon: Pokemon) => {
    const newUsers = [...users];
    newUsers[currentUserIndex].team.push(pokemon);
    setUsers(newUsers);
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <UserSelector
        currentUserIndex={currentUserIndex}
        setCurrentUserIndex={setCurrentUserIndex}
        userNames={users.map((u) => u.name)}
      />
      <h2>Sélection de Pokémon pour {users[currentUserIndex].name}</h2>
      <PokemonList pokemonList={pokemonList} onSelect={addToTeam} />
      <UserTeam
        userName={users[currentUserIndex].name}
        team={users[currentUserIndex].team}
      />
    </div>
  );
};

export default App;
