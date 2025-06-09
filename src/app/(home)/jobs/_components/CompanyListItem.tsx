import { Container, Typography } from '@jpricardo/component-library';

import { Company } from '@/app/_lib/models/company.model';
import JobService from '@/app/_lib/services/job.service';

import { Suspense } from 'react';
import JobList, { JobListSkeleton } from './JobList';

const jobService = new JobService();

type Props = Readonly<{ data: Company }>;

export default function CompanyListItem({ data }: Props) {
	const jobs = jobService.getAll({ companyId: data.id });

	return (
		<Container className='flex flex-col gap-4'>
			<div className='flex flex-row gap-2'>
				<div className='h-14 w-14 rounded-xs border' />

				<div className='flex flex-col justify-center gap-0'>
					<div className='flex flex-row items-center gap-4'>
						<Typography.Title size='small'>{data.name}</Typography.Title>

						<div className='flex flex-row items-center gap-1 text-green-600 dark:text-green-400'>
							<div role='img' className='h-2 w-2 animate-pulse rounded-full bg-green-600 dark:bg-green-400' />
							<Typography.Footnote>Hiring</Typography.Footnote>
						</div>
					</div>

					<Typography.Footnote>{data.description}</Typography.Footnote>
				</div>
			</div>

			<div className='flex flex-row gap-2'>
				{data.tags.map((tag, idx) => {
					return (
						<Typography.Footnote
							key={idx}
							size='small'
							className='px-2 py-1 hover:backdrop-brightness-90 dark:hover:backdrop-brightness-110'
						>
							{tag}
						</Typography.Footnote>
					);
				})}
			</div>

			<Suspense fallback={<JobListSkeleton />}>
				<JobList items={jobs} />
			</Suspense>
		</Container>
	);
}
