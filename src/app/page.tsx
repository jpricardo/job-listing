'use client';
import { Flex, Pagination, PaginationProps } from '@jpricardo/component-library';
import { Col, Grid, Row } from 'antd';
import { memo, useCallback, useMemo, useState, useTransition } from 'react';
import { useTheme } from 'styled-components';

import Controls from '@/components/Controls';
import Header from '@/components/Header';
import SearchBar from '@/components/inputs/SearchBar';
import JobDetailsCard from '@/components/JobDetailsCard';
import JobDetailsModal from '@/components/JobDetailsModal';
import JobList from '@/components/JobList';
import { useIsMobile } from '@/hooks/useIsMobile';
import useObjectReducer from '@/hooks/useObjectReducer';
import { OrderByType } from '@/lib';
import { AreaType, JobType, SeniorityLevel } from '@/services/job/entities/job.entity';
import { useJobsQuery } from '@/services/job/job.queries';

type DispatchData = {
	// Controls
	activeId?: number;
	searchTerm: string;
	orderBy: OrderByType;
	jobTypes: JobType[];
	areaTypes: AreaType[];
	seniorityLevelTypes: SeniorityLevel[];

	// Pagination
	// TODO - The user must control this setting
	itemsPerPage: number;
	currentPage: number;
};

const { useBreakpoint } = Grid;

function Home() {
	const { colors } = useTheme();
	const isMobile = useIsMobile();
	const breakpoint = useBreakpoint();
	const isLargeScreen = breakpoint.xl;
	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const onPaginationClick = useCallback<PaginationProps['onClick']>(
		(page) => doUpdate({ currentPage: page }),
		[doUpdate],
	);

	// Data
	const { data, isPending } = useJobsQuery();

	const filteredData = useMemo(() => {
		return data
			?.filter((item) => item.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
			.filter((item) => state.jobTypes.length === 0 || state.jobTypes.includes(item.jobType))
			.filter((item) => state.areaTypes.length === 0 || state.areaTypes.includes(item.areaType))
			.filter(
				(item) => state.seniorityLevelTypes.length === 0 || state.seniorityLevelTypes.includes(item.seniorityLevel),
			);
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

	return (
		<main
			style={{
				padding: isMobile ? '1rem' : '1rem 2rem',
				background: colors.surface,
				color: colors.onSurface,
				minHeight: '100vh',
			}}
		>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Header />
				</Col>

				<Col xs={24} lg={8} xl={6} xxl={4}>
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
						style={isMobile ? {} : { position: 'sticky', top: '1rem' }}
					/>
				</Col>

				<Col xs={24} lg={16} xl={10} xxl={8}>
					<Flex gap='1rem' vertical>
						<SearchBar value={state.searchTerm} onChange={(e) => doUpdate({ searchTerm: e.target.value })} />

						<Pagination
							currentPage={state.currentPage}
							pageAmmount={pageAmmount}
							onClick={onPaginationClick}
							onNextPage={() => doUpdate({ currentPage: state.currentPage + 1 })}
							onPreviousPage={() => doUpdate({ currentPage: state.currentPage - 1 })}
						/>

						<JobList
							currentPage={state.currentPage}
							itemsPerPage={state.itemsPerPage}
							items={sortedData}
							activeId={state.activeId}
							onClick={(id) => {
								doUpdate({ activeId: id });
								setIsModalOpen(true);
							}}
							loading={isPending}
						/>

						<Pagination
							currentPage={state.currentPage}
							pageAmmount={pageAmmount}
							onClick={onPaginationClick}
							onNextPage={() => doUpdate({ currentPage: state.currentPage + 1 })}
							onPreviousPage={() => doUpdate({ currentPage: state.currentPage - 1 })}
						/>
					</Flex>
				</Col>

				{state.activeId !== undefined && (
					<>
						{isMobile ? (
							<JobDetailsModal jobId={state.activeId} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
						) : (
							<Col xs={0} xl={8} xxl={12}>
								<JobDetailsCard jobId={state.activeId} />
							</Col>
						)}
					</>
				)}
			</Row>
		</main>
	);
}

export default memo(Home);
