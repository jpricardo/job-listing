import { Metadata } from 'next';
import { Suspense } from 'react';

import CompanyList, { CompanyListSkeleton } from './_components/CompanyList';

export const metadata: Metadata = {
	title: 'Jobs',
};

export default function JobsPage() {
	return (
		<div className='flex flex-row gap-4'>
			<article className='flex flex-9/12 flex-col'>
				<Suspense fallback={<CompanyListSkeleton />}>
					<CompanyList />
				</Suspense>
			</article>

			<aside className='flex flex-3/12'>tags</aside>
		</div>
	);
}
