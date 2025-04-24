import React from "react";
import { Pokemon } from "../types";

interface Props {
    pokemonList: Pokemon[];
    onSelect: (pokemon: Pokemon) => void;
}

const Pokedex: React.FC<Props> = ({ pokemonList, onSelect }) => {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {pokemonList.map((pokemon) => (
                <li key={pokemon.name} style={{ marginBottom: "1rem" }}>
                    <img src={pokemon.imageUrl} alt={pokemon.name} width="72" height="72" />
                    <span style={{ margin: "0 1rem" }}>{pokemon.name}</span>
                    <button onClick={() => onSelect(pokemon)}>Ajouter</button>
                </li>
            ))}
        </ul>
    );
};

export default Pokedex;
