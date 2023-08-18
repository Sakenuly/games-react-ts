import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styled from '@emotion/styled';
import { selectPlatforms } from '../../slices/platforms-filter-slice';
import { useAppDispatch } from '../../hooks/store-hooks';
import { platrformNames } from '../../data_arrays/platform-select';

const StyledSelect = styled(Select)({
	'& .MuiSelect-standard': {
		backgroundColor: '#202020',
	},
	'.MuiSelect-icon': {
		color: '#fff',
	},
});
function FilterPlatform() {
	const dispatch = useAppDispatch();
	const handlePlatformFilter = (e: SelectChangeEvent<unknown>) => {
		dispatch(selectPlatforms(e.target.value));
	};
	return (
		<div>
			<FormControl variant='standard' fullWidth>
				<InputLabel
					sx={{
						'&.Mui-focused, &:focus': { color: '#f21d4c' },
						color: '#fff',
					}}
					htmlFor='uncontrolled-native'
				>
					platforms:
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
					onChange={handlePlatformFilter}
					defaultValue='0'
					inputProps={{
						name: 'age',
						id: 'uncontrolled-native',
					}}
				>
					{platrformNames.map(({ name, id }) => (
						<MenuItem key={id} value={id}>
							{name}
						</MenuItem>
					))}
				</StyledSelect>
			</FormControl>
		</div>
	);
}

export { FilterPlatform };
