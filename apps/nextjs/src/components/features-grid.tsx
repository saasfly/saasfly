import { Card } from "@saasfly/ui/card"
import * as Icons from "@saasfly/ui/icons";

export function FeaturesGrid({ dict } : { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex gap-4 flex-col sm:flex-row md:flex-row xl:flex-row">
      <Card className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icons.Blocks className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.monorepo_title}</h2>
          </div>
          <p className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
            {dict?.monorepo_desc}
          </p>
        </div>
      </Card>

      <Card className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icons.Languages className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.i18n_title}</h2>
          </div>
          <p className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
            {dict?.i18n_desc}
          </p>
        </div>
      </Card>

      <Card className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icons.Billing className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.payments_title}</h2>
          </div>
          <p className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
            {dict?.payments_desc}
          </p>
        </div>
      </Card>

      <Card className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icons.ShieldCheck className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.nextauth_title}</h2>
          </div>
          <p className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
            {dict?.nextauth_desc}
          </p>
        </div>
      </Card>
    </div>
  )
}
