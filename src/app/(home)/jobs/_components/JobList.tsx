import { Typography } from '@jpricardo/component-library';
import { useMemo } from 'react';

import JobListItem from './JobListItem';

type JobListProps = {
	currentPage: number;
	itemsPerPage: number;

	items?: any[];

	activeId: number | undefined;
	onClick: (id?: number) => void;

	loading?: boolean;
};

/**
 * Component representing the Job list
 */
export default function JobList({
	currentPage,
	itemsPerPage,
	items,
	activeId,
	onClick: setActiveId,
	loading,
}: JobListProps) {
	const itemsInPage = useMemo(() => {
		return items?.filter((_, index) => {
			const startIndex = currentPage * itemsPerPage;
			return index >= startIndex && index < startIndex + itemsPerPage;
		});
	}, [items, currentPage, itemsPerPage]);

	// TODO - Loading state
	return (
		<div className='flex flex-col gap-2'>
			<Typography.Footnote>
				{items?.length} results found ({itemsInPage?.length} in this page)
			</Typography.Footnote>

			{!items && <Typography.Footnote>No data</Typography.Footnote>}

			<div className='flex flex-col gap-2 p-1'>
				{itemsInPage?.map((item, index) => {
					return (
						<JobListItem key={index} data={item} onClick={() => setActiveId(item.id)} active={item.id === activeId} />
					);
				})}
			</div>
		</div>
	);
}
