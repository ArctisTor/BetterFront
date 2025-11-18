import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../slices/filterSlice";

const store = configureStore({
    reducer: {
        filters: filterReducer
    }
});

// Export RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

export default store;