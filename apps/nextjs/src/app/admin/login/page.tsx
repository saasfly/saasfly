"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { cn } from "@saasfly/ui";
import { CardBody, CardContainer, CardItem } from "@saasfly/ui/3d-card";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

export default function LoginPage() {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      {/*<Link*/}
      {/*  href={`/${lang}`}*/}
      {/*  className={cn(*/}
      {/*    buttonVariants({ variant: "ghost" }),*/}
      {/*    "absolute left-4 top-4 md:left-8 md:top-8",*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <>*/}
      {/*    <Icons.ChevronLeft className="mr-2 h-4 w-4" />*/}
      {/*    {dict.login.back}*/}
      {/*  </>*/}
      {/*</Link>*/}
      <CardContainer className="inter-var">
        <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Start a beautiful new life
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            Admin Dashboard
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="mt-20 flex items-center justify-between">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/saasfly/saasfly"
              target="__blank"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              You know this is not easy for us
            </CardItem>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "outline" }))}
              onClick={() => {
                setIsGitHubLoading(true);
                signIn("github", {
                  redirect: true,
                  callbackUrl: "http://localhost:3000/admin/dashboard",
                }).catch((error) => {
                  console.error("GitHub signIn error:", error);
                });
              }}
              disabled={isGitHubLoading}
            >
              {isGitHubLoading ? (
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.GitHub className="mr-2 h-4 w-4" />
              )}{" "}
              Github
            </button>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
