import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma";
import { getServerSession, RequestInternal, type NextAuthOptions, User } from "next-auth";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"

export async function authenticate(key: string) {
    const user = await prisma.users.findUnique({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            isTeacher: true,
            isAdmin: true
        },
        where: {
            key: key
        }
    });

    if(!user) return null;

    return user;
}

export const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userId = parseInt(user.id as string);
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.isTeacher = user.isTeacher;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token, user }) { 
            if(token) {
                session.user.id = token.userId;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.isTeacher = token.isTeacher;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
    },
    pages: {
      signIn: '/',
    },
    providers: [
      Credentials({
        name: "Credentials",
        credentials: {
            key: { label: "Key", type: "password" }
        },
        async authorize(credentials: Record<"key", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">) {
           const { key } = credentials as {
            key: string
           };

           const user = await authenticate(key) as User | null
  
          return user;
        }
      })
    ],
  };

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions)
}

export const getAuthServerSession = () => getServerSession(authOptions);