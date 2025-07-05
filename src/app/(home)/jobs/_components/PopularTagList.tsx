import { TagInfo } from '@/data/models/tag-info.model';
import CompanyService from '@/data/services/company.service';
import Link from 'next/link';

const companyService = new CompanyService();

async function getTagSizes(tags: TagInfo[]) {
	const map = new Map<number, string>();

	const sortedTags = tags.toSorted((a, b) => b.count - a.count);
	const max = sortedTags.at(0)?.count ?? 0;
	const min = sortedTags.at(-1)?.count ?? 0;
	const range = max - min;

	const sizeCount = 4;
	const sizeClasses = ['text-sm', 'text-md', 'text-lg', 'text-4xl'];
	const sizeLength = Math.ceil(range / Math.min(sizeCount, range));

	for (let i = 1; i <= sizeCount; i++) {
		const sizeClass = sizeClasses[i - 1];
		const sizeMin = min + sizeLength * (i - 1);
		const sizeMax = sizeMin + sizeLength;

		for (let k = sizeMin; k <= sizeMax; k++) {
			map.set(k, sizeClass);
		}
	}

	return map;
}

export function PopularTagListSkeleton() {
	const items = Array.from({ length: 20 });

	return (
		<div>
			{items.map((_, index) => (
				<div
					key={index}
					className='mx-2 my-1 inline-block h-4 w-16 animate-pulse backdrop-brightness-80 dark:backdrop-brightness-120'
				/>
			))}
		</div>
	);
}

export default async function PopularTagList() {
	const tags = await companyService.getPopularTags();
	const tagSizes = await getTagSizes(tags);

	return (
		<section>
			{tags.map(({ name, count }) => (
				<Link key={name} href='#' className='mx-2 my-1 inline-block hover:underline'>
					<span className={tagSizes.get(count)}>{name}</span>
				</Link>
			))}
		</section>
	);
}
