import { memo } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
	font-size: 14px;
	line-height: 14px;
	padding: 8px;

	border-radius: 0.125rem;
	border: 1px solid #c3c3c3;
`;

type ValueType = string | number;
type OptionObjectType = { label: React.ReactNode; value: ValueType };
type OptionType = ValueType | OptionObjectType;

type OmitProps = 'children' | 'value' | 'onChange';
type SelectProps<T extends OptionType> = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, OmitProps> & {
	options: T[];

	value?: T extends OptionObjectType ? ValueType : T;
	onChange?: (value: T) => void;
};

function Select<T extends OptionType>({ options, value, onChange, ...props }: SelectProps<T>) {
	return (
		<StyledSelect value={value} onChange={(e) => onChange?.(e.target.value as T)} {...props}>
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

export default memo(Select) as typeof Select;
