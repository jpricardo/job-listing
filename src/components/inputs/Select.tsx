import { memo } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
	font-size: 14px;
	line-height: 14px;
	padding: 8px;

	border-radius: 0.125rem;
	border: 1px solid #c3c3c3;
`;

type OptionType = string | number | { label: React.ReactNode; value: string | number };

type SelectProps = Omit<React.HtmlHTMLAttributes<HTMLSelectElement>, 'children'> & {
	value: string | number;
	options: OptionType[];
};

function Select({ options, ...props }: SelectProps) {
	return (
		<StyledSelect {...props}>
			{options.map((item, index) => {
				return (
					<option key={index} value={typeof item === 'object' ? item.value : item}>
						{typeof item === 'object' ? item.label : item}
					</option>
				);
			})}
		</StyledSelect>
	);
}

export default memo(Select);
