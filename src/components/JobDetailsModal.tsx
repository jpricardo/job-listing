import { Flex, Typography } from '@jpricardo/component-library';
import { Modal } from 'antd';
import { memo } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';
import useJobByIdQuery from '@/queries/useJobByIdQuery';

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
				<Typography.Title>
					{data?.title} - {data?.company}
				</Typography.Title>
			}
			width={800}
			style={isMobile ? { top: 0, bottom: 0, padding: '0.5rem' } : {}}
		>
			<Flex gap='1rem' vertical>
				<Typography.Title>{data?.shortDescription}</Typography.Title>

				<Typography.Body size='large' style={{ whiteSpace: 'break-spaces' }}>
					{data?.description}
				</Typography.Body>
			</Flex>
		</Modal>
	);
}

export default memo(JobDetailsModal);
