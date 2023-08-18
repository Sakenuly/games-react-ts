import { createSlice } from '@reduxjs/toolkit';

const apiKey = 'f8e3bd1d1a9d4b9b8e2cc3032863d207';
const initialState = {
	baseUrl: 'https://api.rawg.io/api/',
	endPoint: `games?key=${apiKey}`,
};
const mainUrlSlice = createSlice({
	name: 'mainUrl',
	initialState,
	reducers: {
		saveEndPoint(state, action) {
			return { ...state, endPoint: action.payload };
		},
	},
});

export const { saveEndPoint } = mainUrlSlice.actions;
export default mainUrlSlice.reducer;
