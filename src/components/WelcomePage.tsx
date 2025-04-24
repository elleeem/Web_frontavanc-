import React from "react";
import { Pokemon } from "../types";
import "../App.css";

interface Props {
    userName: string;
    team: Pokemon[];
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
                        <li key={pokemon.name} style={{ marginBottom: "1rem" }}>
                            <img src={pokemon.imageUrl} alt={pokemon.name} width="72" height="72" />
                            <span style={{ marginLeft: "1rem" }}>{pokemon.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WelcomePage;
