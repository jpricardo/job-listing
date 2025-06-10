import { Typography } from '@jpricardo/component-library';
import { notFound } from 'next/navigation';

import CompanyService from '@/app/_lib/services/company.service';
import { IDType } from '@/app/_lib/types';

import CompanyAvatar from './CompanyAvatar';

const companyService = new CompanyService();

type Props = Readonly<{ companyId: IDType }>;

export default async function CompanyDetails({ companyId }: Props) {
	const company = await companyService.getById(companyId);

	if (!company) notFound();

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-row gap-4'>
				<CompanyAvatar companyName={company.name} />

				<div className='flex flex-col justify-center gap-0'>
					<div className='flex flex-row items-center gap-4'>
						<Typography.Title size='small'>{company.name}</Typography.Title>

						<div className='flex flex-row items-center gap-1 text-green-600 dark:text-green-400'>
							<div role='img' className='h-2 w-2 animate-pulse rounded-full bg-green-600 dark:bg-green-400' />
							<Typography.Footnote>Hiring</Typography.Footnote>
						</div>
					</div>

					<Typography.Footnote>{company.description}</Typography.Footnote>
				</div>
			</div>

			<div className='flex flex-row gap-2'>
				{company.tags.map((tag, idx) => {
					return (
						<Typography.Footnote
							key={idx}
							size='small'
							className='px-2 py-1 hover:backdrop-brightness-90 dark:hover:backdrop-brightness-110'
						>
							{tag}
						</Typography.Footnote>
					);
				})}
			</div>
		</div>
	);
}
