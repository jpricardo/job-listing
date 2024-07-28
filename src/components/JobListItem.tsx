import { Badge, Flex, Typography } from '@jpricardo/component-library';
import React, { memo } from 'react';
import styled from 'styled-components';

import { AreaType, getDateDifferenceInDays, Job, JobType, SeniorityLevelType } from '@/lib';
import NumberFormatter from '@/lib/NumberFormatter';

import Container from './containers/Container';

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
							<Typography.Title>{data.title}</Typography.Title>

							<Flex style={{ flex: 1 }}>
								<Badge style={{ backgroundColor: '#155e28', color: 'white', borderColor: '#155e28' }}>
									<>{NumberFormatter.format(data.yearlySalary, 'USD')} /yr</>
								</Badge>
							</Flex>

							<Typography.Footnote>
								{daysAgo === 0 && 'Today'}
								{daysAgo === 1 && 'Yesterday'}
								{daysAgo > 1 && <>{daysAgo} days ago</>}
							</Typography.Footnote>
						</Flex>
						<Typography.Footnote>{data.company}</Typography.Footnote>
					</Flex>

					<Flex gap='0.25rem' align='center' style={{ flexWrap: 'wrap' }}>
						<Badge
							style={{
								background: areaTypeColors[data.areaType].bg,
								borderColor: areaTypeColors[data.areaType].bg,
								color: areaTypeColors[data.areaType].color,
							}}
						>
							{data.areaType}
						</Badge>

						<Badge
							style={{
								background: jobTypeColors[data.jobType].bg,
								borderColor: jobTypeColors[data.jobType].bg,
								color: jobTypeColors[data.jobType].color,
							}}
						>
							{data.jobType}
						</Badge>

						<Badge
							style={{
								background: seniorityLevelColors[data.seniorityLevel].bg,
								borderColor: seniorityLevelColors[data.seniorityLevel].bg,
								color: seniorityLevelColors[data.seniorityLevel].color,
							}}
						>
							{data.seniorityLevel}
						</Badge>

						{data.tags.map((tag) => (
							<Badge key={tag} style={{ background: '#f3f3f3', borderColor: '#f3f3f3', color: 'black' }}>
								{tag}
							</Badge>
						))}
					</Flex>
				</Flex>

				<Typography.Body>{data.shortDescription}</Typography.Body>
			</Flex>
		</StyledJobListItem>
	);
}

export default memo(JobListItem);
