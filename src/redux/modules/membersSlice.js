import { createSlice } from '@reduxjs/toolkit'

const initialState = "전체"

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    switchMember: (state, action) => {
      const selectMember = action.payload;
      return selectMember
    }
  }
})

export default membersSlice.reducer;
export const { switchMember } = membersSlice.actions;