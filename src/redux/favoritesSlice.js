import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const favoriteAdaptor = createEntityAdapter();
const initialState = favoriteAdaptor.getInitialState()

export const favoriteSelectors = favoriteAdaptor.getSelectors(state => state.favorites)

const favoritesSlice = createSlice({
    name:"favorites",
    initialState:initialState,
    reducers:{
        addFavorite: favoriteAdaptor.addOne,
        deleteFavorite: favoriteAdaptor.removeOne,
    },
});

export const {addFavorite,deleteFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;