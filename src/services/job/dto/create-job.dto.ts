import { Job } from '../entities/job.entity';

export type CreateJobDto = Omit<Job, 'id' | 'createdAt'>;
