import { KyselyAdapter } from "@auth/kysely-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// import { MagicLinkEmail, resend, siteConfig } from "@repo/common";
import { db } from "@saasfly/db";

import { env } from "./env.mjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    // error: "/error",
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  adapter: KyselyAdapter(db),
  providers: [
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   sendVerificationRequest: async ({ identifier, url }) => {
    //     const user = await db
    //       .selectFrom("User")
    //       .select(["name", "emailVerified"])
    //       .where("email", "=", identifier)
    //       .executeTakeFirst();
    //     const userVerified = !!user?.emailVerified;
    //     const authSubject = userVerified
    //       ? `Sign-in link for ${(siteConfig as { name: string }).name}`
    //       : "Activate your account";
    //
    //     try {
    //       await resend.emails.send({
    //         from: env.RESEND_FROM,
    //         to: identifier,
    //         subject: authSubject,
    //         react: MagicLinkEmail({
    //           firstName: user?.name ?? "",
    //           actionUrl: url,
    //           mailType: userVerified ? "login" : "register",
    //           siteName: (siteConfig as { name: string }).name,
    //         }),
    //         // Set this to prevent Gmail from threading emails.
    //         // More info: https://resend.com/changelog/custom-email-headers
    //         headers: {
    //           "X-Entity-Ref-ID": new Date().getTime() + "",
    //         },
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    // }),
  ],
  callbacks: {
    session({ token, session }) {
      if (token) {
        if (session.user) {
          session.user.id = token.id as string;
          session.user.name = token.name;
          session.user.email = token.email as string;
          session.user.image = token.picture;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      const email = token?.email ?? "";
      const dbUser = await db
        .selectFrom("User")
        .where("email", "=", email)
        .selectAll()
        .executeTakeFirst();
      // console.log("jwt dbUser", dbUser)
      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
  // debug: true,
});

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}
