export interface Pokemon {
    name: string;
    url: string;
    imageUrl?: string;
    pokedex_id: number
}

export interface User {
    name: string;
    team: Pokemon[];
}
