import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

//use thunk to handle async request
export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchCocktails",
  async () => {
    const res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
    );
    return res.data;
  }
);

export const fetchCocktailById = createAsyncThunk<any, string>(
  "cocktail/fetchCocktailById",
  async (id: string) => {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return res.data;
  }
);

//interface for initial state
export interface CocktailState {
  loading: boolean;
  cocktails: [];
  cocktail: any[];
  error: any;
}

const initialState = {
  loading: false,
  cocktail: [],
  cocktails: [],
  error: null,
} as CocktailState;

const cocktailSlice = createSlice({
  name: "cocktails", //name of the slice , will be refer by this name
  initialState, // state when app first loads
  reducers: {}, //reducer for this slice
  //extra reducers for actions not created by our own reducers
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    });
    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(fetchCocktailById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCocktailById.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    });
    builder.addCase(fetchCocktailById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default cocktailSlice.reducer;
