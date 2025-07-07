import 'server-only';

import { CreateJobApplicationDto } from '../dto/create-job-application.dto';
import { JobApplication } from '../models/job-application.model';
import { Job } from '../models/job.model';
import JobsRepository from '../repositories/jobs.repository';
import { IDType } from '../types';
import Service from './service';

export class JobService extends Service {
	constructor(private jobsRepository = new JobsRepository()) {
		super();
	}

	public async getAll(filters?: Partial<Job>): Promise<Job[]> {
		const jobs = this.jobsRepository.findAll(filters);

		return this.request(jobs);
	}

	public async getById(id: IDType): Promise<Job | undefined> {
		const job = this.jobsRepository.find({ id });

		return this.request(job);
	}

	public async getRelated(id: IDType): Promise<Job[]> {
		const jobs = this.jobsRepository.findRelated({ id });

		return this.request(jobs);
	}

	public async getApplicationById(id: IDType): Promise<JobApplication | undefined> {
		const application = this.jobsRepository.findApplication({ id });

		return this.request(application);
	}

	public async sendApplication(id: IDType, payload: CreateJobApplicationDto) {
		return this.request(this.jobsRepository.registerApplication({ id }, payload));
	}
}

const jobService = new JobService();
export default jobService;
