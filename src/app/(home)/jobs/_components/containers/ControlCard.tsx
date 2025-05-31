import { Typography } from '@jpricardo/component-library';

type ControlCardProps = Readonly<React.HtmlHTMLAttributes<HTMLDivElement> & { title: React.ReactNode }>;
function ControlCard({ title, children, ...props }: ControlCardProps) {
	return (
		<div className='p-0 select-none' {...props}>
			<div className='flex flex-col gap-2'>
				<Typography.Title size='small'>{title}</Typography.Title>

				<div>{children}</div>
			</div>
		</div>
	);
}

export default ControlCard;
