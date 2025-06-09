import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { use } from 'react';

import JobService from '@/app/_lib/services/job.service';
import { IDType } from '@/app/_lib/types';

type Props = Readonly<{ params: Promise<{ jobId: IDType }> }>;

const jobService = new JobService();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { jobId } = await params;
	const data = await jobService.getById(jobId);

	return { title: data?.title };
}

export default function JobDetailsPage({ params }: Props) {
	const { jobId } = use(params);
	const data = use(jobService.getById(jobId));

	if (!data) notFound();

	return <>Job details</>;
}
