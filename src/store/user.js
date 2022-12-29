import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  nickname: "",
};

const user = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    removeUser: () => initialState,
  },
});

export const { setUser, removeUser } = user.actions;
export const userSelector = (state) => state.user;
export default user;
