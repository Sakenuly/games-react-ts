import { createSlice } from '@reduxjs/toolkit';

const initialState = 'released';

const selectSlice = createSlice({
	name: 'sortSelect',
	initialState,
	reducers: {
		selectValue(state, action) {
			return action.payload;
		},
	},
});

export const { selectValue } = selectSlice.actions;
export default selectSlice.reducer;
