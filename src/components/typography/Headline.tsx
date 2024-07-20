'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.span`
	font-size: 2rem;
	line-height: 2rem;
	font-weight: 400;
`;

type HeadlineProps = React.HTMLAttributes<HTMLSpanElement>;
function Headline({ ...props }: HeadlineProps) {
	return <StyledBody {...props} />;
}

export default memo(Headline);
