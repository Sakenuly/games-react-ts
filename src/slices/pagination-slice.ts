import { createSlice } from '@reduxjs/toolkit';

const initialState = { paginationPage: 1, paginationCount: 10 };

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPagination(state, action) {
			return { ...state, paginationPage: action.payload };
		},
	},
});
export const { setPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
