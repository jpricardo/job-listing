import { Metadata } from 'next';

import CompanyService from '@/app/_lib/services/company.service';

import CompanyList from './_components/CompanyList';

const companyService = new CompanyService();

export const metadata: Metadata = {
	title: 'Jobs',
};

export default function JobsPage() {
	const companies = companyService.getAll();

	return (
		<div className='flex flex-row gap-4'>
			<div className='flex flex-9/12 flex-col'>
				<CompanyList items={companies} />
			</div>

			<div className='flex flex-3/12'>tags</div>
		</div>
	);
}
