import 'server-only';

import { CreateJobApplicationDto } from '../dto/create-job-application.dto';
import { daysAgo, getRandomItem, getRandomSample, match } from '../helpers';
import { JobApplication } from '../models/job-application.model';
import { Job } from '../models/job.model';
import InMemoryRepository from './in-memory-repository';
import { IRepository } from './repository';

const jobs: Job[] = [
	{
		id: 1,
		title: 'Frontend Engineer',
		shortDescription: 'Develop and maintain user-facing features.',
		description:
			'Join our team as a Frontend Engineer and help us build beautiful, responsive web applications. You will collaborate with designers and backend engineers to deliver seamless user experiences using modern JavaScript frameworks.',
		createdAt: daysAgo(2),
		companyId: 1,
	},
	{
		id: 2,
		title: 'Designer',
		shortDescription: 'Design engaging user interfaces and experiences.',
		description:
			'As a Designer, you will create visually compelling and user-friendly interfaces for our digital products. Work closely with product managers and engineers to turn ideas into intuitive and delightful user experiences.',
		createdAt: daysAgo(5),
		companyId: 1,
	},
	{
		id: 3,
		title: 'Database Analyst',
		shortDescription: 'Analyze and optimize database performance.',
		description:
			'We are seeking a Database Analyst to monitor, analyze, and optimize our data infrastructure. You will ensure data integrity, write complex queries, and collaborate with developers to improve database performance and reliability.',
		createdAt: daysAgo(8),
		companyId: 2,
	},
	{
		id: 4,
		title: 'Fullstack Engineer',
		shortDescription: 'Work on both frontend and backend systems.',
		description:
			'As a Fullstack Engineer, you will develop and maintain both client-side and server-side components. You will work with a variety of technologies to deliver robust, scalable, and maintainable solutions for our platform.',
		createdAt: daysAgo(11),
		companyId: 3,
	},
	{
		id: 5,
		title: 'Trainee',
		shortDescription: 'Entry-level position for learning and growth.',
		description:
			'Kickstart your career as a Trainee! You will receive mentorship and hands-on experience in software development, learning best practices and contributing to real projects in a supportive environment.',
		createdAt: daysAgo(14),
		companyId: 3,
	},
	{
		id: 6,
		title: 'Tech Lead',
		shortDescription: 'Lead technical teams and projects.',
		description:
			'We are looking for a Tech Lead to guide our engineering team. You will be responsible for architectural decisions, code reviews, and mentoring developers, ensuring high-quality deliverables and technical excellence.',
		createdAt: daysAgo(17),
		companyId: 3,
	},
	{
		id: 7,
		title: 'Backend Engineer',
		shortDescription: 'Build and maintain server-side applications.',
		description:
			'Join us as a Backend Engineer and help design, build, and maintain scalable server-side applications. You will work with APIs, databases, and cloud services to power our products and ensure reliability and performance.',
		createdAt: daysAgo(20),
		companyId: 4,
	},
	{
		id: 8,
		title: 'QA Analyst',
		shortDescription: 'Ensure software quality through testing.',
		description:
			'As a QA Analyst, you will develop and execute test plans to ensure the quality of our software products. You will identify bugs, collaborate with developers, and help us deliver reliable and user-friendly applications.',
		createdAt: daysAgo(23),
		companyId: 5,
	},
	{
		id: 9,
		title: 'Product Manager',
		shortDescription: 'Oversee product development and strategy.',
		description:
			'We are seeking a Product Manager to define product vision, prioritize features, and coordinate cross-functional teams. You will drive product development from conception to launch, ensuring alignment with business goals.',
		createdAt: daysAgo(26),
		companyId: 6,
	},
	{
		id: 10,
		title: 'DevOps Engineer',
		shortDescription: 'Automate and streamline deployment processes.',
		description:
			'As a DevOps Engineer, you will automate deployment pipelines, manage cloud infrastructure, and monitor system health. Your work will ensure our applications are reliable, scalable, and easy to deploy.',
		createdAt: daysAgo(29),
		companyId: 7,
	},
	{
		id: 11,
		title: 'Mobile Developer',
		shortDescription: 'Develop mobile applications for iOS and Android.',
		description:
			'Join our team as a Mobile Developer and create high-quality mobile applications for iOS and Android platforms. You will work with designers and backend engineers to deliver seamless mobile experiences.',
		createdAt: daysAgo(32),
		companyId: 8,
	},
	{
		id: 12,
		title: 'Data Scientist',
		shortDescription: 'Analyze data to extract actionable insights.',
		description:
			'We are looking for a Data Scientist to analyze large datasets, build predictive models, and generate actionable insights. You will collaborate with stakeholders to solve business problems using data-driven approaches.',
		createdAt: daysAgo(35),
		companyId: 9,
	},
	{
		id: 13,
		title: 'Business Analyst',
		shortDescription: 'Bridge business needs with technical solutions.',
		description:
			'As a Business Analyst, you will gather requirements, analyze business processes, and propose technical solutions. You will work closely with stakeholders to ensure our products meet business objectives.',
		createdAt: daysAgo(38),
		companyId: 10,
	},
	{
		id: 14,
		title: 'Cloud Architect',
		shortDescription: 'Design and manage cloud infrastructure.',
		description:
			'We are seeking a Cloud Architect to design, implement, and manage scalable cloud solutions. You will ensure security, reliability, and cost-effectiveness of our cloud infrastructure.',
		createdAt: daysAgo(41),
		companyId: 1,
	},
	{
		id: 15,
		title: 'Support Engineer',
		shortDescription: 'Provide technical support to clients.',
		description:
			'As a Support Engineer, you will assist clients with technical issues, troubleshoot problems, and provide timely solutions. Your role is crucial in ensuring customer satisfaction and product reliability.',
		createdAt: daysAgo(44),
		companyId: 2,
	},
	{
		id: 16,
		title: 'UI Designer',
		shortDescription: 'Create visually appealing user interfaces.',
		description:
			'Join us as a UI Designer and craft visually stunning and intuitive interfaces for our digital products. You will collaborate with UX designers and developers to deliver engaging user experiences.',
		createdAt: daysAgo(47),
		companyId: 3,
	},
	{
		id: 17,
		title: 'UX Researcher',
		shortDescription: 'Research user needs and behaviors.',
		description:
			'We are looking for a UX Researcher to conduct user research, analyze feedback, and provide insights to improve our products. Your work will help us create user-centered solutions that delight our customers.',
		createdAt: daysAgo(50),
		companyId: 4,
	},
	{
		id: 18,
		title: 'Security Engineer',
		shortDescription: 'Ensure the security of systems and data.',
		description:
			'As a Security Engineer, you will identify vulnerabilities, implement security measures, and monitor systems for threats. Your expertise will help protect our data and maintain compliance with industry standards.',
		createdAt: daysAgo(53),
		companyId: 5,
	},
	{
		id: 19,
		title: 'Scrum Master',
		shortDescription: 'Facilitate agile processes and ceremonies.',
		description:
			'We are seeking a Scrum Master to lead agile ceremonies, remove impediments, and foster a culture of continuous improvement. You will work closely with product and engineering teams to deliver value efficiently.',
		createdAt: daysAgo(56),
		companyId: 6,
	},
	{
		id: 20,
		title: 'Agile Coach',
		shortDescription: 'Guide teams in agile methodologies.',
		description:
			'As an Agile Coach, you will mentor teams in agile practices, facilitate workshops, and help drive organizational change. Your guidance will enable teams to deliver high-quality products faster and more effectively.',
		createdAt: daysAgo(59),
		companyId: 7,
	},
	{
		id: 21,
		title: 'Machine Learning Engineer',
		shortDescription: 'Develop and deploy machine learning models.',
		description:
			'Join our team as a Machine Learning Engineer and build scalable machine learning models for real-world applications. You will work with data scientists and engineers to deploy models into production environments.',
		createdAt: daysAgo(62),
		companyId: 8,
	},
	{
		id: 22,
		title: 'AI Specialist',
		shortDescription: 'Implement artificial intelligence solutions.',
		description:
			'We are looking for an AI Specialist to design and implement AI-driven solutions. You will work on projects involving natural language processing, computer vision, and other cutting-edge AI technologies.',
		createdAt: daysAgo(65),
		companyId: 9,
	},
	{
		id: 23,
		title: 'Game Developer',
		shortDescription: 'Design and develop interactive games.',
		description:
			'As a Game Developer, you will create engaging and interactive games for various platforms. You will collaborate with artists and designers to bring creative concepts to life and deliver memorable gaming experiences.',
		createdAt: daysAgo(68),
		companyId: 10,
	},
	{
		id: 24,
		title: 'Content Strategist',
		shortDescription: 'Plan and manage content strategies.',
		description:
			'We are seeking a Content Strategist to plan, develop, and manage content across multiple channels. You will ensure our messaging is consistent, engaging, and aligned with business objectives.',
		createdAt: daysAgo(71),
		companyId: 1,
	},
	{
		id: 25,
		title: 'SEO Specialist',
		shortDescription: 'Optimize content for search engines.',
		description:
			'As an SEO Specialist, you will optimize website content, analyze search trends, and implement strategies to improve our search engine rankings. Your work will drive organic traffic and increase online visibility.',
		createdAt: daysAgo(74),
		companyId: 2,
	},
	{
		id: 26,
		title: 'Marketing Analyst',
		shortDescription: 'Analyze marketing data and trends.',
		description:
			'Join our team as a Marketing Analyst and help us make data-driven decisions. You will analyze marketing campaigns, track key metrics, and provide actionable insights to improve our marketing strategies.',
		createdAt: daysAgo(77),
		companyId: 3,
	},
	{
		id: 27,
		title: 'Sales Engineer',
		shortDescription: 'Support sales with technical expertise.',
		description:
			'We are looking for a Sales Engineer to provide technical support during the sales process. You will work closely with sales teams and clients to understand requirements and demonstrate product capabilities.',
		createdAt: daysAgo(80),
		companyId: 4,
	},
	{
		id: 28,
		title: 'Customer Success Manager',
		shortDescription: 'Ensure customer satisfaction and retention.',
		description:
			'As a Customer Success Manager, you will build strong relationships with clients, ensure their success with our products, and drive retention. Your proactive support will help customers achieve their goals.',
		createdAt: daysAgo(83),
		companyId: 5,
	},
	{
		id: 29,
		title: 'Technical Writer',
		shortDescription: 'Create clear technical documentation.',
		description:
			'Join us as a Technical Writer and create clear, concise, and accurate documentation for our products. You will work with engineers and product managers to make complex concepts easy to understand.',
		createdAt: daysAgo(86),
		companyId: 6,
	},
	{
		id: 30,
		title: 'Release Manager',
		shortDescription: 'Coordinate and manage software releases.',
		description:
			'We are seeking a Release Manager to coordinate software releases, manage schedules, and ensure smooth deployments. You will work with cross-functional teams to deliver high-quality releases on time.',
		createdAt: daysAgo(89),
		companyId: 7,
	},
];

const jobApplications: JobApplication[] = [
	[
		{ id: 1, label: 'Tell us about yourself', type: 'text' },
		{ id: 2, label: 'Why do you want to work here?', type: 'text' },
		{
			id: 3,
			label: 'How much experience do you have?',
			type: 'select',
			options: [
				{ id: 1, label: '> 1 year' },
				{ id: 2, label: '1-2 years' },
				{ id: 3, label: '2-3 years' },
				{ id: 4, label: '3+ years' },
			],
		},
	],
];

export default class JobsRepository extends InMemoryRepository implements IRepository<Job> {
	constructor(private items = jobs) {
		super();
	}

	public async find(filters?: Partial<Job>): Promise<Job | undefined> {
		return this.cache(['jobs', 'find', filters], () => this.items.find((job) => match(job, filters)));
	}

	public async findAll(filters?: Partial<Job>): Promise<Job[]> {
		return this.cache(['jobs', 'findAll', filters], () => this.items.filter((job) => match(job, filters)));
	}

	public async findRelated(filters?: Partial<Job>): Promise<Job[]> {
		return this.cache(['jobs', 'findRelated', filters], () => getRandomSample(this.items, 5));
	}

	public async findApplication(filters?: Partial<Job>) {
		return this.cache(['jobs', 'findApplication', filters], () => getRandomItem(jobApplications));
	}

	public async registerApplication(filters: Partial<Job>, payload: CreateJobApplicationDto) {
		console.log(payload);
		return this.invalidateCache(['jobs', 'findApplication', filters]);
	}
}
