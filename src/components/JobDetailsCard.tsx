import { Button, Flex, Typography } from '@jpricardo/component-library';
import { memo } from 'react';

import { useJobQuery } from '@/services/job/job.queries';

import Container from './containers/Container';

type JobDetailsCardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
	jobId?: number;
};

function JobDetailsCard({ jobId, ...props }: JobDetailsCardProps) {
	const { data, isPending } = useJobQuery(jobId);

	// TODO - Loading state
	return isPending ? (
		'Loading...'
	) : (
		<Container
			title={`${data?.title} - ${data?.company}`}
			addon={<Button variant='primary'>Favorite</Button>}
			{...props}
		>
			<Flex gap='1rem' vertical>
				<Typography.Title>{data?.shortDescription}</Typography.Title>
				<Typography.Body size='large' style={{ whiteSpace: 'break-spaces' }}>
					{data?.description}
				</Typography.Body>
			</Flex>
		</Container>
	);
}

export default memo(JobDetailsCard);
