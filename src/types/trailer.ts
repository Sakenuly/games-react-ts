interface Result {
	id: number;
	name: string;
	preview: string;
	data: Data;
}

interface Data {
	'480': string;
	max: string;
}

interface ItrailerData {
	count: number;
	next: null | string;
	previous: null | string;
	results: Result[];
}

export type { ItrailerData };
