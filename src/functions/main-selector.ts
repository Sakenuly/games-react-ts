import { useAppSelector } from '../hooks/store-hooks';

function mainSelector(
	enclosure: string,
	secondEnclosure?: string,
	thirdEnclosure?: string
) {
	const selected = useAppSelector((state) => state[enclosure]);
	if (secondEnclosure && !thirdEnclosure) {
		return selected[secondEnclosure];
	}
	if (secondEnclosure && thirdEnclosure) {
		return selected[secondEnclosure][thirdEnclosure];
	}
	return selected;
}

export { mainSelector };