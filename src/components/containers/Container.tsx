import { Flex } from '@jpricardo/component-library';
import { memo } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div<{ $hover?: boolean }>`
	backgroundcolor: #fefefe;
	border: 1px solid #c3c3c3;
	padding: 1rem;
	border-radius: 0.25rem;

	cursor: ${({ $hover }) => ($hover ? 'pointer' : 'initial')};

	&:hover {
		box-shadow: ${({ $hover }) => ($hover ? 'rgba(0, 0, 0, 0.25) 0px 0px 8px 0px' : '')};
	}
`;

type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	title?: React.ReactNode;
	addon?: React.ReactNode;
	hover?: boolean;
};
function Container({ title, addon, children, hover, ...props }: ContainerProps) {
	return (
		<StyledContainer $hover={hover} {...props}>
			{!!title && (
				<Flex
					justify='space-between'
					align='center'
					style={{
						borderBottom: '1px solid #c3c3c3',
						padding: '1rem',
						margin: '-1rem -1rem 1rem',
						backgroundColor: '#f0f0f0',
					}}
				>
					<span style={{ fontSize: '1rem', fontWeight: 500 }}>{title}</span>

					{addon}
				</Flex>
			)}

			{children}
		</StyledContainer>
	);
}

export default memo(Container);
