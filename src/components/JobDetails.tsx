import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';
import { memo } from 'react';

import JobService from '@/services/JobService';

import Container from './containers/Container';
import Button from './inputs/Button';
import Body from './typography/Body';

type JobDetailsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
	jobId?: number;
};

function JobDetails({ jobId, ...props }: JobDetailsProps) {
	const jobService = new JobService();
	const { data, isPending } = useQuery({ queryKey: ['job', jobId], queryFn: () => jobService.getJobById(jobId) });

	// TODO - Loading state
	return isPending ? (
		'Loading...'
	) : (
		<Container title={data?.title} addon={<Button variant='primary'>Favorite</Button>} {...props}>
			<Flex vertical>
				<Body>{data?.description}</Body>
			</Flex>
		</Container>
	);
}

export default memo(JobDetails);
