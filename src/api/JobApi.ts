import { AreaType, getRandomNumber, getRandomSample, Job, JobType, SeniorityLevelType } from '@/lib';

import BaseApi from './BaseApi';

const getRandomPastDate = () => {
	const date = new Date();
	date.setDate(date.getDate() - getRandomNumber(0, 60));

	return date;
};

const getRandomJob = (index: number): Job => {
	const jobTypes: JobType[] = ['FullTime', 'Hybrid', 'Remote'];
	const areaTypes: AreaType[] = ['Design', 'DevOps', 'Development', 'Management', 'QA'];
	const seniorityLevelTypes: SeniorityLevelType[] = ['Junior', 'Associate', 'Senior', 'Lead'];
	const allTags: string[] = [
		'Agile',
		'Startup',
		'Azure',
		'Kubernetes',
		'AI',
		'Big Data',
		'Kanban',
		'React',
		'Git',
		'Sonarqube',
		'C#',
		'Diverse team',
		'Rust',
		'C++',
		'.Net',
		'Java',
		'Fullstack',
		'Frontend',
		'Backend',
		'GCC',
		'Figma',
		'OOP',
		'TypeScript',
		'JavaScript',
		'Elixir',
		'Python',
		'Docker',
		'Gitflow',
		'CI/CD',
		'UI/UX',
		'Microsoft Clarity',
		'Vercel',
		'SEO',
		'C',
		'SQL',
		'Oracle',
		'Database Management',
		'Material Design',
	];

	return {
		id: index,
		title: `Job ${index + 1}`,
		company: `Company ${index + 1}`,
		shortDescription: `Job description for Job ${index + 1}, posted by Company ${index + 1}`,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare rhoncus euismod. In ac tellus vitae felis tristique fermentum. Vivamus elementum nibh sed ex efficitur, sit amet interdum dui gravida. Integer dui est, dictum vitae aliquet vitae, fringilla at leo. Maecenas mattis faucibus dolor, non rhoncus quam. Nullam volutpat lectus consequat ante laoreet, sed tincidunt augue vestibulum. Nulla vestibulum leo id dui iaculis pharetra.\n\nFusce efficitur porttitor nulla dignissim bibendum. Morbi ornare varius tortor sit amet blandit. Morbi pulvinar metus neque, ac vehicula justo interdum in. Nam vel lobortis massa. In id justo quis est malesuada porttitor ut eget turpis. Ut non turpis in nunc porta consectetur. Quisque consectetur, nisl ut iaculis mollis, est libero sagittis felis, eu efficitur libero leo nec quam. Praesent gravida ullamcorper fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut vel elit pharetra risus cursus aliquam posuere non augue. Curabitur vitae lectus tincidunt, iaculis tortor id, maximus mauris. Duis lacinia id mauris ut porttitor. Sed suscipit varius orci, sed lacinia massa tincidunt id. Etiam ultrices felis eu quam mollis, ut iaculis diam ultricies.\n\nCras lobortis libero mauris, eu aliquet justo maximus sed. Duis varius tortor eget sem feugiat, quis bibendum turpis sagittis. In malesuada molestie risus a facilisis. Nulla facilisi. Proin tristique orci eget iaculis tempor. Aliquam arcu massa, efficitur ac mauris eget, rutrum dictum urna. Etiam eu elit in diam ultricies ultricies ut pulvinar ex. Donec ut odio vel purus porttitor egestas cursus eu neque. Aliquam semper malesuada augue nec scelerisque. Integer vel mauris porttitor, facilisis eros nec, egestas mauris. Fusce accumsan risus vel ligula faucibus varius. In interdum turpis elit, id accumsan augue luctus vitae. Nulla pharetra dignissim lorem. Mauris elementum ante massa, nec auctor nisl interdum eget.\n\nMaecenas luctus quis massa vel luctus. Nam ut sapien hendrerit, cursus sem quis, gravida urna. Praesent tincidunt facilisis egestas. Vestibulum placerat aliquam eleifend. Pellentesque et nunc ac enim ullamcorper suscipit at sed augue. Etiam viverra metus sed rutrum lacinia. Proin sagittis viverra ante id bibendum. Quisque vel auctor ipsum, sed viverra velit. Nunc vitae posuere risus. Nunc nec leo nec enim mollis ultricies. Ut non est nec nisl aliquam maximus quis pulvinar mauris. Integer ultricies vulputate augue egestas consectetur. Fusce magna quam, congue ut odio sodales, feugiat fermentum ipsum. Curabitur diam felis, suscipit non maximus vitae, rutrum ac mi.',
		yearlySalary: getRandomNumber(20000, 250000),

		createdAt: getRandomPastDate(),

		jobType: jobTypes[getRandomNumber(0, jobTypes.length)],
		areaType: areaTypes[getRandomNumber(0, areaTypes.length)],
		seniorityLevel: seniorityLevelTypes[getRandomNumber(0, seniorityLevelTypes.length)],

		tags: getRandomSample(allTags, getRandomNumber(0, 10)),
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
const allJobs = getRandomJobs(69);

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
