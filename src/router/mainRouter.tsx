import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GameCardsPage } from '../pages/game-cards-page';
import { gameDetailsLoader, GameDetailsPage } from '../pages/game-details-page';
import { MainPage } from '../pages/main-page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: '/',
				element: <GameCardsPage />,
			},
			{
				path: '/games/:gameId',
				element: <GameDetailsPage />,
				loader: gameDetailsLoader,
			},
		],
	},
]);

function MainRouter() {
	return <RouterProvider router={router} />;
}

export { MainRouter };
