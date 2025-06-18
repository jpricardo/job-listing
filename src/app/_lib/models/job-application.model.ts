import { IDType } from '../types';

type Option = { id: IDType; label: string };

type SingleOptionQuestionTypes = 'text';
type MultipleOptionQuestionTypes = 'select';
type QuestionTypes = SingleOptionQuestionTypes | MultipleOptionQuestionTypes;

type Question<T extends QuestionTypes = QuestionTypes> = {
	id: IDType;
	label: string;
	type: T;
} & ({ type: SingleOptionQuestionTypes; options?: never } | { type: MultipleOptionQuestionTypes; options: Option[] });

export type JobApplication = Question[];
