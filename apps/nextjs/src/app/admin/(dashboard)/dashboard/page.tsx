import React from "react";
import {redirect} from "next/navigation";

import {authOptions, getCurrentUser} from "@saasfly/auth";
import {DashboardHeader} from "~/components/header";
import {K8sCreateButton} from "~/components/k8s/cluster-create-button";
import {DashboardShell} from "~/components/shell";
import type {Locale} from "~/config/i18n-config";
import {getDictionary} from "~/lib/get-dictionary";
import {trpc} from "~/trpc/server";
import type {ClustersArray} from "~/types/k8s";

export const metadata = {
  title: "Dashboard",
};

// export type ClusterType = RouterOutputs["k8s"]["getClusters"][number];
export default async function DashboardPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  //don't need to check auth here, because we have a global auth check in _app.tsx
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login");
  }
  const customer = await trpc.customer.queryCustomer.query({
    userId: user.id,
  });
  if (!customer) {
    await trpc.customer.insertCustomer.mutate({
      userId: user.id,
    });
  }
  // const accout
  const result: ClustersArray = await trpc.k8s.getClusters.query();
  if (result) {
    const dict = await getDictionary(lang);
    return (
      <DashboardShell>
        <DashboardHeader
          heading="kubernetes"
          text={dict.common.dashboard.title_text}
        >
          <K8sCreateButton dict={dict.business} />
        </DashboardHeader>
        <div>
          123
        </div>
      </DashboardShell>
    );
  }
}
