import { Button, Typography } from '@jpricardo/component-library';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { auth } from '@/app/_lib/auth';
import { getDateDifferenceInDays } from '@/app/_lib/helpers';
import JobService from '@/data/services/job.service';
import { IDType } from '@/data/types';

const jobService = new JobService();

export function JobListItemSkeleton() {
	return <div className='h-8 w-full animate-pulse backdrop-brightness-80 dark:backdrop-brightness-120' />;
}

type JobListItemProps = React.HTMLAttributes<HTMLDivElement> & { jobId: IDType };
export default async function JobListItem({ jobId, ...props }: JobListItemProps) {
	const job = await jobService.getById(jobId);
	if (!job) return notFound();

	const daysAgo = getDateDifferenceInDays(job.createdAt, new Date());
	const href = `/jobs/${jobId.toString()}`;
	const session = await auth();

	return (
		<article className='flex flex-row justify-between' {...props}>
			<div className='flex flex-col'>
				<Link href={href} className='hover:underline'>
					<Typography.Body>{job.title}</Typography.Body>
					<Typography.Footnote> - {job.shortDescription}</Typography.Footnote>
				</Link>

				<Typography.Footnote>
					{daysAgo === 0 && 'Today'}
					{daysAgo === 1 && 'Yesterday'}
					{daysAgo > 1 && <>{daysAgo} days ago</>}
				</Typography.Footnote>
			</div>

			<div className='flex flex-row items-center gap-2'>
				{session && <Button variant='text'>Save</Button>}

				<Link href={href}>
					<Button>Apply</Button>
				</Link>
			</div>
		</article>
	);
}
