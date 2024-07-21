'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span<{ $size: 'small' | 'medium' | 'large' }>`
	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.75rem';
			case 'medium':
				return '1rem';
			case 'large':
				return '2rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '1rem';
			case 'medium':
				return '1.25rem';
			case 'large':
				return '2.25rem';
		}
	}};

	font-weight: 500;
`;

type TitleProps = React.HTMLAttributes<HTMLSpanElement> & {
	size?: 'small' | 'medium' | 'large';
};
function Title({ size = 'medium', ...props }: TitleProps) {
	return <StyledTitle $size={size} {...props} />;
}

export default memo(Title);
