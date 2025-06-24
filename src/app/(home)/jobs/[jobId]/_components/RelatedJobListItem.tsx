import { Typography } from '@jpricardo/component-library';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getDateDifferenceInDays } from '@/app/_lib/helpers';
import CompanyService from '@/app/_lib/services/company.service';
import JobService from '@/app/_lib/services/job.service';
import { IDType } from '@/app/_lib/types';

import CompanyAvatar, { CompanyAvatarSkeleton } from '../../_components/CompanyAvatar';

const jobService = new JobService();
const companyService = new CompanyService();

export function RelatedJobListItemSkeleton() {
	return (
		<article className='flex flex-row gap-2'>
			<CompanyAvatarSkeleton size={48} />

			<div className='flex flex-col gap-2.5'>
				<div className='h-5 w-32 animate-pulse backdrop-brightness-80 dark:backdrop-brightness-120' />
				<div className='h-3 w-24 animate-pulse backdrop-brightness-80 dark:backdrop-brightness-120' />
			</div>
		</article>
	);
}

type Props = Readonly<{ jobId: IDType }>;
export default async function RelatedJobListItem({ jobId }: Props) {
	const job = await jobService.getById(jobId);
	if (!job) notFound();

	const company = await companyService.getById(job.companyId);
	if (!company) notFound();

	const daysAgo = getDateDifferenceInDays(job.createdAt, new Date());

	return (
		<article key={job.id} className='flex flex-row gap-2'>
			<CompanyAvatar companyName={company.name} size={48} />

			<div className='flex flex-col gap-0'>
				<Link href={job.id.toString()}>
					<Typography.Title size='small' className='hover:underline'>
						{job.title}
					</Typography.Title>
				</Link>
				<Typography.Footnote>
					{daysAgo === 0 && 'Today'}
					{daysAgo === 1 && 'Yesterday'}
					{daysAgo > 1 && <>{daysAgo} days ago</>}
				</Typography.Footnote>
			</div>
		</article>
	);
}
