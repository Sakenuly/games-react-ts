import ReactPlayer from 'react-player';
import React from 'react';

function VideoPlayer({ url }: { url: string | undefined }) {
	return <ReactPlayer url={url} playing muted loop />;
}

export { VideoPlayer };
