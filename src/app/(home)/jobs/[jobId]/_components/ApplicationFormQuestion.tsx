'use client';
import { Input, Select, Typography } from '@jpricardo/component-library';

import { JobApplication } from '@/app/_lib/models/job-application.model';

type Question = JobApplication[number];
type QuestionTypes = Question['type'];

type Props = Readonly<Question>;

export default function ApplicationFormQuestion({ id, label, type, options }: Props) {
	const inputId = id.toString();

	const inputMap: Record<QuestionTypes, React.ReactNode> = {
		select: (
			<Select id={inputId} name={inputId} options={options?.map((item) => ({ label: item.label, value: item.id }))} />
		),
		text: <Input name={inputId} id={inputId} required />,
	};

	return (
		<div className='flex flex-col gap-2'>
			<Typography.Label htmlFor={id.toString()}>{label}</Typography.Label>
			{inputMap[type]}
		</div>
	);
}
