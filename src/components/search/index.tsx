import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { saveSearchValue } from '../../slices/search-slice';
import { useAppDispatch } from '../../hooks/store-hooks';
import { setPagination } from '../../slices/pagination-slice';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: '50px',
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));
function SearchHeader() {
	const dispatch = useAppDispatch();

	function handleSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
		const firstPage = 1;
		dispatch(saveSearchValue(e.target.value));
		dispatch(setPagination(firstPage));
	}
	return (
		<Search
			sx={{
				flex: '1 1 auto',
				textAlign: 'left',
				'& .MuiInputBase-root': {
					width: '100%',
				},
			}}
			onChange={handleSearchValue}
		>
			<SearchIconWrapper
				sx={{
					color: '#f21d4c',
				}}
			>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	);
}
export { SearchHeader };
