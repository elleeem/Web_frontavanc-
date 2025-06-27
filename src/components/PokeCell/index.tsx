import React from 'react';
import './PokeCell.css';

type PokeCellProps = {
    pokeClass: number;
    handleOnClick: (id: number) => void;
};

const PokeCell: React.FC<PokeCellProps> = ({ pokeClass, handleOnClick }) => {
    return (
        <button onClick={() => handleOnClick(pokeClass + 1)} className="poke-cell">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`}
                alt={`pokemon-${pokeClass}`}
            />
        </button>
    );
};

export default PokeCell;
