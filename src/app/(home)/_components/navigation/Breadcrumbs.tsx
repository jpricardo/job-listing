'use client';
import { Typography } from '@jpricardo/component-library';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Breadcrumbs() {
	const pathname = usePathname();
	const segments = pathname.split('/').filter((item) => item);

	return (
		<div className='flex flex-row items-baseline gap-2'>
			{segments.map((item, idx, arr) => {
				const href = `/${segments.slice(0, idx + 1).join('/')}`;

				return (
					<Fragment key={idx}>
						<Link href={href}>
							<Typography.Footnote className='capitalize hover:underline'>{item}</Typography.Footnote>
						</Link>

						{arr.length > 0 && idx < arr.length - 1 && <Typography.Footnote>/</Typography.Footnote>}
					</Fragment>
				);
			})}
		</div>
	);
}
