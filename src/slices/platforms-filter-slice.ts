import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '0';

const platformsFilterSlice = createSlice({
	name: 'platformsFilter',
	initialState,
	reducers: {
		selectPlatforms(state, action) {
			return action.payload;
		},
	},
});

const { selectPlatforms } = platformsFilterSlice.actions;

export { selectPlatforms };
export default platformsFilterSlice.reducer;
