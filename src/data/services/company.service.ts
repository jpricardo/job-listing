import 'server-only';

import { TagInfoDto } from '../dto/tag-info.dto';
import { getRandomNumber, getRandomSample, match } from '../helpers';
import { Company, CompanyTypeEnum } from '../models/company.model';
import { IDType } from '../types';
import Service from './service';

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

const allowedTags: string[] = getRandomSample(tags, 40);

function getRandomTags() {
	return getRandomSample(allowedTags, getRandomNumber(3, 6));
}

const companies = [
	{
		id: 1,
		name: 'Brightwave Technologies',
		description:
			'Brightwave Technologies is a leading provider of innovative digital solutions, specializing in web and mobile development, cloud services, and digital transformation for businesses of all sizes.',
		type: CompanyTypeEnum.Hybrid,
		tags: getRandomTags(),
	},

	{
		id: 2,
		name: 'Nimbus Systems',
		description:
			'Nimbus Systems delivers reliable and scalable software products with a focus on seamless integration and user experience. Our remote-first culture empowers teams to collaborate globally.',
		type: CompanyTypeEnum.RemoteFirst,
		tags: getRandomTags(),
	},

	{
		id: 3,
		name: 'CodeCrafters Collective',
		description:
			'CodeCrafters Collective is a fully remote company dedicated to building high-quality, maintainable software. We embrace modern technologies and agile methodologies to deliver value to our clients.',
		type: CompanyTypeEnum.RemoteOnly,
		tags: getRandomTags(),
	},

	{
		id: 4,
		name: 'InnoVantage Solutions',
		description:
			'InnoVantage Solutions provides innovative solutions for modern businesses, helping organizations streamline operations and accelerate growth through technology and strategic consulting.',
		type: CompanyTypeEnum.Hybrid,
		tags: getRandomTags(),
	},
	{
		id: 5,
		name: 'Digital Forge',
		description:
			'Digital Forge empowers digital transformation for enterprises by offering end-to-end IT services, from cloud migration to custom application development and ongoing support.',
		type: CompanyTypeEnum.RemoteFirst,
		tags: getRandomTags(),
	},
	{
		id: 6,
		name: 'TechBridge Partners',
		description:
			'TechBridge Partners is your trusted tech partner, delivering tailored software solutions and IT consulting services to help businesses bridge the gap between technology and success.',
		type: CompanyTypeEnum.RemoteOnly,
		tags: getRandomTags(),
	},
	{
		id: 7,
		name: 'AImpress Labs',
		description:
			'AImpress Labs is building the future of AI with cutting-edge research and product development in artificial intelligence, machine learning, and automation for a smarter tomorrow.',
		type: CompanyTypeEnum.Hybrid,
		tags: getRandomTags(),
	},
	{
		id: 8,
		name: 'Pixel & Code Studio',
		description:
			'Pixel & Code Studio is a design-driven development agency, blending creativity and technology to deliver stunning digital experiences for brands and startups worldwide.',
		type: CompanyTypeEnum.RemoteFirst,
		tags: getRandomTags(),
	},
	{
		id: 9,
		name: 'CloudNest Solutions',
		description:
			'CloudNest Solutions are cloud-native infrastructure experts, helping businesses migrate, optimize, and manage their cloud environments for maximum efficiency and security.',
		type: CompanyTypeEnum.RemoteOnly,
		tags: getRandomTags(),
	},
	{
		id: 10,
		name: 'CommerceNext',
		description:
			'CommerceNext delivers next-gen e-commerce solutions, empowering retailers and brands to grow online with scalable platforms, seamless integrations, and data-driven strategies.',
		type: CompanyTypeEnum.Hybrid,
		tags: getRandomTags(),
	},
];

export default class CompanyService extends Service {
	public async getAll(filters?: Partial<Company>): Promise<Company[]> {
		return this.request(companies.filter((company) => match(company, filters)));
	}

	public async getById(id: IDType): Promise<Company | undefined> {
		return this.request(companies.find((company) => company.id.toString() === id.toString()));
	}

	public async getPopularTags(limit: number): Promise<TagInfoDto[]> {
		const tagsInUse = companies.flatMap((company) => company.tags);
		const popularTags: TagInfoDto[] = [];

		tagsInUse.forEach((tag, idx) => {
			if (idx >= limit) return;

			const tagInfo = popularTags.find((info) => info.name === tag);

			if (tagInfo) return tagInfo.count++;
			popularTags.push({ name: tag, count: 1 });
		});

		return this.request(popularTags);
	}
}
