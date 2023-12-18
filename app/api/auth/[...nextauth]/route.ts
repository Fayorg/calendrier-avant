import NextAuth from "next-auth";

import { authOptions } from "@lib/authenticate";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };