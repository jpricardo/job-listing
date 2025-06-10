import { Button, Typography } from '@jpricardo/component-library';
import Link from 'next/link';
import { use } from 'react';

import { auth } from '@/app/_lib/auth';
import { getDateDifferenceInDays } from '@/app/_lib/helpers';
import { Job } from '@/app/_lib/models/job.model';

type JobListItemProps = React.HTMLAttributes<HTMLDivElement> & {
	data: Job;
	active?: boolean;
};

export default function JobListItem({ data, active, ...props }: JobListItemProps) {
	const daysAgo = getDateDifferenceInDays(data.createdAt, new Date());
	const href = `/jobs/${data.id.toString()}`;
	const session = use(auth());

	return (
		<div className='flex flex-row justify-between' {...props}>
			<div className='flex flex-col'>
				<Link href={href} className='hover:underline'>
					<Typography.Body>{data.title}</Typography.Body>
					<Typography.Footnote> - {data.shortDescription}</Typography.Footnote>
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
		</div>
	);
}
