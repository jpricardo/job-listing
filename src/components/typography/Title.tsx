'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
	font-size: 1rem;
	line-height: 1rem;
	font-weight: 500;
`;

type TitleProps = React.HTMLAttributes<HTMLSpanElement>;
function Title({ ...props }: TitleProps) {
	return <StyledTitle {...props} />;
}

export default memo(Title);
