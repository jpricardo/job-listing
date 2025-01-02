import { Button, Flex, Typography } from '@jpricardo/component-library';
import { memo } from 'react';

import useJobByIdQuery from '@/queries/useJobByIdQuery';

import Container from './containers/Container';

type JobDetailsCardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
	jobId?: number;
};

function JobDetailsCard({ jobId, ...props }: JobDetailsCardProps) {
	const { data, isPending } = useJobByIdQuery(jobId);

	// TODO - Loading state
	return isPending ? (
		'Loading...'
	) : (
		<Container
			title={`${data?.title} - ${data?.company}`}
			variant='low'
			addon={<Button variant='primary'>Bookmark</Button>}
			{...props}
		>
			<Flex gap='1rem' vertical>
				<Typography.Title>{data?.shortDescription}</Typography.Title>
				<Typography.Body style={{ whiteSpace: 'break-spaces' }}>{data?.description}</Typography.Body>
			</Flex>
		</Container>
	);
}

export default memo(JobDetailsCard);
