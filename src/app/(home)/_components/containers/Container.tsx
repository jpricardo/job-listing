import {
	Container as LibContainer,
	ContainerProps as LibContainerProps,
	Typography,
} from '@jpricardo/component-library';
import { memo } from 'react';

type ContainerProps = Omit<LibContainerProps, 'ref'> & {
	title?: React.ReactNode;
	addon?: React.ReactNode;
	hover?: boolean;
};
function Container({ title, addon, children, hover, ...props }: ContainerProps) {
	return (
		<LibContainer {...props}>
			{!!title && (
				<div className='mb-2 flex items-center justify-between p-0'>
					<Typography.Title>{title}</Typography.Title>

					{addon}
				</div>
			)}

			{children}
		</LibContainer>
	);
}

export default memo(Container);
