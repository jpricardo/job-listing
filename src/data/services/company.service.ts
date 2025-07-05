import 'server-only';

import { getRandomSample } from '../helpers';
import { Company } from '../models/company.model';
import { TagInfo } from '../models/tag-info.model';
import { IDType } from '../types';
import Service from './service';

const tags: TagInfo[] = [
	{ name: 'React', count: 10 },
	{ name: 'Next', count: 5 },
	{ name: 'Vue', count: 9 },
	{ name: 'Frontend', count: 24 },
	{ name: 'TypeScript', count: 15 },
	{ name: 'JavaScript', count: 20 },
	{ name: 'Node.js', count: 12 },
	{ name: 'Express', count: 8 },
	{ name: 'Angular', count: 7 },
	{ name: 'Svelte', count: 4 },
	{ name: 'GraphQL', count: 6 },
	{ name: 'REST API', count: 14 },
	{ name: 'MongoDB', count: 9 },
	{ name: 'PostgreSQL', count: 11 },
	{ name: 'AWS', count: 13 },
	{ name: 'Docker', count: 14 },
	{ name: 'CI/CD', count: 7 },
	{ name: 'Python', count: 10 },
	{ name: 'Figma', count: 5 },
	{ name: 'UI/UX', count: 8 },
	{ name: 'Mobile', count: 12 },
	{ name: 'DevOps', count: 5 },
	{ name: 'Scrum', count: 7 },
	{ name: 'Jest', count: 5 },
	{ name: 'Agile', count: 8 },
	{ name: 'Kubernetes', count: 6 },
	{ name: 'Microservices', count: 7 },
	{ name: 'Redux', count: 9 },
	{ name: 'SaaS', count: 5 },
	{ name: 'PHP', count: 7 },
	{ name: 'Laravel', count: 4 },
	{ name: 'Go', count: 6 },
	{ name: 'Ruby', count: 3 },
	{ name: 'Rails', count: 3 },
	{ name: 'C#', count: 5 },
	{ name: '.NET', count: 4 },
	{ name: 'Java', count: 12 },
	{ name: 'Spring', count: 4 },
	{ name: 'Machine Learning', count: 6 },
	{ name: 'AI', count: 7 },
	{ name: 'Testing', count: 5 },
	{ name: 'Tailwind', count: 9 },
	{ name: 'Bootstrap', count: 6 },
	{ name: 'NoSQL', count: 4 },
	{ name: 'Cloud', count: 7 },
	{ name: 'API', count: 10 },
	{ name: 'Security', count: 8 },
	{ name: 'Big Data', count: 6 },
	{ name: 'Data Science', count: 7 },
	{ name: 'Analytics', count: 5 },
	{ name: 'Design Systems', count: 4 },
	{ name: 'WebSockets', count: 3 },
	{ name: 'PWA', count: 4 },
	{ name: 'Jenkins', count: 3 },
	{ name: 'GCP', count: 5 },
	{ name: 'Azure', count: 4 },
	{ name: 'Shopify', count: 2 },
	{ name: 'WordPress', count: 3 },
	{ name: 'E-commerce', count: 6 },
	{ name: 'Testing Automation', count: 4 },
	{ name: 'RESTful', count: 7 },
	{ name: 'Socket.io', count: 2 },
	{ name: 'Material UI', count: 5 },
	{ name: 'Storybook', count: 3 },
	{ name: 'Unreal Engine', count: 1 },
	{ name: 'Scala', count: 2 },
	{ name: 'Elixir', count: 1 },
	{ name: 'Rust', count: 3 },
	{ name: 'C++', count: 4 },
	{ name: 'C', count: 3 },
	{ name: 'Perl', count: 1 },
	{ name: 'Objective-C', count: 2 },
	{ name: 'Swift', count: 5 },
	{ name: 'Kotlin', count: 4 },
	{ name: 'Android', count: 6 },
	{ name: 'iOS', count: 5 },
	{ name: 'Xamarin', count: 2 },
	{ name: 'Cordova', count: 1 },
	{ name: 'Electron', count: 3 },
	{ name: 'Firebase', count: 4 },
	{ name: 'Heroku', count: 2 },
	{ name: 'DigitalOcean', count: 2 },
	{ name: 'Terraform', count: 3 },
	{ name: 'Ansible', count: 2 },
	{ name: 'Puppet', count: 1 },
	{ name: 'Chef', count: 1 },
	{ name: 'Jira', count: 5 },
	{ name: 'Confluence', count: 3 },
	{ name: 'Notion', count: 4 },
	{ name: 'Slack', count: 6 },
	{ name: 'Trello', count: 3 },
	{ name: 'Asana', count: 2 },
	{ name: 'Power BI', count: 3 },
	{ name: 'Tableau', count: 4 },
	{ name: 'Snowflake', count: 2 },
	{ name: 'Hadoop', count: 3 },
	{ name: 'Spark', count: 2 },
	{ name: 'Blockchain', count: 2 },
	{ name: 'Django', count: 5 },
	{ name: 'Flask', count: 4 },
	{ name: 'ASP.NET', count: 3 },
	{ name: 'Unity', count: 2 },
	{ name: 'WebRTC', count: 2 },
	{ name: 'GraphDB', count: 1 },
	{ name: 'OpenAPI', count: 2 },
	{ name: 'Sass', count: 4 },
	{ name: 'Less', count: 2 },
	{ name: 'Gatsby', count: 3 },
	{ name: 'Three.js', count: 2 },
	{ name: 'WebAssembly', count: 1 },
];

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

	public async getPopularTags(limit = 50): Promise<TagInfo[]> {
		return this.request(getRandomSample(tags, limit));
	}
}
