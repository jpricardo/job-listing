'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.span<{ $size: 'small' | 'medium' | 'large' }>`
	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.5rem';
			case 'medium':
				return '0.85rem';
			case 'large':
				return '1rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.85rem';
			case 'medium':
				return '1rem';
			case 'large':
				return '1.25rem';
		}
	}};

	font-weight: 400;
`;

type BodyProps = React.HTMLAttributes<HTMLSpanElement> & {
	size?: 'small' | 'medium' | 'large';
};
function Body({ size = 'medium', ...props }: BodyProps) {
	return <StyledBody $size={size} {...props} />;
}

export default memo(Body);
