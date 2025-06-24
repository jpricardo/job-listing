import { IDType } from '../types';

export type Company = {
	id: IDType;
	name: string;
	description: string;
	tags: string[];
};
