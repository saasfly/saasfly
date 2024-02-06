import * as React from "react";

export function DashboardShell(props: {
  title?: string;
  description?: React.ReactNode;
  breadcrumb?: boolean;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-cal text-xl font-semibold leading-none">
            {props.title}
          </h1>
          {typeof props.description === "string" ? (
            <h2 className="text-base text-muted-foreground">
              {props.description}
            </h2>
          ) : (
            props.description
          )}
        </div>
        {props.headerAction}
      </div>
      {/*{props.breadcrumb && <Breadcrumbs />}*/}
      <div className={props.className}>{props.children}</div>
    </div>
  );
}
