import { Badge, Flex, Typography } from '@jpricardo/component-library';
import React, { memo } from 'react';
import styled from 'styled-components';

import { getDateDifferenceInDays } from '@/lib';
import NumberFormatter from '@/lib/NumberFormatter';
import { AreaType, Job, JobType, SeniorityLevel } from '@/services/job/entities/job.entity';

import Container from './containers/Container';

const StyledJobListItem = styled(Container)<{ $active?: boolean }>`
	user-select: none;
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	box-shadow: ${({ $active, theme }) => ($active ? theme.shadows.xs : '')};
`;

type JobListItemProps = React.HTMLAttributes<HTMLDivElement> & {
	data: Job;
	active?: boolean;
};

type ColorPalette = { bg: string; color: string };

// TODO - Definitive color palette
const jobTypeColors: Record<JobType, ColorPalette> = {
	[JobType.FULLTIME]: { bg: '#85D8FF', color: 'black' },
	[JobType.HYBRID]: { bg: '#0070A3', color: 'white' },
	[JobType.REMOTE]: { bg: '#002F45', color: 'white' },
};

// TODO - Definitive color palette
const areaTypeColors: Record<AreaType, ColorPalette> = {
	[AreaType.DESIGN]: { bg: '#E9C2AF', color: 'black' },
	[AreaType.DEVOPS]: { bg: '#B83D00', color: 'white' },
	[AreaType.DEVELOPMENT]: { bg: '#6F3A1F', color: 'white' },
	[AreaType.MANAGEMENT]: { bg: '#402112', color: 'white' },
	[AreaType.QA]: { bg: 'black', color: 'white' },
};

// TODO - Definitive color palette
const seniorityLevelColors: Record<SeniorityLevel, ColorPalette> = {
	[SeniorityLevel.JUNIOR]: { bg: '#D0CEF2', color: 'black' },
	[SeniorityLevel.ASSOCIATE]: { bg: '#A09EE6', color: 'white' },
	[SeniorityLevel.SENIOR]: { bg: '#1B1961', color: 'white' },
	[SeniorityLevel.LEAD]: { bg: '#0E0D33', color: 'white' },
};

/**
 * Component representing an entry in the Job List
 */
function JobListItem({ data, active, ...props }: JobListItemProps) {
	const daysAgo = getDateDifferenceInDays(data.createdAt, new Date());

	return (
		<StyledJobListItem hover variant={active ? 'default' : 'low'} $active={active} {...props}>
			<Flex gap='1rem' vertical>
				<Flex gap='0.5rem' vertical>
					<Flex gap='0.25rem' vertical>
						<Flex gap='1rem' align='center'>
							<Typography.Title>{data.title}</Typography.Title>

							<Flex style={{ flex: 1 }}>
								<Badge style={{ backgroundColor: '#155e28', color: 'white', borderColor: '#155e28' }}>
									<>{NumberFormatter.format(data.annualSalary, 'USD')} /yr</>
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

						{/* {data.tags.map((tag) => (
							<Badge key={tag}>{tag}</Badge>
						))} */}
					</Flex>
				</Flex>

				<Typography.Body>{data.shortDescription}</Typography.Body>
			</Flex>
		</StyledJobListItem>
	);
}

export default memo(JobListItem);
