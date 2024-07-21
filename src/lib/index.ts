export type JobType = 'FullTime' | 'Hybrid' | 'Remote';

export type OrderByType = 'Most relevant' | 'Most recent' | 'Best pay';

export type AreaType = 'Development' | 'Design' | 'DevOps' | 'QA' | 'Management';

export type SeniorityLevelType = 'Junior' | 'Associate' | 'Senior' | 'Lead';

export type Job = {
	id: number;
	title: string;
	company: string;
	shortDescription: string;
	description: string;

	yearlySalary: number;
	createdAt: Date;

	jobType: JobType;
	areaType: AreaType;
	seniorityLevel: SeniorityLevelType;

	tags: string[];
};

export const getRandomNumber = (min = 0, max = 1) => min + Math.floor(Math.random() * (max - min));

export const getRandomItem = <TData>(arr: TData[]) => arr[getRandomNumber(0, arr.length)];

export const getRandomSample = <TData>(arr: TData[], sampleSize = 1) => {
	let validPicks: TData[] = [...arr];
	const picks: TData[] = [];

	for (let i = 0; i < sampleSize; i++) {
		const newItem = getRandomItem(validPicks);
		validPicks = validPicks.filter((item) => item !== newItem);
		picks.push(newItem);
	}

	return picks;
};

export const getDateDifferenceInDays = (start: Date, end: Date) => {
	const msInDay = 1000 * 3600 * 24;

	const diff = end.getTime() - start.getTime();

	return Math.floor(diff / msInDay);
};

export const timer = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
