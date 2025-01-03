import { useMutation } from '@tanstack/react-query';

import HttpAdapter from '@/lib/HttpAdapter';

import { MutationOptions } from '../types';
import AuthApi from './auth.api';
import AuthService from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

export function useLoginMutation(options?: MutationOptions<LoginDto, LoginResponseDto>) {
	const httpAdapter = new HttpAdapter();
	const authApi = new AuthApi(httpAdapter);
	const authService = new AuthService(authApi);

	return useMutation<LoginResponseDto, Error, LoginDto, void>({
		mutationKey: ['login'],
		mutationFn: (payload: LoginDto) => authService.login(payload),
		...options,
	});
}
