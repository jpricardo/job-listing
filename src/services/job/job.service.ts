import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import JobApi, { IJobApi } from './job.api';

export default class JobService {
	constructor(private api: IJobApi = new JobApi()) {}

	public async create(payload: CreateJobDto) {
		return this.api.create(payload);
	}

	public async getAll() {
		return await this.api.getJobs();
	}

	public async getById(id: number) {
		return this.api.getJobById(id);
	}

	public async update(id: Job['id'], payload: UpdateJobDto) {
		return this.api.update(id, payload);
	}

	public async delete(id: Job['id']) {
		return this.api.delete(id);
	}
}
