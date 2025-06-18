import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub,
		Credentials({
			credentials: { username: {}, password: {} },
			authorize: () => {
				const user = null;
				// TODO - Auth implementation
				return user;
			},
		}),
	],
});
