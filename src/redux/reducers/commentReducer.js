import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentList: null,
  refreshCom: false,
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    setCommentList: (state, action) => {
      state.commentList = action.payload;
    },
    refreshComment: (state) => {
      state.refreshCom = !state.refreshExp;
    },
  },
});

export const { setCommentList, refreshComment } = commentReducer.actions;
export default commentReducer.reducer;
