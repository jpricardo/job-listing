import { Flex } from 'antd';
import { memo } from 'react';

import Button from './inputs/Button';

type PaginationProps = {
	pageAmmount: number;
	currentPage: number;

	onClick: (page: number) => void;
	onPreviousPage: React.HtmlHTMLAttributes<HTMLButtonElement>['onClick'];
	onNextPage: React.HtmlHTMLAttributes<HTMLButtonElement>['onClick'];
};

// TODO - Solve the overflowing pagination issue
function Pagination({ pageAmmount, currentPage, onClick, onPreviousPage, onNextPage }: PaginationProps) {
	const pages = Array.from({ length: pageAmmount }, (_, index) => index + 1);

	return (
		<Flex align='center' gap='0.25rem'>
			{/* TODO - Solve this bug */}
			{/* @ts-ignore */}
			<Button onClick={onPreviousPage} disabled={currentPage === 0}>
				{'<'}
			</Button>
			<Flex flex={1}>
				{pages.length === 0 && '...'}

				{pages.map((item) => {
					const itemIndex = item - 1;

					return (
						<Button
							variant='text'
							key={item}
							style={{ fontWeight: currentPage === itemIndex ? '800' : '400' }}
							onClick={() => onClick(itemIndex)}
						>
							{item}
						</Button>
					);
				})}
			</Flex>

			{/* TODO - Solve this bug */}
			{/* @ts-ignore */}
			<Button onClick={onNextPage} disabled={currentPage === pageAmmount - 1}>
				{'>'}
			</Button>
		</Flex>
	);
}

export default memo(Pagination);
