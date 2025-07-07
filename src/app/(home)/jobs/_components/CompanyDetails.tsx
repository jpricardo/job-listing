import { Typography } from '@jpricardo/component-library';
import { notFound } from 'next/navigation';

import companyService from '@/data/services/company.service';
import { IDType } from '@/data/types';

import CompanyAvatar, { CompanyAvatarSkeleton } from './CompanyAvatar';

export function CompanyDetailsSkeleton() {
	return (
		<article className='flex flex-row gap-4'>
			<CompanyAvatarSkeleton />

			<div className='flex flex-col justify-center gap-2'>
				<div className='h-6 w-24 backdrop-brightness-80 dark:backdrop-brightness-120' />
				<div className='h-4 w-32 backdrop-brightness-80 dark:backdrop-brightness-120' />
			</div>
		</article>
	);
}

type Props = Readonly<{ companyId: IDType }>;
export default async function CompanyDetails({ companyId }: Props) {
	const company = await companyService.getById(companyId);

	if (!company) notFound();

	return (
		<article className='flex flex-col gap-4'>
			<section className='flex flex-row gap-4'>
				<CompanyAvatar companyName={company.name} />

				<section className='flex flex-col justify-center gap-0'>
					<div className='flex flex-row items-center gap-4'>
						<Typography.Title size='small'>{company.name}</Typography.Title>

						<div className='flex flex-row items-center gap-1 text-green-600 dark:text-green-400'>
							<div role='img' className='h-2 w-2 animate-pulse rounded-full bg-green-600 dark:bg-green-400' />
							<Typography.Footnote>Hiring</Typography.Footnote>
						</div>
					</div>

					<Typography.Footnote>{company.description}</Typography.Footnote>
				</section>
			</section>

			<section className='flex flex-row gap-2'>
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
			</section>
		</article>
	);
}
