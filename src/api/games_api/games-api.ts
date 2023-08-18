import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_NAMES } from '../api_names/api-names';
import { BASE_URLS } from '../api_urls/api-urls';

const gamesApi = createApi({
	reducerPath: API_NAMES.gamesApi,
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URLS.games }),
	endpoints: () => ({}),
});

const extendedApi = gamesApi.injectEndpoints({
	endpoints: (build) => ({
		getGames: build.query({
			query: (url) => url,
		}),
	}),
	overrideExisting: true,
});

const extendedApiDetails = gamesApi.injectEndpoints({
	endpoints: (build) => ({
		getGameDetails: build.query({
			query: (url) => url,
		}),
	}),
	overrideExisting: true,
});

const { useGetGamesQuery } = extendedApi;
const { useGetGameDetailsQuery } = extendedApiDetails;

export {
	useGetGamesQuery,
	useGetGameDetailsQuery,
	extendedApi,
	extendedApiDetails,
};
