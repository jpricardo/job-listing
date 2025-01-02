import { Flex } from 'antd';
import { memo } from 'react';

import { useJobQuery } from '@/services/job/job.queries';

import Container from './containers/Container';
import Button from './inputs/Button';
import Body from './typography/Body';
import Title from './typography/Title';

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
				<Title>{data?.shortDescription}</Title>
				<Body size='large' style={{ whiteSpace: 'break-spaces' }}>
					{data?.description}
				</Body>
			</Flex>
		</Container>
	);
}

export default memo(JobDetailsCard);
