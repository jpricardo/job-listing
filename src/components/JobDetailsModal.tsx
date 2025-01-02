import { Button, Flex, Modal, Typography } from '@jpricardo/component-library';
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

	const baseStyle: React.CSSProperties = { width: '800px', maxWidth: '80%' };
	const desktopStyle: React.CSSProperties = { ...baseStyle };
	const mobileStyle: React.CSSProperties = {
		...baseStyle,
		top: '1rem',
		bottom: isPending ? undefined : '1rem',
		overflow: 'scroll',
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			title={isPending ? null : `${data?.title} - ${data?.company}`}
			style={isMobile ? mobileStyle : desktopStyle}
		>
			<Flex gap='1rem' vertical>
				<Flex justify='space-between' align='start' gap='1rem'>
					<Typography.Title>{data?.shortDescription}</Typography.Title>

					<Button variant='primary' style={{ height: 'fit-content' }} loading={isPending}>
						Bookmark
					</Button>
				</Flex>

				<Typography.Body style={{ whiteSpace: 'break-spaces' }}>{data?.description}</Typography.Body>
			</Flex>
		</Modal>
	);
}

export default memo(JobDetailsModal);
