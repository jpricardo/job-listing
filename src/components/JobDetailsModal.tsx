import { Flex, Modal } from 'antd';
import { memo } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import useJobByIdQuery from '@/queries/useJobByIdQuery';

import Body from './typography/Body';
import Title from './typography/Title';

type JobDetailsModalProps = {
	jobId?: number;

	open: boolean;
	onClose: () => void;
};

function JobDetailsModal({ jobId, open, onClose }: JobDetailsModalProps) {
	const isMobile = useIsMobile();
	const { data, isPending } = useJobByIdQuery(jobId);

	return (
		<Modal
			open={open}
			onClose={onClose}
			onCancel={onClose}
			loading={isPending}
			footer={null}
			title={
				<Title>
					{data?.title} - {data?.company}
				</Title>
			}
			width={800}
			style={isMobile ? { top: 0, bottom: 0, padding: '0.5rem' } : {}}
		>
			<Flex gap='1rem' vertical>
				<Title>{data?.shortDescription}</Title>

				<Body size='large' style={{ whiteSpace: 'break-spaces' }}>
					{data?.description}
				</Body>
			</Flex>
		</Modal>
	);
}

export default memo(JobDetailsModal);
