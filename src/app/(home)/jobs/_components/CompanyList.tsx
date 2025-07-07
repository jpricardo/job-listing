import { Typography } from '@jpricardo/component-library';
import { Suspense } from 'react';

import { Company } from '@/data/models/company.model';
import CompanyService from '@/data/services/company.service';

import CompanyListItem, { CompanyListItemSkeleton } from './CompanyListItem';

const companyService = new CompanyService();

export function CompanyListSkeleton() {
	const items = Array.from({ length: 6 });

	return (
		<div className='flex w-full flex-col gap-2'>
			{items.map((_, index) => (
				<CompanyListItemSkeleton key={index} />
			))}
		</div>
	);
}

type Props = Readonly<{ filters?: Partial<Company> }>;

export default async function CompanyList({ filters }: Props) {
	const companies = await companyService.getAll(filters);

	return (
		<div className='flex w-full flex-col gap-2'>
			{!companies.length && <Typography.Footnote>No data</Typography.Footnote>}

			<div className='flex flex-col gap-4'>
				{companies.map((item) => (
					<Suspense key={item.id} fallback={<CompanyListItemSkeleton />}>
						<CompanyListItem companyId={item.id} />
					</Suspense>
				))}
			</div>
		</div>
	);
}
