import { createSlice, configureStore } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		filters: [""],
	},
	reducers: {
		addFilter: (state, action) => {
			state.filters = [...state.filters, action.payload];
		},
		removeFilter: (state, action) => {
			state.filters = state.filters.filter((flt) => flt !== action.payload);
		},
	},
});

export const { addFilter, removeFilter } = filterSlice.actions;

export const store = configureStore({
	reducer: filterSlice.reducer,
});
