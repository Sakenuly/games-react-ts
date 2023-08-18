import React from 'react';
import { Box } from '@mui/system';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Typography } from '@mui/material';
import { VideoPlayer } from '../components/video_player';
import { useGetGameDetailsQuery } from '../api/games_api/games-api';
import { GamesImageList } from '../components/games_image_list';
import { GamesRating } from '../components/games_rating';
import { GamesSpinner } from '../components/games_spinner';
import { mainSelector } from '../functions/main-selector';
import { StoresList } from '../components/storesList';
import { IstoresResult } from '../types/stores';

function GameDetailsPage() {
	const apiKeySelector = mainSelector('apiKeySlice');
	const getLoaderData = useLoaderData() as { gameId: string };
	const id = getLoaderData.gameId;
	const { details, trailer, screenshots, stores, apiKey } = {
		details: `games/${id}`,
		trailer: `games/${id}/movies`,
		screenshots: `games/${id}/screenshots`,
		stores: `games/${id}/stores`,
		apiKey: `?key=${apiKeySelector}`,
	};
	const { data } = useGetGameDetailsQuery(details + apiKey);
	const { data: trailerData } = useGetGameDetailsQuery(trailer + apiKey);
	const { data: screenshotsData, isLoading } = useGetGameDetailsQuery(
		screenshots + apiKey
	);
	const { data: storesData } = useGetGameDetailsQuery(stores + apiKey);
	const dataLoaded = data && screenshotsData && trailerData && storesData;
	return (
		<>
			{/* <GamesSpinner /> */}
			<Box>
				{isLoading && <GamesSpinner />}
				{dataLoaded && (
					<>
						<Box component='h3'>Name:{data.name}</Box>
						<Typography>{data.description_raw}</Typography>
						<GamesImageList
							images={screenshotsData.results}
							title={data.name}
						/>
						<GamesRating rating={data.rating} />
						{trailerData.results[0] ? (
							<VideoPlayer url={trailerData.results[0].data[480]} />
						) : (
							''
						)}
						<Typography> Ссылки на игру </Typography>
						{storesData.results.map((item: IstoresResult) => (
							<StoresList key={item.id} data={item} />
						))}
					</>
				)}
			</Box>
		</>
	);
}

function gameDetailsLoader(args: LoaderFunctionArgs) {
	return args.params;
}

export { GameDetailsPage, gameDetailsLoader };
