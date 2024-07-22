import JobApi, { IJobApi } from '@/api/JobApi';

export default class JobService {
	private api: IJobApi = new JobApi();

	public async getAll() {
		return await this.api.getJobs();
	}

	public async getById(id?: number) {
		return this.api.getJobById(id);
	}
}
