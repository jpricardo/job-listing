import { useReducer } from 'react';

export type ObjectReducerActionType<TData> =
	| { type: 'update'; value: Partial<TData> }
	| { type: 'validate' | 'save' | 'reset' };

export type ObjectReducerDispatch<TData> = React.Dispatch<ObjectReducerActionType<TData>>;

export type ObjectReducerOptions<TData> = {
	onValidate?: (data?: TData) => void;
	onSave?: (data?: TData) => void;
	onReset?: () => void;
};
export type ObjectReducerReturnType<TData> = [TData, ObjectReducerDispatch<TData>];

const useObjectReducer = <TData>(initialData: TData, options?: ObjectReducerOptions<TData>) => {
	const reducer = (state: TData, action: ObjectReducerActionType<TData>) => {
		switch (action.type) {
			case 'update':
				return { ...state, ...action.value };

			case 'validate':
				options?.onValidate?.(state);
				return state;

			case 'reset':
				options?.onReset?.();
				return initialData;

			case 'save':
				options?.onSave?.(state);
				return state;
		}
	};

	return useReducer(reducer, initialData) as ObjectReducerReturnType<TData>;
};

export default useObjectReducer;
