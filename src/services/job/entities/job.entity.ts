export type JobType = 'FullTime' | 'Hybrid' | 'Remote';

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
