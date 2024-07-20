'use client';
import { useQuery } from '@tanstack/react-query';
import { Col, Flex, Row } from 'antd';
import { memo, useMemo, useState } from 'react';

import Controls from '@/components/Controls';
import SearchBar from '@/components/inputs/SearchBar';
import JobDetails from '@/components/JobDetails';
import JobList from '@/components/JobList';
import { OrderByType } from '@/lib';
import JobService from '@/services/JobService';
import Pagination from '@/components/Pagination';
import Header from '@/components/Header';

function Home() {
	// Controls
	const [activeId, setActiveId] = useState<number>();
	const [searchTerm, setSearchTerm] = useState('');
	const [orderBy, setOrderBy] = useState<OrderByType>('Most relevant');

	// Pagination
	// TODO - The user must control this setting
	const [itemsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(0);

	// Data
	const jobService = new JobService();
	const { data, isPending } = useQuery({ queryKey: ['job'], queryFn: jobService.getAllJobs });

	const filteredData = useMemo(() => {
		return data
			?.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
			.sort((a, b) => {
				if (orderBy === 'Most recent') return b.createdAt.getDate() - a.createdAt.getDate();
				if (orderBy === 'Best pay') return b.yearlySalary - a.yearlySalary;

				return 1;
			});
	}, [data, searchTerm, orderBy]);

	return (
		<main style={{ padding: '1rem 4rem' }}>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Header />
				</Col>

				<Col lg={4}>
					<Controls
						orderBy={orderBy}
						onOrderByChange={(e) => {
							//@ts-ignore
							// TODO - Fix this type
							setOrderBy(e.target.value);
						}}
					/>
				</Col>

				<Col lg={8}>
					<Flex gap='1rem' vertical>
						<SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

						<Pagination
							currentPage={currentPage}
							pageAmmount={Math.ceil((filteredData?.length ?? 0) / itemsPerPage)}
							onClick={(value) => setCurrentPage(value)}
							onNextPage={() => setCurrentPage((value) => value + 1)}
							onPreviousPage={() => setCurrentPage((value) => value - 1)}
						/>

						<JobList
							currentPage={currentPage}
							itemsPerPage={itemsPerPage}
							items={filteredData}
							activeId={activeId}
							setActiveId={setActiveId}
							loading={isPending}
						/>

						<Pagination
							currentPage={currentPage}
							pageAmmount={Math.ceil((filteredData?.length ?? 0) / itemsPerPage)}
							onClick={(value) => setCurrentPage(value)}
							onNextPage={() => setCurrentPage((value) => value + 1)}
							onPreviousPage={() => setCurrentPage((value) => value - 1)}
						/>
					</Flex>
				</Col>

				<Col lg={12}>{activeId !== undefined ? <JobDetails jobId={activeId} /> : null}</Col>
			</Row>
		</main>
	);
}

export default memo(Home);
