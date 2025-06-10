import { Container } from '@jpricardo/component-library';
import { Suspense } from 'react';

import { Company } from '@/app/_lib/models/company.model';
import JobService from '@/app/_lib/services/job.service';

import CompanyDetails from './CompanyDetails';
import JobList, { JobListSkeleton } from './JobList';

const jobService = new JobService();

type Props = Readonly<{ data: Company }>;

export default function CompanyListItem({ data }: Props) {
	const jobs = jobService.getAll({ companyId: data.id });

	return (
		<Container className='flex flex-col gap-4'>
			<CompanyDetails companyId={data.id} />

			<Suspense fallback={<JobListSkeleton />}>
				<JobList items={jobs} />
			</Suspense>
		</Container>
	);
}
