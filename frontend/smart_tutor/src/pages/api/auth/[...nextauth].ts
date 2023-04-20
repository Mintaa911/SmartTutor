//@ts-nocheck
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../../../lib/auth";

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: "signin",
			async authorize(credentials) {
				const { email, password } = {
					email: credentials!.email,
					password: credentials!.password,
				};
				const res = await login({ email, password });
				if (res.success) {
					return { token: res.response.token };
				}
				return null;
			},
		}),
	],
	callbacks: {
		async session({ session, token, user }) {
			session.access_token = token.access_token;

			return session;
		},
		async jwt({ token, user, account }) {
			if (user) {
				token.access_token = user.token;
			}
			return token;
		},
	},
	session: { maxAge: 60 * 60 * 24 },
	jwt: { maxAge: 60 * 60 * 24 },
	// use env variable in production
	secret: "looselipssinkships",
});
