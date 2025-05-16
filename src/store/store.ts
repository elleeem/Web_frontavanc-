import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./slices/pokemon-slice";
import trainerreducer from "./slices/trainer-slices";
import { pokemonApi } from "../api/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; 29