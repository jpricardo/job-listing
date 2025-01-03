import axios, { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';

import { timer } from '@/lib';

export default class HttpAdapter {
	private readonly api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || '', ...this.config });

	constructor(
		private config?: CreateAxiosDefaults,
		private delay: number = 1000,
	) {}

	public async mockRequest<TData>(data?: TData) {
		await timer(this.delay);
		return data as TData;
	}

	public async postRequest<TPayload, TData = void>(
		url: string,
		payload: TPayload,
		config?: AxiosRequestConfig<TPayload>,
	) {
		const response = await this.api.post<TPayload, AxiosResponse<TData>, TPayload>(url, payload, config);

		return response.data;
	}

	public async getRequest<TData>(url: string, config?: AxiosRequestConfig<TData>) {
		const response = await this.api.get<TData, AxiosResponse<TData>, TData>(url, config);

		return response.data;
	}

	public async patchRequest<TPayload, TData = void>(
		url: string,
		payload: TPayload,
		config?: AxiosRequestConfig<TPayload>,
	) {
		const response = await this.api.patch<TPayload, AxiosResponse<TData>, TPayload>(url, payload, config);

		return response.data;
	}

	public async deleteRequest<TData = void>(url: string, config?: AxiosRequestConfig<TData>) {
		const response = await this.api.delete<TData, AxiosResponse<TData>, TData>(url, config);

		return response.data;
	}
}
