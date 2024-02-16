import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const existingUser = state.find((user) => user.id == action.payload.id);
      if (existingUser) {
        existingUser.name = action.payload.name;
        existingUser.email = action.payload.email;
      }
    },
    deleteUser: (state, action) => {
      const existingUser = state.find((user) => user.id == action.payload.id);

      if (existingUser) {
        return state.filter((user) => user.id !== action.payload.id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
