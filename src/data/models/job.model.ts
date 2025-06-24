import { IDType } from '../types';

export type Job = {
	id: IDType;
	title: string;
	description: string;
	shortDescription: string;
	createdAt: Date;

	companyId: IDType;
};
