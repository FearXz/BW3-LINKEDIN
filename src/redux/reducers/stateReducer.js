import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstState: null,
};

const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    setFirstState: (state, action) => {
      state.firstState = action.payload;
    },
  },
});

export const { setFirstState } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
