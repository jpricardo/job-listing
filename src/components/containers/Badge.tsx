import { memo } from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div`
	padding: 0.25rem 0.25rem;
	border-radius: 0.25rem;

	background: #fefefe;
	border: 1px solid #c3c3c3;

	font-size: 0.75rem;
	line-height: 0.75rem;
`;

type BadgeProps = React.HtmlHTMLAttributes<HTMLDivElement>;
function Badge({ ...props }: BadgeProps) {
	return <StyledBadge {...props} />;
}

export default memo(Badge);
