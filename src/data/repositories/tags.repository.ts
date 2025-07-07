import 'server-only';

import { getRandomSample } from '../helpers';
import InMemoryRepository from './in-memory-repository';
import { IRepository } from './repository';

const tags: string[] = [
	'React',
	'Next',
	'Vue',
	'Frontend',
	'TypeScript',
	'JavaScript',
	'Node.js',
	'Express',
	'Angular',
	'Svelte',
	'Leadership',
	'REST API',
	'MongoDB',
	'PostgreSQL',
	'AWS',
	'Docker',
	'Project Management',
	'Python',
	'Figma',
	'UI/UX',
	'Mobile',
	'DevOps',
	'Scrum',
	'Jest',
	'Agile',
	'Kubernetes',
	'Microservices',
	'Teamwork',
	'SaaS',
	'PHP',
	'Laravel',
	'Go',
	'Ruby',
	'Rails',
	'C#',
	'.NET',
	'Java',
	'Spring',
	'Machine Learning',
	'AI',
	'Testing',
	'Tailwind',
	'Bootstrap',
	'NoSQL',
	'Cloud',
	'API',
	'Security',
	'Big Data',
	'Data Science',
	'GCP',
	'Azure',
	'WordPress',
	'Material UI',
	'Rust',
	'C++',
	'C',
	'Swift',
	'Kotlin',
	'Android',
	'iOS',
	'Electron',
	'Terraform',
	'Ansible',
	'Jira',
	'Confluence',
	'Notion',
	'Slack',
	'Trello',
	'Power BI',
	'Tableau',
	'Django',
	'Flask',
	'ASP.NET',
	'Unity',
	'Sass',
	'Less',
	'Gatsby',
	'Three.js',
	'WebAssembly',
];

export default class TagsRepository extends InMemoryRepository implements IRepository<string> {
	constructor(private items = getRandomSample(tags, 40)) {
		super();
	}

	find(name?: string): Promise<string | undefined> {
		return this.cache(['find', name], () => this.items.find((tag) => tag === name));
	}

	findAll(names?: string[]): Promise<string[]> {
		return this.cache(['findAll', names], () => {
			if (!names) return this.items;

			return this.items.filter((tag) => names?.includes(tag));
		});
	}
}
