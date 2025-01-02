import { Modal } from 'antd';
import { memo } from 'react';

import { useJobQuery } from '@/services/job/job.queries';

type JobDetailsModalProps = {
	jobId?: number;

	open: boolean;
	onClose: () => void;
};

// TODO - Fix this modal
function JobDetailsModal({ jobId, open, onClose }: JobDetailsModalProps) {
	const { data } = useJobQuery(jobId);

	return (
		<Modal open={open} onClose={onClose} onOk={onClose} onCancel={onClose} destroyOnClose>
			{data?.description}
		</Modal>
	);
}

export default memo(JobDetailsModal);
