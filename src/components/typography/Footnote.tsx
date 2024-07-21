'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.span<{ $size: 'small' | 'medium' | 'large' }>`
	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.5rem';
			case 'medium':
				return '0.75rem';
			case 'large':
				return '1rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.75rem';
			case 'medium':
				return '1rem';
			case 'large':
				return '1.25rem';
		}
	}};

	font-weight: 400;
	opacity: 0.85;
`;

type FootnoteProps = React.HTMLAttributes<HTMLSpanElement> & {
	size?: 'small' | 'medium' | 'large';
};
function Footnote({ size = 'medium', ...props }: FootnoteProps) {
	return <StyledBody $size={size} {...props} />;
}

export default memo(Footnote);
