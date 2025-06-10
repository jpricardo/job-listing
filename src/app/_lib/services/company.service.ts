import { Company } from '../models/company.model';
import { IDType } from '../types';
import Service from './service';

const companies = [
	{
		id: 1,
		name: 'Company 01',
		description: 'This is a description',
		tags: ['B2B', 'Startup', 'GPTW'],
	},

	{
		id: 2,
		name: 'Company 02',
		description: 'It just works',
		tags: ['B2C', 'Big Tech', 'Remote'],
	},

	{
		id: 3,
		name: 'Company 03',
		description: 'Yeah...',
		tags: ['MVP', 'Fintech', 'Remote', 'Mobile'],
	},
];

export default class CompanyService extends Service {
	public async getAll(): Promise<Company[]> {
		return this.request(companies);
	}

	public async getById(id: IDType): Promise<Company | undefined> {
		return this.request(companies.find((company) => company.id.toString() === id.toString()));
	}
}
