'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label<{ $size: 'small' | 'medium' | 'large' }>`
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

type LabelProps = React.HTMLAttributes<HTMLLabelElement> & {
	htmlFor?: string;
	size?: 'small' | 'medium' | 'large';
};
function Label({ size = 'medium', ...props }: LabelProps) {
	return <StyledLabel $size={size} {...props} />;
}

export default memo(Label);
