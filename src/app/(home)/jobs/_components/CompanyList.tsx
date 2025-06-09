import { Typography } from '@jpricardo/component-library';

import { Company } from '@/app/_lib/models/company.model';

import CompanyListItem from './CompanyListItem';

type Props = Readonly<{ items: Promise<Company[]> }>;

export default async function CompanyList({ items }: Props) {
	const companies = await items;

	return (
		<div className='flex flex-col gap-2'>
			{!companies.length && <Typography.Footnote>No data</Typography.Footnote>}

			<div className='flex flex-col gap-4'>
				{companies.map((item, index) => (
					<CompanyListItem key={index} data={item} />
				))}
			</div>
		</div>
	);
}
