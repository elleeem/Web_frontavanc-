type RawPokemonData = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
};

class Pokemon {
    id: number;
    name: string;
    sprite: string;
    type: string;
    height: number;
    weight: number;

    constructor(data: RawPokemonData) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0]?.type.name ?? 'unknown';
        this.height = data.height;
        this.weight = data.weight;
    }
}

export default Pokemon;
