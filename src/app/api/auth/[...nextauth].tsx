import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../../lib/mongodb';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const client = await clientPromise;
                const db = client.db();

                const user = await db.collection('users').findOne({ username: credentials.username });

                if (user && user.password === credentials.password) {
                    return { id: user._id, name: user.username, email: user.email };
                } else {
                    return null;
                }
            }
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

