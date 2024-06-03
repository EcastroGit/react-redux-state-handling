import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    address: "",
    email: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { name, username, address, email } = action.payload;
      state.name = name;
      state.username = username;
      state.address = address.street;
      state.email = email;
    },
    changeAddress: (state, action) => {
      state.address = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeAddress, changeEmail } = userSlice.actions;
export default userSlice.reducer;
