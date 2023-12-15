import NextAuth, { DefaultSession, DefaultJWT, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session extends Omit<DefaultSession, 'user'> {
        user: {
            id: number;
            firstName: string;
            lastName: string
            isTeacher: boolean;
        };
    }
    interface User {
        id: number;
        firstName: string;
        lastName: string
        isTeacher: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userId: number;
        firstName: string;
        lastName: string
        isTeacher: boolean;
    } 
}