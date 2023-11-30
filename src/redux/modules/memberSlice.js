import { createSlice } from "@reduxjs/toolkit";

const initialState = "전체"

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    selectMember: (state, action) => {
      const selectedMember = action.payload;
      return selectedMember
    },
  }
});

export default memberSlice.reducer;
export const {selectMember} = memberSlice.actions;