import { ChangeEventHandler, memo } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	font-size: 14px;
	line-height: 14px;
	padding: 8px;

	border-radius: 0.125rem;
	border: 1px solid #c3c3c3;
`;

type SearchBarProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};
function SearchBar({ style, ...props }: SearchBarProps) {
	return <StyledInput placeholder='Searchbar' type='text' style={{ ...style }} {...props} />;
}

export default memo(SearchBar);
