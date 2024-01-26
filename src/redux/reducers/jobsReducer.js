import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsList: null,
  jobDetail: null,
};

const jobsReducer = createSlice({
  name: "jobsReducer",
  initialState,
  reducers: {
    setJobsList: (state, action) => {
      state.jobsList = action.payload;
    },
    setJobsDetail: (state, action) => {
      state.jobDetail = action.payload;
    },
  },
});

export const { setJobsList, setJobsDetail } = jobsReducer.actions;
export default jobsReducer.reducer;
