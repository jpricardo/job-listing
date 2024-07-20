import { memo } from 'react';
import styled from 'styled-components';

type VariantType = 'default' | 'primary' | 'error' | 'text';

const StyledButton = styled.button<{ $variant: VariantType }>`
	cursor: pointer;

	font-size: 14px;
	line-height: 14px;
	padding: 0.5rem 1rem;
	border-radius: 0.125rem;

	border: 1px solid
		${({ $variant }) => {
			switch ($variant) {
				case 'default':
					return '#c3c3c3';
				case 'primary':
					return '#4545ff';
				case 'error':
					return 'red';
				case 'text':
					return 'transparent';
			}
		}};

	background-color: ${({ $variant }) => {
		switch ($variant) {
			case 'default':
				return 'transparent';
			case 'primary':
				return '#4545ff';
			case 'error':
				return 'red';
			case 'text':
				return 'transparent';
		}
	}};

	color: ${({ $variant }) => {
		switch ($variant) {
			case 'default':
				return 'inherit';
			case 'primary':
				return 'white';
			case 'error':
				return 'white';
			case 'text':
				return 'inherit';
		}
	}};
`;

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
	variant?: VariantType;
};
function Button({ variant = 'default', ...props }: ButtonProps) {
	return <StyledButton $variant={variant} {...props} />;
}

export default memo(Button);
