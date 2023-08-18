import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)({
	'& .MuiRating-iconEmpty': {
		color: 'gray',
	},
	'& .MuiRating-iconFilled': {
		color: '#f21d4c',
	},
	'& .MuiRating-iconHover': {
		color: '#ff3d47',
	},
});

function GamesRating({ rating }: { rating: number }) {
	return (
		<Box
			sx={{
				'& > legend': { mt: 2 },
			}}
		>
			<StyledRating
				name='customized-color'
				defaultValue={rating}
				getLabelText={(value: number) =>
					`${value} Heart${value !== 1 ? 's' : ''}`
				}
				precision={0.5}
				icon={<GradeIcon fontSize='inherit' />}
				emptyIcon={<StarOutlineIcon fontSize='inherit' />}
				readOnly
			/>
		</Box>
	);
}
export { GamesRating };
