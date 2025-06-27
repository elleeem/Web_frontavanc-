import React from 'react';
import './DetailView.css';

type Pokemon = {
    id: number;
    name: string;
    sprite: string;
    type: string;
    height: number;
    weight: number;
};

type DetailViewProps = {
    pokemon: Pokemon;
};

const DetailView: React.FC<DetailViewProps> = ({ pokemon }) => {
    const { id, name, sprite, type, height, weight } = pokemon;

    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt="sprite" />
            <div className="data-wrapper">
                <h1 className="data-name">ID: {id} {name}</h1>
                <p className="data-char">Type: {type}</p>
                <p className="data-char">Height: {height}</p>
                <p className="data-char">Weight: {weight}</p>
            </div>
        </section>
    );
};

export default DetailView;
