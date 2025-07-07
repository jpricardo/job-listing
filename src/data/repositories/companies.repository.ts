import 'server-only';

import { match } from '../helpers';
import { Company, CompanyTypeEnum } from '../models/company.model';
import InMemoryRepository from './in-memory-repository';
import { IRepository } from './repository';

const companies: Company[] = [
	{
		id: 1,
		name: 'Brightwave Technologies',
		description:
			'Brightwave Technologies is a leading provider of innovative digital solutions, specializing in web and mobile development, cloud services, and digital transformation for businesses of all sizes.',
		type: CompanyTypeEnum.Hybrid,
		tags: [],
	},

	{
		id: 2,
		name: 'Nimbus Systems',
		description:
			'Nimbus Systems delivers reliable and scalable software products with a focus on seamless integration and user experience. Our remote-first culture empowers teams to collaborate globally.',
		type: CompanyTypeEnum.RemoteFirst,
		tags: [],
	},

	{
		id: 3,
		name: 'CodeCrafters Collective',
		description:
			'CodeCrafters Collective is a fully remote company dedicated to building high-quality, maintainable software. We embrace modern technologies and agile methodologies to deliver value to our clients.',
		type: CompanyTypeEnum.RemoteOnly,
		tags: [],
	},

	{
		id: 4,
		name: 'InnoVantage Solutions',
		description:
			'InnoVantage Solutions provides innovative solutions for modern businesses, helping organizations streamline operations and accelerate growth through technology and strategic consulting.',
		type: CompanyTypeEnum.Hybrid,
		tags: [],
	},
	{
		id: 5,
		name: 'Digital Forge',
		description:
			'Digital Forge empowers digital transformation for enterprises by offering end-to-end IT services, from cloud migration to custom application development and ongoing support.',
		type: CompanyTypeEnum.RemoteFirst,
		tags: [],
	},
	{
		id: 6,
		name: 'TechBridge Partners',
		description:
			'TechBridge Partners is your trusted tech partner, delivering tailored software solutions and IT consulting services to help businesses bridge the gap between technology and success.',
		type: CompanyTypeEnum.RemoteOnly,
		tags: [],
	},
	{
		id: 7,
		name: 'AImpress Labs',
		description:
			'AImpress Labs is building the future of AI with cutting-edge research and product development in artificial intelligence, machine learning, and automation for a smarter tomorrow.',
		type: CompanyTypeEnum.Hybrid,
		tags: [],
	},
	{
		id: 8,
		name: 'Pixel & Code Studio',
		description:
			'Pixel & Code Studio is a design-driven development agency, blending creativity and technology to deliver stunning digital experiences for brands and startups worldwide.',
		type: CompanyTypeEnum.RemoteFirst,
		tags: [],
	},
	{
		id: 9,
		name: 'CloudNest Solutions',
		description:
			'CloudNest Solutions are cloud-native infrastructure experts, helping businesses migrate, optimize, and manage their cloud environments for maximum efficiency and security.',
		type: CompanyTypeEnum.RemoteOnly,
		tags: [],
	},
	{
		id: 10,
		name: 'CommerceNext',
		description:
			'CommerceNext delivers next-gen e-commerce solutions, empowering retailers and brands to grow online with scalable platforms, seamless integrations, and data-driven strategies.',
		type: CompanyTypeEnum.Hybrid,
		tags: [],
	},
];

export default class CompaniesRepository extends InMemoryRepository implements IRepository<Company> {
	constructor(private items = companies) {
		super();
	}

	find(filters?: Partial<Company> | undefined): Promise<Company | undefined> {
		return this.cache(['companies', 'find', filters], () => this.items.find((job) => match(job, filters)));
	}

	findAll(filters?: Partial<Company> | undefined): Promise<Company[]> {
		return this.cache(['companies', 'findAll', filters], () => this.items.filter((job) => match(job, filters)));
	}
}
