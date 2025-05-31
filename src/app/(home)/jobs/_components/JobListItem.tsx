import { Badge, Flex, Typography } from '@jpricardo/component-library';
import { memo } from 'react';

import Container from '@/app/(home)/_components/containers/Container';
import NumberFormatter from '@/app/_lib/format/number';
import { getDateDifferenceInDays } from '@/app/_lib/helpers';

type JobListItemProps = React.HTMLAttributes<HTMLDivElement> & {
	data: any;
	active?: boolean;
};

/**
 * Component representing an entry in the Job List
 */
function JobListItem({ data, active, style, ...props }: JobListItemProps) {
	const daysAgo = getDateDifferenceInDays(data.createdAt, new Date());

	return (
		<Container hover style={{ padding: '0.75rem', userSelect: 'none', ...style }} {...props}>
			<Flex vertical style={{ gap: '1rem' }}>
				<Flex vertical style={{ gap: '.5rem' }}>
					<Flex vertical style={{ gap: '.25rem' }}>
						<Flex style={{ gap: '1rem', alignItems: 'center' }}>
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

					<Flex style={{ flexWrap: 'wrap', gap: '.25rem', alignItems: 'center' }}>
						<Badge>{data.areaType}</Badge>

						<Badge>{data.jobType}</Badge>

						<Badge>{data.seniorityLevel}</Badge>

						{/* {data.tags.map((tag) => (
							<Badge key={tag}>{tag}</Badge>
						))} */}
					</Flex>
				</Flex>

				<Typography.Body>{data.shortDescription}</Typography.Body>
			</Flex>
		</Container>
	);
}

export default memo(JobListItem);
