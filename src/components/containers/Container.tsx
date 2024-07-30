import {
	Flex,
	Container as LibContainer,
	ContainerProps as LibContainerProps,
	Typography,
} from '@jpricardo/component-library';
import { memo } from 'react';
import styled, { useTheme } from 'styled-components';

const StyledContainer = styled(LibContainer)<{ $hover?: boolean }>`
	&:hover {
		cursor: ${({ $hover }) => ($hover ? 'pointer' : 'initial')};
		box-shadow: ${({ $hover, theme }) => ($hover ? theme.shadows.xs : '')};
	}
`;

type ContainerProps = LibContainerProps & {
	title?: React.ReactNode;
	addon?: React.ReactNode;
	hover?: boolean;
};
function Container({ title, addon, children, hover, ...props }: ContainerProps) {
	const { colors } = useTheme();

	return (
		<StyledContainer $hover={hover} {...props}>
			{!!title && (
				<Flex
					justify='space-between'
					align='center'
					style={{ padding: '1rem', margin: '-1rem -1rem 1rem', backgroundColor: colors.containerHigh }}
				>
					<Typography.Title>{title}</Typography.Title>

					{addon}
				</Flex>
			)}

			{children}
		</StyledContainer>
	);
}

export default memo(Container);
