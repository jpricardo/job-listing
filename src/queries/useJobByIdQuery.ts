import { useQuery } from '@tanstack/react-query';

import JobService from '@/services/JobService';

export default function useJobByIdQuery(id?: number) {
	const jobService = new JobService();
	return useQuery({ queryKey: ['job', id], queryFn: () => jobService.getById(id) });
}
