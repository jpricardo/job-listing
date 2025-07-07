import { IDType } from '../types';

export enum CompanyTypeEnum {
	RemoteOnly,
	RemoteFirst,
	Hybrid,
	Presential,
}

export type Company = {
	id: IDType;
	name: string;
	description: string;
	type: CompanyTypeEnum;
	tags: string[];
};
