/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function srcset(
	image: string,
	width: number,
	height: number,
	rows = 2,
	cols = 2
) {
	return {
		src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${width * cols}&h=${
			height * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}
interface Iimages {
	id: number;
	image: string;
	width: number;
	height: number;
	is_deleted: boolean;
}

function GamesImageList({
	images,
	title,
}: {
	images: Iimages[];
	title: string;
}) {
	return (
		<ImageList
			sx={{
				width: 500,
				height: 450,
				transform: 'translateZ(0)',
			}}
			rowHeight={200}
			gap={1}
		>
			{images.map((item) => {
				const cols = 2;
				const rows = 2;
				return (
					<ImageListItem key={item.id} cols={cols} rows={rows}>
						<img
							{...srcset(item.image, 250, 200, rows, cols)}
							alt='screenshot'
							loading='lazy'
						/>
						<ImageListItemBar
							sx={{
								background:
									'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
									'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
							}}
							title={title}
							position='top'
							actionPosition='left'
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export { GamesImageList };
