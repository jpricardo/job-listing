import { Suspense } from 'react';

import JobService from '@/app/_lib/services/job.service';
import { IDType } from '@/app/_lib/types';

import RelatedJobListItem from './RelatedJobListItem';

const jobService = new JobService();

type Props = Readonly<{ jobId: IDType }>;

export default async function RelatedJobs({ jobId }: Props) {
	const jobs = await jobService.getRelated(jobId);

	return (
		<div className='flex flex-col gap-4'>
			{jobs.map((job) => (
				<Suspense key={job.id} fallback={<span>Loading...</span>}>
					<RelatedJobListItem jobId={job.id} />
				</Suspense>
			))}
		</div>
	);
}
