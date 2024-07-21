import { Flex } from 'antd';
import styled from 'styled-components';

import Title from '../typography/Title';

const StyledControlCard = styled.div`
	padding: 0.25rem;
	user-select: none;
`;

type ControlCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	title: React.ReactNode;
};
function ControlCard({ title, children, ...props }: ControlCardProps) {
	return (
		<StyledControlCard {...props}>
			<Flex gap='0.5rem' vertical>
				<Title>{title}</Title>

				<div>{children}</div>
			</Flex>
		</StyledControlCard>
	);
}

export default ControlCard;
