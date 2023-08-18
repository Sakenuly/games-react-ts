import { mainSelector } from './main-selector';

const notSpecifiedSelect = '0';
function generateCardsUrl() {
	const sortSelect = mainSelector('selectSlice');
	const searchSelector = mainSelector('searchSlice');
	const paginationSelector = mainSelector('paginationSlice', 'paginationPage');
	const platformsFilterSelector = mainSelector('platformsFilterSlice');
	const apiKeySelector = mainSelector('apiKeySlice');

	const {
		gamesList,
		sort,
		searchParams,
		pagination,
		platformFilter,
		apiKey,
		excludes,
	} = {
		gamesList: `games`,
		apiKey: `&key=${apiKeySelector}`,
		sort: `?ordering=${sortSelect}`,
		searchParams: `&search=${searchSelector}&search_exact=true`,
		pagination: `&page=${paginationSelector}`,
		platformFilter: ` ${
			platformsFilterSelector === notSpecifiedSelect
				? ''
				: `&platforms=${platformsFilterSelector}`
		}`,
		excludes: `&metacritic=80,100`,
	};

	const url =
		gamesList +
		sort +
		excludes +
		searchParams +
		pagination +
		platformFilter +
		apiKey;
	return url;
}

export { generateCardsUrl };
