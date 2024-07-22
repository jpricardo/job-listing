'use client';
import { useQuery } from '@tanstack/react-query';
import { Col, Flex, Row } from 'antd';
import { memo, useCallback, useEffect, useMemo, useTransition } from 'react';

import Controls from '@/components/Controls';
import Header from '@/components/Header';
import SearchBar from '@/components/inputs/SearchBar';
import JobDetails from '@/components/JobDetails';
import JobList from '@/components/JobList';
import Pagination from '@/components/Pagination';
import { useIsMobile } from '@/hooks/useIsMobile';
import useObjectReducer from '@/hooks/useObjectReducer';
import { AreaType, JobType, OrderByType } from '@/lib';
import JobService from '@/services/JobService';

type DispatchData = {
	// Controls
	activeId?: number;
	searchTerm: string;
	orderBy: OrderByType;
	jobTypes: JobType[];
	areaTypes: AreaType[];

	// Pagination
	// TODO - The user must control this setting
	itemsPerPage: number;
	currentPage: number;
};

function Home() {
	const isMobile = useIsMobile();

	// Reducer
	const [_, startTransition] = useTransition();
	const [state, dispatch] = useObjectReducer<DispatchData>({
		searchTerm: '',
		orderBy: 'Most relevant',
		jobTypes: [],
		areaTypes: [],

		itemsPerPage: 10,
		currentPage: 0,
	});

	const doUpdate = useCallback(
		(value: Partial<DispatchData>) => startTransition(() => dispatch({ type: 'update', value })),
		[dispatch],
	);

	// Data
	const jobService = new JobService();
	const { data, isPending } = useQuery({ queryKey: ['job'], queryFn: () => jobService.getAllJobs() });

	const filteredData = useMemo(() => {
		return data
			?.filter((item) => item.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
			.filter((item) => state.jobTypes.length === 0 || state.jobTypes.includes(item.jobType))
			.filter((item) => state.areaTypes.length === 0 || state.areaTypes.includes(item.areaType));
	}, [data, state]);

	const sortedData = useMemo(() => {
		return filteredData?.sort((a, b) => {
			if (state.orderBy === 'Most recent') return b.createdAt.getTime() - a.createdAt.getTime();
			if (state.orderBy === 'Best pay') return b.yearlySalary - a.yearlySalary;

			return 1;
		});
	}, [filteredData, state]);

	const pageAmmount = useMemo(() => {
		return Math.ceil((sortedData?.length ?? 0) / state.itemsPerPage);
	}, [state.itemsPerPage, sortedData?.length]);

	useEffect(() => {
		if (!sortedData?.length) return;
		doUpdate({ currentPage: 0 });
	}, [sortedData?.length, doUpdate]);

	return (
		<main style={{ padding: isMobile ? '0.5rem' : `1rem 2rem'}` }}>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Header />
				</Col>

				<Col xs={24} lg={8} xl={6} xxl={4}>
					<Controls
						onReset={() => dispatch({ type: 'reset' })}
						orderBy={state.orderBy}
						onOrderByChange={(e) => {
							//@ts-ignore
							// TODO - Fix this type
							dispatch({ type: 'update', value: { orderBy: e.target.value } });
						}}
						jobTypes={state.jobTypes}
						onJobTypesChange={(value) => doUpdate({ jobTypes: value })}
						areaTypes={state.areaTypes}
						onAreaTypesChange={(value) => doUpdate({ areaTypes: value })}
					/>
				</Col>

				<Col xs={24} lg={16} xl={10} xxl={8}>
					<Flex gap='1rem' vertical>
						<SearchBar value={state.searchTerm} onChange={(e) => doUpdate({ searchTerm: e.target.value })} />

						<Pagination
							currentPage={state.currentPage}
							pageAmmount={pageAmmount}
							onClick={(page) => doUpdate({ currentPage: page })}
							onNextPage={() => doUpdate({ currentPage: state.currentPage + 1 })}
							onPreviousPage={() => doUpdate({ currentPage: state.currentPage - 1 })}
						/>

						<JobList
							currentPage={state.currentPage}
							itemsPerPage={state.itemsPerPage}
							items={sortedData}
							activeId={state.activeId}
							setActiveId={(id) => doUpdate({ activeId: id })}
							loading={isPending}
						/>

						<Pagination
							currentPage={state.currentPage}
							pageAmmount={pageAmmount}
							onClick={(page) => doUpdate({ currentPage: page })}
							onNextPage={() => doUpdate({ currentPage: state.currentPage + 1 })}
							onPreviousPage={() => doUpdate({ currentPage: state.currentPage - 1 })}
						/>
					</Flex>
				</Col>

				<Col xs={24} xl={8} xxl={12}>
					{state.activeId !== undefined ? <JobDetails jobId={state.activeId} /> : null}
				</Col>
			</Row>
		</main>
	);
}

export default memo(Home);
