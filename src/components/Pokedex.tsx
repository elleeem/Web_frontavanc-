import React from "react";
import { IPokemonData } from "../types";

interface Props {
    pokemonList: IPokemonData[];
    onSelect: (pokemon: number) => void;
}

const Pokedex: React.FC<Props> = ({ pokemonList, onSelect }) => {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {pokemonList.map((pokemon) => (
                <li key={pokemon.name.fr} style={{ marginBottom: "1rem" }}>
                    <img
                        src={pokemon.sprites.regular}
                        alt={pokemon.name.fr}
                        width="72"
                        height="72"
                    />
                    <span style={{ margin: "0 1rem" }}>{pokemon.name.fr}</span>
                    <button onClick={() => onSelect(pokemon.pokedex_id)}>Ajouter</button>
                </li>
            ))}
        </ul>
    );
};

export default Pokedex;