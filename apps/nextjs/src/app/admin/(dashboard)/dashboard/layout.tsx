import { notFound } from "next/navigation";

import { getCurrentUser } from "@saasfly/auth";

import { SiteFooter } from "~/components/site-footer";
import { i18n, type Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function DashboardLayout({
  children,
  params: { lang },
}: DashboardLayoutProps) {
  const user = await getCurrentUser();
  const dict = await getDictionary(lang);
  if (!user) {
    return notFound();
  }
  // const dashboardConfig = await getDashboardConfig({ params: { lang } });
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        {/*<div className="container flex h-16 items-center justify-between py-4">*/}
        {/*    <MainNav*/}
        {/*        items={dashboardConfig.mainNav}*/}
        {/*        params={{lang: `${lang}`}}*/}
        {/*    />*/}
        {/*    <div className="flex items-center space-x-3">*/}
        {/*        <LocaleChange url={"/dashboard"}/>*/}
        {/*        <UserAccountNav*/}
        {/*            user={{*/}
        {/*                name: user.name,*/}
        {/*                image: user.image,*/}
        {/*                email: user.email,*/}
        {/*            }}*/}
        {/*            params={{lang: `${lang}`}}*/}
        {/*            dict={dict.dropdown}*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
      </header>
      {/**/}
      {/*    <aside className="hidden w-[200px] flex-col md:flex">*/}
      {/*        <DashboardNav*/}
      {/*            items={dashboardConfig.sidebarNav}*/}
      {/*            params={{lang: `${lang}`}}*/}
      {/*        />*/}
      {/*    </aside>*/}
      {/*    <main className="flex w-full flex-1 flex-col overflow-hidden">*/}
      {/*        {children}*/}
      {/*    </main>*/}
      {/*</div>*/}
      <div className="container grid flex-1 gap-12 ">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter
        className="border-t"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  );
}
