import { Flex } from 'antd';
import React, { memo } from 'react';
import styled from 'styled-components';

import { getDateDifferenceInDays } from '@/lib';
import NumberFormatter from '@/lib/NumberFormatter';
import { AreaType, Job, JobType, SeniorityLevelType } from '@/services/job/entities/job.entity';

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

	return $active ? { borderColor: '#a3a3a3', backgroundColor: '#f3f3f3', ...baseProps } : { ...baseProps };
});

type JobListItemProps = React.HTMLAttributes<HTMLDivElement> & {
	data: Job;
	active?: boolean;
};

type ColorPalette = { bg: string; color: string };

// TODO - Definitive color palette
const jobTypeColors: Record<JobType, ColorPalette> = {
	FullTime: { bg: '#85D8FF', color: 'black' },
	Hybrid: { bg: '#0070A3', color: 'white' },
	Remote: { bg: '#002F45', color: 'white' },
};

// TODO - Definitive color palette
const areaTypeColors: Record<AreaType, ColorPalette> = {
	Design: { bg: '#E9C2AF', color: 'black' },
	DevOps: { bg: '#B83D00', color: 'white' },
	Development: { bg: '#6F3A1F', color: 'white' },
	Management: { bg: '#402112', color: 'white' },
	QA: { bg: 'black', color: 'white' },
};

// TODO - Definitive color palette
const seniorityLevelColors: Record<SeniorityLevelType, ColorPalette> = {
	Junior: { bg: '#D0CEF2', color: 'black' },
	Associate: { bg: '#A09EE6', color: 'white' },
	Senior: { bg: '#1B1961', color: 'white' },
	Lead: { bg: '#0E0D33', color: 'white' },
};

/**
 * Component representing an entry in the Job List
 */
function JobListItem({ data, active, ...props }: JobListItemProps) {
	const daysAgo = getDateDifferenceInDays(data.createdAt, new Date());

	return (
		<StyledJobListItem hover $active={active} {...props}>
			<Flex gap='1rem' vertical>
				<Flex gap='0.5rem' vertical>
					<Flex gap='0.25rem' vertical>
						<Flex gap='1rem' align='center'>
							<Title>{data.title}</Title>

							<Flex flex={1}>
								<Badge
									content={NumberFormatter.format(data.yearlySalary, 'USD')}
									style={{ backgroundColor: '#155e28', color: 'white', borderColor: '#155e28' }}
								/>
							</Flex>

							<Footnote>
								{daysAgo === 0 && 'Today'}
								{daysAgo === 1 && 'Yesterday'}
								{daysAgo > 1 && <>{daysAgo} days ago</>}
							</Footnote>
						</Flex>
						<Footnote>{data.company}</Footnote>
					</Flex>

					<Flex gap='0.25rem' align='center' wrap>
						<Badge
							content={data.areaType}
							style={{
								background: areaTypeColors[data.areaType].bg,
								borderColor: areaTypeColors[data.areaType].bg,
								color: areaTypeColors[data.areaType].color,
							}}
						/>

						<Badge
							content={data.jobType}
							style={{
								background: jobTypeColors[data.jobType].bg,
								borderColor: jobTypeColors[data.jobType].bg,
								color: jobTypeColors[data.jobType].color,
							}}
						/>

						<Badge
							content={data.seniorityLevel}
							style={{
								background: seniorityLevelColors[data.seniorityLevel].bg,
								borderColor: seniorityLevelColors[data.seniorityLevel].bg,
								color: seniorityLevelColors[data.seniorityLevel].color,
							}}
						/>

						{/* {data.tags.map((tag) => (
							<Badge
								key={tag}
								content={tag}
								style={{ background: '#f3f3f3', borderColor: '#f3f3f3', color: 'black' }}
							/>
						))} */}
					</Flex>
				</Flex>

				<Body>{data.shortDescription}</Body>
			</Flex>
		</StyledJobListItem>
	);
}

export default memo(JobListItem);
