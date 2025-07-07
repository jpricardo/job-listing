'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function TagLinkSkeleton() {
	return (
		<div className='mx-2 my-1 inline-block h-4 w-16 animate-pulse backdrop-brightness-80 dark:backdrop-brightness-120' />
	);
}

type Props = Readonly<{ name: string; className?: string }>;
export default function TagLink({ className, name }: Props) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	return (
		<Link
			href='#'
			className='mx-2 my-1 inline-block hover:underline'
			onClick={(e) => {
				e.preventDefault();
				const params = new URLSearchParams(searchParams);
				params.set('tags', `["${name}"]`);

				replace(`${pathname}?${params.toString()}`);
			}}
		>
			<span className={className}>{name}</span>
		</Link>
	);
}
