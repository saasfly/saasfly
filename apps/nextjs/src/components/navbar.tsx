"use client";

import Link from "next/link";
import type { User } from "next-auth";

import { cn } from "@saasfly/ui";
import { Button, buttonVariants } from "@saasfly/ui/button";

import { LocaleChange } from "~/components/locale-change";
import useScroll from "~/hooks/use-scroll";
import { useSigninModal } from "~/hooks/use-signin-modal";
import type { MainNavItem } from "~/types";
import { MainNav } from "./main-nav";
import { UserAccountNav } from "./user-account-nav";

type Dictionary = Record<string, string>;

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Dictionary;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items} params={{ lang: `${lang}` }}>
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}
          <LocaleChange url={"/"} />
          {!user ? (
            <Link
              href={`/${lang}/login`}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {typeof marketing.login === "string"
                ? marketing.login
                : "Default Login Text"}
            </Link>
          ) : null}

          {user ? (
            <UserAccountNav
              user={user}
              params={{ lang: `${lang}` }}
              dict={dropdown}
            />
          ) : (
            <Button
              className="px-3"
              variant="default"
              size="sm"
              onClick={signInModal.onOpen}
            >
              {typeof marketing.signup === "string"
                ? marketing.signup
                : "Default Signup Text"}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
