import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select, SelectChangeEvent, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks/store-hooks';
import { selectValue } from '../../slices/select-slice';
import { mainSelector } from '../../functions/main-selector';


const sortTypes = [
	{ value: 'name', name: 'name', uuid:uuidv4() },
	{ value: 'released', name: 'released', uuid:uuidv4() },
	{ value: 'added', name: 'added', uuid:uuidv4() },
	{ value: 'created', name: 'created', uuid:uuidv4() },
	{ value: 'updated', name: 'updated', uuid:uuidv4() },
	{ value: 'rating', name: 'rating', uuid:uuidv4() },
	{ value: 'metacritic', name: 'metacritic', uuid:uuidv4() },
];

function SortSelect() {
	const dispatch = useAppDispatch();
	const selectorSort = mainSelector('selectSlice');

	const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
		dispatch(selectValue(e.target.value));
	};
	const StyledSelect = styled(Select)({
		'& .MuiSelect-standard': {
			backgroundColor: '#202020',
		},
		'.MuiSelect-icon': {
			color: '#fff',
		},
	});
	return (
		<Box sx={{ minWidth: 120, flex: '0 1 300px', mb: '10px' }}>
			<FormControl variant='standard' fullWidth>
				<InputLabel
					sx={{
						'&.Mui-focused, &:focus': { color: '#f21d4c' },
						color: '#fff',
					}}
					htmlFor='uncontrolled-native'
				>
					sort by:
				</InputLabel>
				<StyledSelect
					sx={{
						color: '#fff',
						padding: '5px',
						bgcolor: '#202020',
						'::after': {
							borderBottom: '2px solid #f21d4c',
						},
					}}
					onChange={handleSelectChange}
					value={selectorSort}
					inputProps={{
						name: 'age',
						id: 'uncontrolled-native',
					}}
				>
					{sortTypes.map((item) => (
						<MenuItem key={item.uuid} value={item.value}>
							{item.name}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
		</Box>
	);
}
export { SortSelect };
