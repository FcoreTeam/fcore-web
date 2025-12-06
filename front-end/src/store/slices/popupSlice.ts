import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupData: (state, action) => {
      const { isOpen, type } = action.payload;
      state.isOpen = isOpen;
      state.type = type;
    },
  },
});

export const { setPopupData } = popupSlice.actions;

export default popupSlice.reducer;
