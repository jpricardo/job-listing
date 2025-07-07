import { Suspense } from 'react';

import jobService from '@/data/services/job.service';
import { IDType } from '@/data/types';

import RelatedJobListItem, { RelatedJobListItemSkeleton } from './RelatedJobListItem';

export function RelatedJobsSkeleton() {
	const items = Array.from({ length: 5 });

	return (
		<div className='flex flex-col gap-4'>
			{items.map((_, index) => (
				<RelatedJobListItemSkeleton key={index} />
			))}
		</div>
	);
}

type Props = Readonly<{ jobId: IDType }>;
export default async function RelatedJobs({ jobId }: Props) {
	const jobs = await jobService.getRelated(jobId);

	return (
		<div className='flex flex-col gap-4'>
			{jobs.map((job) => (
				<Suspense key={job.id} fallback={<RelatedJobListItemSkeleton />}>
					<RelatedJobListItem jobId={job.id} />
				</Suspense>
			))}
		</div>
	);
}
