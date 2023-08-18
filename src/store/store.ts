import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { extendedApi, extendedApiDetails } from '../api/games_api/games-api';
import selectSlice from '../slices/select-slice';
import mainUrlSlice from '../slices/main-url-slice';
import apiKeySlice from '../slices/api-key-slice';
import searchSlice from '../slices/search-slice';
import displayOptionsSlice from '../slices/display-options-slice';
import paginationSlice from '../slices/pagination-slice';
import platformsFilterSlice from '../slices/platforms-filter-slice';

const combineReducer = combineReducers({
	selectSlice,
	mainUrlSlice,
	apiKeySlice,
	searchSlice,
	displayOptionsSlice,
	paginationSlice,
	platformsFilterSlice,
	[extendedApi.reducerPath]: extendedApi.reducer,
	[extendedApiDetails.reducerPath]: extendedApiDetails.reducer,
});

const store = configureStore({
	reducer: combineReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(extendedApi.middleware)
			.concat(extendedApiDetails.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
