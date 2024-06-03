import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    shirts: 0,
    shoes: 0,
    jeans: 0,
  },
  reducers: {
    addShirts: (state, action) => {
      state.shirts = action.payload;
    },
    addShoes: (state, action) => {
      state.shoes = action.payload;
    },
    addJeans: (state, action) => {
      state.jeans = action.payload;
    },
  },
});

export const { addShirts, addShoes, addJeans } = productSlice.actions;
export default productSlice.reducer;
