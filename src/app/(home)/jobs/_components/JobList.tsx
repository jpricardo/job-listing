import { Suspense } from 'react';

import JobService from '@/data/services/job.service';
import { IDType } from '@/data/types';

import JobListItem, { JobListItemSkeleton } from './JobListItem';

const jobService = new JobService();

export function JobListSkeleton() {
	const items = Array.from({ length: 2 });

	return (
		<div className='flex flex-col gap-2'>
			{items.map((_, index) => (
				<JobListItemSkeleton key={index} />
			))}
		</div>
	);
}

type Props = Readonly<{ companyId: IDType }>;

/**
 * Component representing the Job list
 */
export default async function JobList({ companyId }: Props) {
	const jobs = await jobService.getAll({ companyId });

	return (
		<div className='flex flex-col gap-2'>
			{jobs.map((item) => (
				<Suspense key={item.id} fallback={<JobListItemSkeleton />}>
					<JobListItem jobId={item.id} />
				</Suspense>
			))}
		</div>
	);
}
