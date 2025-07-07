'use client';
import { Button, Select } from '@jpricardo/component-library';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Company, CompanyTypeEnum } from '@/data/models/company.model';

import Container from '../../_components/containers/Container';

type Props = Readonly<{ filters?: Partial<Company>; allowClear?: boolean }>;

export function Filters({ filters, allowClear }: Props) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleClear = () => replace(`${pathname}`);

	const handleSubmit = (formData: FormData) => {
		const params = new URLSearchParams(searchParams);
		for (const entry of formData.entries()) {
			const [key, value] = entry;
			params.set(key, value.toString());
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<Container title='Filters' style={{ display: 'flex', flexDirection: 'column' }}>
			<form className='flex grow-1 flex-col justify-between gap-4' action={handleSubmit}>
				<div className='flex flex-col gap-4'>
					<Select
						name='type'
						id='type'
						defaultValue={filters?.type}
						options={[
							{ label: 'Remote only', value: CompanyTypeEnum.RemoteOnly },
							{ label: 'Remote first', value: CompanyTypeEnum.RemoteFirst },
							{ label: 'Hybrid', value: CompanyTypeEnum.Hybrid },
							{ label: 'Presential', value: CompanyTypeEnum.Presential },
						]}
					/>
				</div>

				<div className='flex flex-row justify-end gap-2'>
					{allowClear && (
						<Button variant='danger' type='button' onClick={handleClear}>
							Clear
						</Button>
					)}

					<Button type='submit' variant='primary'>
						Apply
					</Button>
				</div>
			</form>
		</Container>
	);
}
