import { Container } from '@jpricardo/component-library';
import { Suspense } from 'react';

import { IDType } from '@/data/types';

import CompanyDetails, { CompanyDetailsSkeleton } from './CompanyDetails';
import JobList, { JobListSkeleton } from './JobList';

export function CompanyListItemSkeleton() {
	return (
		<Container className='flex h-48 animate-pulse flex-col gap-4'>
			<CompanyDetailsSkeleton />
			<JobListSkeleton />
		</Container>
	);
}

type Props = Readonly<{ companyId: IDType }>;
export default function CompanyListItem({ companyId }: Props) {
	return (
		<Container className='flex flex-col gap-4'>
			<Suspense fallback={<CompanyDetailsSkeleton />}>
				<CompanyDetails companyId={companyId} />
			</Suspense>

			<Suspense fallback={<JobListSkeleton />}>
				<JobList companyId={companyId} />
			</Suspense>
		</Container>
	);
}
