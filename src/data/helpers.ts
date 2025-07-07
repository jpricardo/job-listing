export const getRandomNumber = (min = 0, max = 1) => min + Math.floor(Math.random() * (max - min));

export const getRandomItem = <TData>(arr: TData[]) => arr.at(getRandomNumber(0, arr.length));

export const getRandomSample = <TData>(arr: TData[], sampleSize = 1) => {
	let validPicks: TData[] = [...arr];
	const picks: TData[] = [];

	for (let i = 0; i < sampleSize; i++) {
		const newItem = getRandomItem(validPicks);
		validPicks = validPicks.filter((item) => item !== newItem);
		if (newItem) picks.push(newItem);
	}

	return picks;
};

export const timer = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export function match<T extends object>(target: T, matchers?: Partial<T>): boolean {
	if (!matchers) return true;

	const keys = Object.keys(matchers) as (keyof T)[];

	return keys.every((key) => {
		const value = target[key];
		const matcher = matchers[key];

		if (matcher === undefined || matcher === null) return true;

		if (Array.isArray(matcher)) {
			if (Array.isArray(value)) {
				return matcher.some((item) => value.includes(item));
			}

			return matcher.includes(value);
		}

		return value === matcher;
	});
}

export function daysAgo(days: number) {
	const d = new Date();
	d.setDate(d.getDate() - days);
	return d;
}
