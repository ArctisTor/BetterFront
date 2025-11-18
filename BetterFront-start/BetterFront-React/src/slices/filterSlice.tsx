import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FilterOption {
    query: string;
    category: string;
}

interface FilterState {
    filters: FilterOption[]; // Correct type
}

const initialState: FilterState = {
    filters: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<FilterOption>) => {
      state.filters.push(action.payload);
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.filters.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement} = filterSlice.actions;

export default filterSlice.reducer;
