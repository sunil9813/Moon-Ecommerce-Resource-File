//same like cart slice so that i am copying the code from git

import { createSelector, createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesItemList: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const newItem = action.payload;
      // Check if the item already exists in favorites
      const existingItemIndex = state.favoritesItemList.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        // Item already exists, increment its quantity
        state.favoritesItemList[existingItemIndex].quantity++;
      } else {
        state.favoritesItemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          cover: newItem.images,
        });
      }
    },

    removeFromFavorites(state, action) {
      const idToRemove = action.payload;
      // Remove the item from favorites by filtering out the item with the given id
      state.favoritesItemList = state.favoritesItemList.filter(
        (item) => item.id !== idToRemove
      );
    },

    clearFavorites(state) {
      // Clear the favorites list
      state.favoritesItemList = [];
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export const { clearFavorites } = favoriteSlice.actions;

// Selector function to calculate the total quantity of items in the favorites list
export const selectTotalFavorites = createSelector(
  // Pass the favorites state as the first argument
  (state) => state.favorites.favoritesItemList,
  // Calculate the total number of items in the favorites list
  (favoritesItemList) => favoritesItemList.length
);

export default favoriteSlice;
