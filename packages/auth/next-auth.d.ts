import { type DefaultSession, type User } from "next-auth";

type UserId = string;

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
  isTwoFactorEnabled: boolean;
  isOauth: boolean;
  user: User & {
    id: UserId;
  };
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
