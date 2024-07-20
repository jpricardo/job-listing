import { Flex } from 'antd';
import React, { memo } from 'react';
import styled from 'styled-components';

import { getDateDifferenceInDays, Job } from '@/lib';
import NumberFormatter from '@/lib/NumberFormatter';

import Badge from './containers/Badge';
import Container from './containers/Container';
import Body from './typography/Body';
import Footnote from './typography/Footnote';
import Title from './typography/Title';

const StyledJobListItem = styled(Container)<{ $active?: boolean }>(({ $active }) => {
	const baseProps: React.CSSProperties = {
		userSelect: 'none',
		transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
	};

	return $active
		? {
				borderColor: '#a3a3a3',
				backgroundColor: '#f3f3f3',
				...baseProps,
			}
		: { ...baseProps };
});

type JobListItemProps = React.HTMLAttributes<HTMLDivElement> & {
	data: Job;
	active?: boolean;
};

/**
 * Component representing an entry in the Job List
 */
function JobListItem({ data, active, ...props }: JobListItemProps) {
	const daysAgo = getDateDifferenceInDays(data.createdAt, new Date());

	return (
		<StyledJobListItem hover $active={active} {...props}>
			<Flex gap='1rem' vertical>
				<Flex justify='space-between'>
					<Flex gap='0.5rem' vertical>
						<Flex align='center' gap={'1rem'}>
							<Title>{data.title}</Title>

							<Badge
								content={NumberFormatter.format(data.yearlySalary, 'USD')}
								style={{ backgroundColor: '#155e28', color: 'white', borderColor: '#155e28' }}
							/>
						</Flex>

						<Flex gap='0.25rem' align='center'>
							<Footnote>{data.company}</Footnote>

							<Badge content={data.jobType} />

							<Badge content={data.areaType} />

							{data.tags.map((tag) => (
								<Badge key={tag} content={tag} />
							))}
						</Flex>
					</Flex>

					<Flex>
						<Footnote>
							{daysAgo === 0 && 'Today'}
							{daysAgo === 1 && 'Yesterday'}
							{daysAgo > 1 && <>{daysAgo} days ago</>}
						</Footnote>
					</Flex>
				</Flex>

				<Body>{data.description}</Body>
			</Flex>
		</StyledJobListItem>
	);
}

export default memo(JobListItem);
