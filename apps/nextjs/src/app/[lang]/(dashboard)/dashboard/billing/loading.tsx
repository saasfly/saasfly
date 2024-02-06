import { Card, CardContent, CardHeader, CardTitle } from "@saasfly/ui/card";

import { DashboardShell } from "~/components/shell";

export default function Loading() {
  return (
    <DashboardShell
      title="Billing"
      description="Manage your subscription and billing details"
      className="space-y-4"
    >
      <LoadingCard title="Subscription" />
      <LoadingCard title="Usage" />
    </DashboardShell>
  );
}

function LoadingCard(props: { title: string }) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-24 animate-pulse rounded bg-muted" />
      </CardContent>
    </Card>
  );
}
