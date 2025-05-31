'use client';
import { Flex } from '@jpricardo/component-library';
import { useCallback, useTransition } from 'react';

import Container from '@/app/(home)/_components/containers/Container';
import useObjectReducer from '@/hooks/useObjectReducer';

import Controls from './_components/Controls';
import JobList from './_components/JobList';

type DispatchData = {
	// Controls
	activeId?: number;
	searchTerm: string;
	orderBy: string;
	jobTypes: any[];
	areaTypes: any[];
	seniorityLevelTypes: any[];

	// Pagination
	// TODO - The user must control this setting
	itemsPerPage: number;
	currentPage: number;
};

export default function JobsPage() {
	// Reducer
	const [_, startTransition] = useTransition();
	const [state, dispatch] = useObjectReducer<DispatchData>({
		searchTerm: '',
		orderBy: 'Most relevant',
		jobTypes: [],
		areaTypes: [],
		seniorityLevelTypes: [],

		itemsPerPage: 10,
		currentPage: 0,
	});

	const doUpdate = useCallback(
		(value: Partial<DispatchData>) => startTransition(() => dispatch({ type: 'update', value })),
		[dispatch],
	);

	return (
		<Flex style={{ gap: '1rem' }}>
			{/* <Col span={24}>
					<SearchBar value={state.searchTerm} onChange={(e) => doUpdate({ searchTerm: e.target.value })} />
					</Col> */}

			<Container style={{ flex: 9 }}>
				<Flex vertical style={{ gap: '1rem' }}>
					<JobList
						currentPage={state.currentPage}
						itemsPerPage={state.itemsPerPage}
						items={[]}
						activeId={state.activeId}
						onClick={(id) => doUpdate({ activeId: id })}
					/>
				</Flex>
			</Container>

			<Controls
				onReset={() => dispatch({ type: 'reset' })}
				orderBy={state.orderBy}
				onOrderByChange={(value) => doUpdate({ orderBy: value })}
				jobTypes={state.jobTypes}
				onJobTypesChange={(value) => doUpdate({ jobTypes: value })}
				areaTypes={state.areaTypes}
				onAreaTypesChange={(value) => doUpdate({ areaTypes: value })}
				seniorityLevelTypes={state.seniorityLevelTypes}
				onSeniorityLevelTypesChange={(value) => doUpdate({ seniorityLevelTypes: value })}
				style={{ flex: 2 }}
			/>
		</Flex>
	);
}
