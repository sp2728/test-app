import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
  },
  reducers: {
    addItem(state, action) {
      // console.log(action.payload);

      state.value.push(action.payload);
    },
    editItem(state, action) {
      state.value.forEach((element, index) => {
        if (index === action.payload) {
          element.editedStatus = true;
          element.indexEditValue = action.payload;
        }
      });
    },
    saveItem(state, action) {
      state.value.forEach((element, index) => {
        if (index === action.payload.index) {
          element.search = action.payload.search;
          element.editedStatus = false;
        }
      });
    },
    cancelItem(state, action) {
      state.value.forEach((element, index) => {
        if (index === action.payload.index) {
          element.editedStatus = false;
        }
      });
    },
    deleteItem(state, action) {
      delete state.value[action.payload];
    },
  },
});

export const { addItem, editItem, saveItem, cancelItem, deleteItem } =
  itemsSlice.actions;
export default itemsSlice.reducer;
