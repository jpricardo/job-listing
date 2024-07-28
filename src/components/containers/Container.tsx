import { Flex, Container as LibContainer, Typography } from '@jpricardo/component-library';
import { memo } from 'react';
import styled, { useTheme } from 'styled-components';

const StyledContainer = styled(LibContainer)<{ $hover?: boolean }>`
	border: 1px solid ${({ theme }) => theme.colors.outline};
	background-color: ${({ theme }) => theme.colors.surface};
	color: ${({ theme }) => theme.colors.onSurface};

	cursor: ${({ $hover }) => ($hover ? 'pointer' : 'initial')};

	&:hover {
		box-shadow: ${({ $hover, theme }) => ($hover ? theme.shadows.sm : '')};
	}
`;

type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
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
					style={{
						borderBottom: `1px solid ${colors.outline}`,
						padding: '1rem',
						margin: '-1rem -1rem 1rem',
						backgroundColor: '#f0f0f0',
					}}
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
