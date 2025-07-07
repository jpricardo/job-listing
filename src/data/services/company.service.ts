import 'server-only';

import { TagInfoDto } from '../dto/tag-info.dto';
import { getRandomNumber, getRandomSample } from '../helpers';
import { Company } from '../models/company.model';
import CompaniesRepository from '../repositories/companies.repository';
import TagsRepository from '../repositories/tags.repository';
import { IDType } from '../types';
import Service from './service';

function assignRandomTags(company: Company, tags: string[]) {
	if (company.tags.length) return;
	company.tags = getRandomSample(tags, getRandomNumber(3, 6));
}

export class CompanyService extends Service {
	constructor(
		private companiesRepository = new CompaniesRepository(),
		private tagsRepository = new TagsRepository(),
	) {
		super();

		const companiesPromise = this.companiesRepository.findAll();
		const tagsPromise = this.tagsRepository.findAll();

		Promise.all([companiesPromise, tagsPromise]).then(([companies, tags]) => {
			companies.forEach((company) => assignRandomTags(company, tags));
		});
	}

	public async getAll(filters?: Partial<Company>): Promise<Company[]> {
		return this.request(this.companiesRepository.findAll(filters));
	}

	public async getById(id: IDType): Promise<Company | undefined> {
		return this.request(this.companiesRepository.find({ id }));
	}

	public async getPopularTags(limit: number): Promise<TagInfoDto[]> {
		const companies = await this.companiesRepository.findAll();
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

export default new CompanyService();
