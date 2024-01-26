import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPost: null,
  refreshPost: false,
};

const homePageReducer = createSlice({
  name: "homePageReducer",
  initialState,
  reducers: {
    setAllPost: (state, action) => {
      state.allPost = action.payload;
    },
    refreshHomePost: (state) => {
      state.refreshPost = !state.refreshPost;
    },
  },
});

export const { setAllPost, refreshHomePost } = homePageReducer.actions;
export default homePageReducer.reducer;
