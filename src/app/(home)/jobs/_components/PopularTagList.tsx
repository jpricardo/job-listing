import { TagInfoDto } from '@/data/dto/tag-info.dto';
import CompanyService from '@/data/services/company.service';

import TagLink, { TagLinkSkeleton } from './TagLink';

const companyService = new CompanyService();

async function getTagSizes(tags: TagInfoDto[]) {
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
				<TagLinkSkeleton key={index} />
			))}
		</div>
	);
}

type Props = Readonly<{ ammount: number }>;

export default async function PopularTagList({ ammount }: Props) {
	const tags = await companyService.getPopularTags(ammount);
	const tagSizes = await getTagSizes(tags);

	return (
		<section>
			{tags.map(({ name, count }) => (
				<TagLink key={name} name={name} className={tagSizes.get(count)} />
			))}
		</section>
	);
}
