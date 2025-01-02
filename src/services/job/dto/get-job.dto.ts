import { Job } from '../entities/job.entity';

export type GetJobDto = Omit<Job, 'createdAt'> & {
	createdAt: string;
};
