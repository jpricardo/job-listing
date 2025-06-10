import { Typography } from '@jpricardo/component-library';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getDateDifferenceInDays } from '@/app/_lib/helpers';
import CompanyService from '@/app/_lib/services/company.service';
import JobService from '@/app/_lib/services/job.service';
import { IDType } from '@/app/_lib/types';

import CompanyAvatar from '../../_components/CompanyAvatar';

const jobService = new JobService();
const companyService = new CompanyService();

type Props = Readonly<{ jobId: IDType }>;

export default async function RelatedJobListItem({ jobId }: Props) {
	const job = await jobService.getById(jobId);
	if (!job) notFound();

	const company = await companyService.getById(job.companyId);
	if (!company) notFound();

	const daysAgo = getDateDifferenceInDays(job.createdAt, new Date());

	return (
		<div key={job.id} className='flex flex-row gap-2'>
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
		</div>
	);
}
