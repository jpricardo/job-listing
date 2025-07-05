import { Metadata } from 'next';
import { Suspense } from 'react';

import CompanyList, { CompanyListSkeleton } from './_components/CompanyList';
import PopularTagList, { PopularTagListSkeleton } from './_components/PopularTagList';

export const metadata: Metadata = {
	title: 'Jobs',
};

export default function JobsPage() {
	return (
		<div className='flex flex-row gap-4'>
			<article className='flex flex-9/12'>
				<Suspense fallback={<CompanyListSkeleton />}>
					<CompanyList />
				</Suspense>
			</article>

			<aside className='flex flex-3/12'>
				<Suspense fallback={<PopularTagListSkeleton />}>
					<PopularTagList />
				</Suspense>
			</aside>
		</div>
	);
}
