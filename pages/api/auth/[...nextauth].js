import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { verifyPassword } from '../../../utils/auth';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const username = credentials.username;
        const password = credentials.password;

        // Replace with your actual database query
        const user = {
          username: 'admin',
          password: await bcrypt.hash('admin', 12), // Example hashed password
        };

        if (!user || user.username !== username) {
          throw new Error('No user found with that username.');
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error('Could not sign you in!');
        }

        return { username: user.username };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.username = token.username;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
