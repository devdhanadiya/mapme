import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultUser & {
      id: string;
    };
    accessToken?: string;
  }

  interface User {
    id: string;
  }

  interface JWT {
    accessToken?: string;
  }
}
