import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		saveSearchValue(state, action) {
			return action.payload;
		},
	},
});

export const { saveSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
