import { Metadata } from 'next';
import { Suspense } from 'react';

import { Company } from '@/data/models/company.model';

import { isObjectEmpty, parseSearchParams } from '../_lib/helpers';
import CompanyList, { CompanyListSkeleton } from './_components/CompanyList';
import { Filters } from './_components/Filters';
import PopularTagList, { PopularTagListSkeleton } from './_components/PopularTagList';

export const metadata: Metadata = {
	title: 'Jobs',
};

type Props = Readonly<{ searchParams: Promise<Partial<Company>> }>;

export default async function JobsPage({ searchParams }: Props) {
	const filters = parseSearchParams(await searchParams);
	const hasFilters = !isObjectEmpty(filters);

	return (
		<div className='flex flex-row gap-4'>
			<article className='flex flex-9/12'>
				<Suspense fallback={<CompanyListSkeleton />}>
					<CompanyList filters={filters} />
				</Suspense>
			</article>

			<aside className='flex flex-3/12 flex-col gap-2'>
				<Filters filters={filters} allowClear={hasFilters} />

				<Suspense fallback={<PopularTagListSkeleton />}>
					<PopularTagList ammount={30} />
				</Suspense>
			</aside>
		</div>
	);
}
