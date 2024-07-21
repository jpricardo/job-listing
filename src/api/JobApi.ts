import { AreaType, getRandomNumber, Job, JobType } from '@/lib';

import BaseApi from './BaseApi';

const getRandomPastDate = () => {
	const date = new Date();
	date.setDate(date.getDate() - getRandomNumber(0, 20));

	return date;
};

const getRandomJob = (index: number): Job => {
	const jobTypes: JobType[] = ['FullTime', 'Hybrid', 'Remote'];
	const areaTypes: AreaType[] = ['Design', 'DevOps', 'Development', 'Management', 'QA'];

	return {
		id: index,
		title: `Job ${index + 1}`,
		company: `Company ${index + 1}`,
		description: `Job description for Job ${index + 1}, posted by Company ${index + 1}`,
		yearlySalary: getRandomNumber(20000, 150000),

		createdAt: getRandomPastDate(),

		jobType: jobTypes[getRandomNumber(0, jobTypes.length)],
		areaType: areaTypes[getRandomNumber(0, areaTypes.length)],
		tags: ['Frontend', 'Junior'],
	};
};

const getRandomJobs = (ammount: number) => {
	let result: Job[] = [];

	for (let i = 0; i < ammount; i++) {
		const randomJob = getRandomJob(i);
		result.push(randomJob);
	}

	return result;
};

// In reality, this would be managed by the application's backend
const allJobs = getRandomJobs(35);

export interface IJobApi {
	getJobs: () => Promise<Job[]>;
	getJobById: (id?: number) => Promise<Job | undefined>;
}

export default class JobApi extends BaseApi implements IJobApi {
	constructor(delay?: number) {
		super(delay);
	}

	public async getJobs() {
		return await this.mockRequest(allJobs);
	}

	public async getJobById(id?: number) {
		return await this.mockRequest(allJobs.find((item) => item.id === id));
	}
}
