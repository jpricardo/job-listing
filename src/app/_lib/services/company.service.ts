import { Company } from '../models/company.model';
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
];

export default class CompanyService extends Service {
	public async getAll(): Promise<Company[]> {
		return this.request(companies);
	}
}
