import { Surface } from '@jpricardo/component-library';
import { memo } from 'react';

type NavbarProps = Readonly<{
	children?: React.ReactNode;
	icons?: React.ReactNode;
}>;

function Navbar({ children, icons }: NavbarProps) {
	return (
		<Surface className='sticky top-0 right-0 left-0 z-2 -mx-4 p-4!'>
			<div className='flex justify-between gap-2'>
				{children}
				{icons}
			</div>
		</Surface>
	);
}

export default memo(Navbar);
