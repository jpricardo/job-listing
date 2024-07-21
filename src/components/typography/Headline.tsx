'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.span<{ $size: 'small' | 'medium' | 'large' }>`
	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '1rem';
			case 'medium':
				return '2rem';
			case 'large':
				return '4rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.75rem';
			case 'medium':
				return '2.25rem';
			case 'large':
				return '4.25rem';
		}
	}};

	font-weight: 400;
`;

type HeadlineProps = React.HTMLAttributes<HTMLSpanElement> & {
	size?: 'small' | 'medium' | 'large';
};
function Headline({ size = 'medium', ...props }: HeadlineProps) {
	return <StyledBody $size={size} {...props} />;
}

export default memo(Headline);
