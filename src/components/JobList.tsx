import { Flex } from 'antd';
import { memo, useMemo } from 'react';

import { Job } from '@/services/job/entities/job.entity';
import JobListItem from './JobListItem';

type JobListProps = {
	currentPage: number;
	itemsPerPage: number;

	items?: Job[];

	activeId: number | undefined;
	onClick: (id?: number) => void;

	loading?: boolean;
};

/**
 * Component representing the Job list
 */
function JobList({ currentPage, itemsPerPage, items, activeId, onClick: setActiveId, loading }: JobListProps) {
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
