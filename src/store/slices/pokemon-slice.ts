import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface capturedPokemonsAndUser {
    userId: number;
    pokemonId: number;
}

export interface PokemonCapturedState {
    capturedPokemonIds: capturedPokemonsAndUser[];
}

const initialState: PokemonCapturedState = {
    capturedPokemonIds: [],
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addCapturedPokemon: (state, action: PayloadAction<capturedPokemonsAndUser>) => {
            state.capturedPokemonIds.push(action.payload);
        },
        removeCapturedPokemon: (state, action: PayloadAction<capturedPokemonsAndUser>) => {
            state.capturedPokemonIds = state.capturedPokemonIds.filter(
                (id) => id !== action.payload
            );
        },
    },
});

export const { addCapturedPokemon, removeCapturedPokemon } =
    pokemonSlice.actions;
export default pokemonSlice.reducer; 