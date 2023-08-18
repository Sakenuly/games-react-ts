import { createSlice } from '@reduxjs/toolkit';

const cardsType = {
	row: 'row',
	column: 'column',
};
const initialState = cardsType.row;

const displayOptionsSlice = createSlice({
	name: 'display type',
	initialState,
	reducers: {
		setDisplayOption(state, action) {
			return action.payload;
		},
	},
});

export const { setDisplayOption } = displayOptionsSlice.actions;
export { cardsType };
export default displayOptionsSlice.reducer;
