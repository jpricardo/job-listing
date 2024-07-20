import { Flex } from 'antd';
import { Dispatch, memo, SetStateAction, useMemo, useState } from 'react';

import { Job } from '@/lib';

import JobListItem from './JobListItem';

type JobListProps = {
	currentPage: number;
	itemsPerPage: number;

	items?: Job[];

	activeId: number | undefined;
	setActiveId: Dispatch<SetStateAction<number | undefined>>;

	loading?: boolean;
};

/**
 * Component representing the Job list
 */
function JobList({ currentPage, itemsPerPage, items, activeId, setActiveId, loading }: JobListProps) {
	const itemsInPage = useMemo(() => {
		return items?.filter((_, index) => {
			const startIndex = currentPage * itemsPerPage;
			return index >= startIndex && index < startIndex + itemsPerPage;
		});
	}, [items, currentPage, itemsPerPage]);

	// TODO - Loading state
	return (
		<Flex gap='0.5rem' vertical>
			<span>
				{items?.length} results found ({itemsInPage?.length} in this page)
			</span>

			{!items && <span>No data</span>}

			<Flex gap='0.5rem' vertical>
				{itemsInPage?.map((item, index) => {
					return (
						<JobListItem key={index} data={item} onClick={() => setActiveId(item.id)} active={item.id === activeId} />
					);
				})}
			</Flex>
		</Flex>
	);
}

export default memo(JobList);