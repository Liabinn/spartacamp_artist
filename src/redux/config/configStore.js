import lettersSlice from "redux/modules/lettersSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    lettersSlice,
  }
})

export default store;