"use client";

import { SignInModal } from "~/components/sign-in-modal";
import { useMounted } from "~/hooks/use-mounted";

export const ModalProvider = ({ dict }: { dict: Record<string, string> }) => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SignInModal dict={dict} />
    </>
  );
};
