import JobApi, { IJobApi } from '@/api/JobApi';

export default class JobService {
	private api: IJobApi = new JobApi();

	public async getAllJobs() {
		return await this.api.getJobs();
	}

	public async getJobById(id?: number) {
		return this.api.getJobById(id);
	}
}
