import NextAuth, { DefaultSession, DefaultJWT, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            firstName: string;
            lastName: string
            isTeacher: boolean;
            isAdmin: boolean;
        } & DefaultSession["user"];
    }
    interface User {
        id: number;
        firstName: string;
        lastName: string
        isTeacher: boolean;
        isAdmin: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userId: number;
        firstName: string;
        lastName: string
        isTeacher: boolean;
        isAdmin: boolean;
    } 
}