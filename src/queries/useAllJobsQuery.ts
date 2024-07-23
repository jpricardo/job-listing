import { useQuery } from '@tanstack/react-query';

import JobService from '@/services/JobService';

export default function useAllJobsQuery() {
	const jobService = new JobService();
	return useQuery({ queryKey: ['job'], queryFn: () => jobService.getAll() });
}
