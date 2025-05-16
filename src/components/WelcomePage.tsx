import React from "react";
import { IPokemonData } from "../types";
import "../App.css";

interface Props {
    userName: string;
    team: IPokemonData[];
}

const WelcomePage: React.FC<Props> = ({ userName, team }) => {
    return (
        <div>
            <h3>Équipe de {userName}</h3>
            {team.length === 0 ? (
                <p>Aucun Pokémon sélectionné.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {team.map((pokemon) => (
                        <li key={pokemon.name.fr} style={{ marginBottom: "1rem" }}>
                            <img
                                src={pokemon.sprites.regular}
                                alt={pokemon.name.fr}
                                width="72"
                                height="72"
                            />
                            <span style={{ marginLeft: "1rem" }}>{pokemon.name.fr}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WelcomePage;