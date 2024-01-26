import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: null,
  myExperience: null,
  refreshExp: false,
  randomProfile: null,
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    setMyProfile: (state, action) => {
      state.myProfile = action.payload;
    },
    setMyExperience: (state, action) => {
      state.myExperience = action.payload;
    },
    refreshExperience: (state) => {
      state.refreshExp = !state.refreshExp;
    },
    setRandomProfile: (state, action) => {
      state.randomProfile = action.payload;
    },
  },
});

export const { setMyProfile, setMyExperience, refreshExperience, setRandomProfile } = profileReducer.actions;

export default profileReducer.reducer;
