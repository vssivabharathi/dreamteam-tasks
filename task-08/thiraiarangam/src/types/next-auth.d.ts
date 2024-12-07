import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;       // User's ID
      name: string;     // User's name
      email: string;    // User's email
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
  }
}
