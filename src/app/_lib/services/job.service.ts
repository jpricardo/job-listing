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
}
