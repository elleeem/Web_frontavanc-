import { useState, useEffect } from 'react';
import PokeCell from '../PokeCell';
import './PokeList.css';

type PokemonItem = {
    name: string;
    url: string;
};

type PokeListProps = {
    handleOnClick: (id: number) => void;
};

const PokeList: React.FC<PokeListProps> = ({ handleOnClick }) => {
    const [pokemon, setPokemon] = useState<PokemonItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            const pokemonList: PokemonItem[] = data.results;
            setPokemon(pokemonList);
        };

        fetchData();
    }, []);

    return (
        <section className="poke-list">
            {pokemon.map((_, id) => (
                <PokeCell key={id} pokeClass={id} handleOnClick={handleOnClick} />
            ))}
        </section>
    );
};

export default PokeList;
