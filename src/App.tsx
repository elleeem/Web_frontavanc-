import React, { useEffect, useState } from "react";
import { IPokemonData, User } from "./types";
import UserSelector from "./components/UserSelector";
import PokemonList from "./components/Pokedex";
import UserTeam from "./components/WelcomePage";
import "./assets/fonts.css";
import { useAppDispatch } from "./hooks/UseAppDispatch";
import { useAppSelector } from "./hooks/UseAppSelector";
import {
  addCapturedPokemon,
  capturedPokemonsAndUser,
  removeCapturedPokemon,
} from "./store/slices/pokemon-slice";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { name: "Utilisateur 1", team: [] }, //Tableau des utilisateurs avec chacun une team vide
    { name: "Utilisateur 2", team: [] },
  ]);
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<IPokemonData[]>([]);
  const dispatch = useAppDispatch();
  const capturedPokemons = useAppSelector(
    (state) => state.pokemon.capturedPokemonIds
  );

  useEffect(() => {
    fetch("https://tyradex.app/api/v1/gen/1")
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données", error)
      );
  }, []);
  const addToTeam = (pokemonId: number) => {
    console.log(pokemonId);
    const alreadyIncludedPokemons: number[] = [];
    capturedPokemons.forEach((pkmn) => {
      if (currentUserIndex === pkmn.userId) {
        alreadyIncludedPokemons.push(pkmn.pokemonId);
      }
    });
    dispatch(
      alreadyIncludedPokemons.includes(pokemonId)
        ? removeCapturedPokemon({
            userId: currentUserIndex,
            pokemonId: pokemonId,
          } as capturedPokemonsAndUser)
        : addCapturedPokemon({
            userId: currentUserIndex,
            pokemonId: pokemonId,
          } as capturedPokemonsAndUser)
    );
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
