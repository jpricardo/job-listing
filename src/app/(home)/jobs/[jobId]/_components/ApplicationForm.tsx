import { Button } from '@jpricardo/component-library';
import { revalidatePath } from 'next/cache';
import Form from 'next/form';
import { notFound } from 'next/navigation';

import { CreateJobApplicationDto } from '@/data/dto/create-job-application.dto';
import JobService from '@/data/services/job.service';
import { IDType } from '@/data/types';

import ApplicationFormQuestion from './ApplicationFormQuestion';

const jobService = new JobService();

type Props = Readonly<{ jobId: IDType }>;

export default async function ApplicationForm({ jobId }: Props) {
	const questions = await jobService.getApplicationById(jobId);

	if (!questions) return notFound();

	async function submitApplicationAction(formData: FormData) {
		'use server';
		const payload: CreateJobApplicationDto = {};

		for (const key of formData.keys()) {
			const value = formData.get(key);
			if (!value) continue;
			payload[key] = value as string;
		}

		await jobService.sendApplication(jobId, payload);
		revalidatePath('/jobs/' + jobId);
	}

	return (
		<Form className='flex flex-col gap-4' action={submitApplicationAction}>
			{questions.map((question) => (
				<ApplicationFormQuestion key={question.id} {...question} />
			))}

			<div className='flex flex-row justify-end'>
				<Button type='submit'>Submit Application</Button>
			</div>
		</Form>
	);
}
