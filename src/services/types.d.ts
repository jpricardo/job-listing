type BaseQueryAndMutationOptions = { throwOnError?: boolean };

export type QueryOptions = BaseQueryAndMutationOptions;
export type MutationOptions<TPayload, TData = void> = BaseQueryAndMutationOptions & {
	onMutate?: (data?: TPayload) => void;
	onSuccess?: (data: TData, variables: TPayload) => void;
	onError?: (error: ApiErrorType) => void;
	onSettled?: () => void;
};
