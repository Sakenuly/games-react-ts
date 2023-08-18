import { createSlice } from '@reduxjs/toolkit';

const keyFromStorage = localStorage.getItem('key');
const initialState = null || keyFromStorage;

const apiKeySlice = createSlice({
	name: 'apiKey',
	initialState,
	reducers: {
		saveApikey(state, action) {
			localStorage.setItem('key', action.payload);
			return action.payload;
		},
		deleteApiKey() {
			return null;
		},
	},
});
export const { saveApikey, deleteApiKey } = apiKeySlice.actions;
export default apiKeySlice.reducer;
