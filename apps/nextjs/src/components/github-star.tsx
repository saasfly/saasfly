"use client";

import Link from "next/link";
import * as Icons from "@saasfly/ui/icons";

export function GitHubStar() {
  return (
    <Link href="https://github.com/saasfly/saasfly" target="_blank" rel="Saasfly GitHub">
      <div className="inline-flex items-center gap-1.5 px-3 h-9 border border-input hover:bg-accent hover:text-accent-foreground rounded-full text-sm font-medium">
        <Icons.GitHub className="w-4 h-4"/>
        <span>2.2K</span>
      </div>
    </Link>
  )
}