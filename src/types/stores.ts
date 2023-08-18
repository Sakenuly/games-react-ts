interface IstoresData {
	count: number;
	next: null | string;
	previous: null | string;
	results: IstoresResult[];
}

interface IstoresResult {
	id: number;
	game_id: number;
	store_id: number;
	url: string;
}

export type { IstoresData, IstoresResult };
