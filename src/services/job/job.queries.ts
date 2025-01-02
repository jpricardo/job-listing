import { useQuery } from '@tanstack/react-query';

import { Job } from './entities/job.entity';
import JobService from './job.service';

export const useJobsQuery = () => {
	const jobService = new JobService();

	return useQuery({ queryKey: ['job'], queryFn: () => jobService.getAll() });
};

export const useJobQuery = (id?: Job['id']) => {
	const jobService = new JobService();

	return useQuery({
		queryKey: ['job', id],
		queryFn: async () => jobService.getById(id as Job['id']),
		enabled: id !== undefined,
	});
};
