import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { MongoClient } from "mongodb";

const clientPromise = MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                credentials.password = "";
                credentials.username = "";
                const client = await clientPromise;
                const usersCollection = client.db().collection("users");

                const user = await usersCollection.findOne({
                    username: credentials.username,
                });

                if (user && user.password === credentials.password) {
                    return { id: user._id, name: user.username };
                } else {
                    return null;
                }
            },
        }),
    ],
    database: process.env.MONGODB_URI,
});
