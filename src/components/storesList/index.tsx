import { Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { IstoresResult } from '../../types/stores';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#202020',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

function StoresList({ data }: { data: IstoresResult }) {
	return (
		<Stack>
			<Item> <Link style={{color:'#f21d4c'}} to={data.url}> {data.url} </Link> </Item>
		</Stack>
	);
}

export { StoresList };
