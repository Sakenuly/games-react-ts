import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetGamesQuery } from '../../api/games_api/games-api';
import { cardsType } from '../../slices/display-options-slice';
import { PaginationGames } from '../pagination';
import { GamesSpinner } from '../games_spinner';
import { GamesRating } from '../games_rating';
import { mainSelector } from '../../functions/main-selector';
import { generateCardsUrl } from '../../functions/generate-cards-url';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
interface IdataResults {
	[x: string]: string | undefined;
}

function Cards() {
	const displayOptionSelector = mainSelector('displayOptionsSlice');

	const { data } = useGetGamesQuery(generateCardsUrl());
	const gridSize =
		displayOptionSelector === cardsType.row
			? {
					xs: 2,
					sm: 4,
					md: 4,
			  }
			: {
					xs: 10,
					sm: 10,
					md: 10,
			  };

	return (
		<>
			<GamesSpinner />
			<Grid
				sx={{
					mb: '30px',
				}}
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{data &&
					data.results.map((item: IdataResults) => (
						<Grid
							item
							xs={gridSize.xs}
							sm={gridSize.sm}
							md={gridSize.md}
							key={item.id}
						>
							<Item
								sx={{
									position: 'relative',
									bgcolor: '#202020',
									padding: 0,
									borderRadius: '7px',
									overflow: 'hidden',
								}}
							>
								<Link to={`games/${item.id}`}>
									<Box
										sx={{
											position: 'relative',
											minHeight: '400px',
										}}
									>
										<img
											alt='ass'
											style={{
												width: '100%',
												height: '100%',
												position: 'absolute',
												top: '0',
												left: '0',
												objectFit: 'cover',
											}}
											src={
												item.background_image ||
												'https://comm.uir.ac.id/wp-content/uploads/2022/09/no-image-found.b1edc35f0fa6.png'
											}
											id={item.id}
										/>
									</Box>
								</Link>
								<Box
									sx={{
										padding: '7px',
										bgcolor: '#202020',
										color: '#fff',
									}}
								>
									<Typography component='h4'>{item.name}</Typography>
									<GamesRating rating={Number(item.rating)} />
								</Box>
							</Item>
						</Grid>
					))}
			</Grid>
			{data && <PaginationGames cardsCount={data.count} />}
		</>
	);
}

export { Cards };
