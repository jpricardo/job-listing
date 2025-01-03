import HttpAdapter from '@/lib/HttpAdapter';

import { CreateJobDto } from './dto/create-job.dto';
import { GetJobDto } from './dto/get-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

export interface IJobApi {
	create: (payload: CreateJobDto) => Promise<void>;

	getJobs: () => Promise<Job[]>;
	getJobById: (id: Job['id']) => Promise<Job | undefined>;

	update: (id: Job['id'], payload: UpdateJobDto) => Promise<void>;

	delete: (id: Job['id']) => Promise<void>;
}

export default class JobApi implements IJobApi {
	constructor(private readonly adapter = new HttpAdapter()) {}

	public async create(payload: CreateJobDto) {
		return this.adapter.postRequest<CreateJobDto>('/jobs', payload);
	}

	public async getJobs() {
		const data = await this.adapter.getRequest<GetJobDto[]>('/jobs');

		return data.map<Job>((job) => ({ ...job, createdAt: new Date(job.createdAt) }));
	}

	public async getJobById(id: Job['id']) {
		const data = await this.adapter.getRequest<GetJobDto>(`/jobs/${id}`);

		return { ...data, createdAt: new Date(data.createdAt) };
	}

	public async update(id: Job['id'], payload: UpdateJobDto) {
		return this.adapter.patchRequest<UpdateJobDto>(`/jobs/${id}`, payload);
	}

	public async delete(id: Job['id']) {
		return this.adapter.deleteRequest(`/jobs/${id}`);
	}
}
