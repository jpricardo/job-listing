import { Button, Container, Divider, Typography } from '@jpricardo/component-library';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { auth } from '@/app/_lib/auth';
import { getDateDifferenceInDays } from '@/app/_lib/helpers';
import JobService from '@/app/_lib/services/job.service';
import { IDType } from '@/app/_lib/types';

import CompanyDetails, { CompanyDetailsSkeleton } from '../_components/CompanyDetails';
import ApplicationForm from './_components/ApplicationForm';
import RelatedJobs from './_components/RelatedJobs';

type Props = Readonly<{ params: Promise<{ jobId: IDType }> }>;

const jobService = new JobService();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { jobId } = await params;
	const data = await jobService.getById(jobId);

	return { title: data?.title };
}

export default async function JobDetailsPage({ params }: Props) {
	const { jobId } = await params;
	const data = await jobService.getById(jobId);

	if (!data) notFound();

	const session = await auth();
	const daysAgo = getDateDifferenceInDays(data.createdAt, new Date());

	return (
		<div className='flex flex-row gap-4'>
			<Container className='flex flex-8/12 flex-col gap-6'>
				<div className='flex flex-row items-start justify-between gap-4'>
					<Suspense fallback={<CompanyDetailsSkeleton />}>
						<CompanyDetails companyId={data.companyId} />
					</Suspense>

					<div className='flex flex-row items-center gap-2'>{session && <Button variant='text'>Save</Button>}</div>
				</div>

				<Divider />

				<div className='flex flex-col'>
					<Typography.Title>{data.title}</Typography.Title>
					<Typography.Body>{data.shortDescription}</Typography.Body>
					<Typography.Footnote>
						{daysAgo === 0 && 'Today'}
						{daysAgo === 1 && 'Yesterday'}
						{daysAgo > 1 && <>{daysAgo} days ago</>}
					</Typography.Footnote>
				</div>

				<div className='flex flex-col gap-2'>
					<Typography.Title>About the job</Typography.Title>

					<Typography.Body>{data.description}</Typography.Body>
				</div>

				<Divider />

				<div className='flex flex-col gap-2'>
					<Typography.Title>Application Form</Typography.Title>

					<Suspense fallback={<>Loading...</>}>
						<ApplicationForm jobId={jobId} />
					</Suspense>
				</div>
			</Container>

			<Container className='flex flex-4/12 flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<Typography.Title size='small'>Similar Jobs</Typography.Title>
					<Divider />
				</div>

				<Suspense fallback={<span>Loading...</span>}>
					<RelatedJobs jobId={jobId} />
				</Suspense>
			</Container>
		</div>
	);
}
