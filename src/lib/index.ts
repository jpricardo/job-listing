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

export const getDateDifferenceInDays = (start: Date, end: Date) => {
	const msInDay = 1000 * 3600 * 24;

	const diff = end.getTime() - start.getTime();

	return Math.floor(diff / msInDay);
};

export const timer = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
