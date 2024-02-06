import { DocsSidebarNav } from "~/components/docs/sidebar-nav";
import type { Locale } from "~/config/i18n-config";
import { getDocsConfig } from "~/config/ui/docs";

export default function DocsLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
        <DocsSidebarNav items={getDocsConfig(`${lang}`).sidebarNav} />
      </aside>
      {children}
    </div>
  );
}
