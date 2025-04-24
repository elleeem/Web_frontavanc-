export interface Pokemon {
    name: string;
    url: string;
    imageUrl?: string;
}

export interface User {
    name: string;
    team: Pokemon[];
}
