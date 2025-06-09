import { Job } from '@/app/_lib/models/job.model';

import JobListItem from './JobListItem';

export function JobListSkeleton() {
	const items = Array.from({ length: 2 });

	return (
		<div className='flex flex-col gap-2'>
			{items.map((_, index) => (
				<div className='animate-pulse p-6 backdrop-brightness-90 dark:backdrop-brightness-120' key={index} />
			))}
		</div>
	);
}

type Props = Readonly<{ items: Promise<Job[]> }>;

/**
 * Component representing the Job list
 */
export default async function JobList({ items }: Props) {
	const jobs = await items;

	return (
		<div className='flex flex-col gap-2'>
			{jobs.map((item, index) => (
				<JobListItem key={index} data={item} />
			))}
		</div>
	);
}
