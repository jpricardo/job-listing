import { getRandomSample } from '../helpers';
import { Job } from '../models/job.model';
import { IDType } from '../types';
import Service from './service';

const jobs: Job[] = [
	{
		id: 1,
		title: 'Frontend Engineer',
		shortDescription: 'Short description',
		description: 'First job description',
		createdAt: new Date(),

		companyId: 1,
	},
	{
		id: 2,
		title: 'Designer',
		shortDescription: 'Short description',
		description: 'Second job description',
		createdAt: new Date(),

		companyId: 1,
	},

	{
		id: 3,
		title: 'Database Analyst',
		shortDescription: 'Short description',
		description: 'Third job description',
		createdAt: new Date(),

		companyId: 2,
	},

	{
		id: 4,
		title: 'Fullstack Engineer',
		shortDescription: 'Short description',
		description: 'Fourth job description',
		createdAt: new Date(),

		companyId: 3,
	},

	{
		id: 5,
		title: 'Trainee',
		shortDescription: 'Short description',
		description: 'Fifth job description',
		createdAt: new Date(),

		companyId: 3,
	},

	{
		id: 6,
		title: 'Tech Lead',
		shortDescription: 'Short description',
		description: 'Sixth job description',
		createdAt: new Date(),

		companyId: 3,
	},
];

export default class JobService extends Service {
	public async getAll(args?: { companyId?: IDType }): Promise<Job[]> {
		if (!args) return this.request(jobs);
		const result = jobs.filter((job) => job.companyId.toString() === args.companyId?.toString());

		return this.request(result);
	}

	public async getById(id: IDType): Promise<Job | undefined> {
		return this.request(jobs.find((job) => job.id.toString() === id.toString()));
	}

	public async getRelated(id: IDType): Promise<Job[]> {
		console.log('Fetching jobs related to ' + id);
		return this.request(getRandomSample(jobs, 5));
	}
}
