import Link from "next/link";

import { Meteorss } from "~/components/meteors-card";
import ShimmerButton from "~/components/shimmer-button";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { DocumentGuide } from "~/components/document-guide";
import { XBlogArticle } from "~/components/blog-card";
import { FeaturesCard } from "~/components/features-card";
import { WordReveal } from "~/components/word-reveal";
import { WobbleCardShow } from "~/components/wobble";
import { Questions } from "~/components/questions";
import { Comments } from "~/components/comments";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { Meteor } from "~/types/meteors";

import * as Icons from "@saasfly/ui/icons";

const meteors_data: Meteor = {
  name: "Join our Discord",
  description:
    "Join our Discord server to chat with other developers and get help.",
  button_content: "Chat with us",
  url: "https://discord.com/invite/b9uTZjdkrb"
};

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="w-full h-[100vh]">
        <div className="w-full h-full flex px-[220px] justify-between">
          <div className="pt-28 flex flex-col pr-4">
            <Link href="https://document.saasfly.io" target="_blank">
              <DocumentGuide>
                {dict.marketing.introducing || 'Introducing Saasfly'}
              </DocumentGuide>
            </Link>

            <div className="mt-4 pr-12">
              <h1 className="text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 max-w-4xl">
                {dict.marketing.title || 'Saasfly: A new SaaS player? Make things easier.'}
              </h1>
            </div>

            <div>
              <span className="text-zinc-500 sm:text-xl">{dict.marketing.sub_title || 'Your complete All-in-One solution for building SaaS services.'}</span>
              <TypewriterEffectSmooths />
            </div>

            <div className="flex mt-8">
              <Link href={`${lang}/login`}>
                <ShimmerButton>
                  <span className="w-36 z-10 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                    {dict.marketing.get_started}
                  </span>
                </ShimmerButton>
              </Link>

              <Link href="https://github.com/saasfly/saasfly" target="_blank">
                <div className="ml-10 flex justify-center items-center h-full">
                  <Icons.GitHub className="w-6 h-6 mr-2"/>
                  <span className="font-semibold text-base">
                    {dict.marketing.view_on_github || 'View on GitHub'}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="pt-28 flex flex-col pl-[120px]">
              <Meteorss meteor={meteors_data} />
              <div className="mt-4 w-full flex justify-between">
                <XBlogArticle/>
                <div className="ml-4">
                  <FeaturesCard/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[100vh]">
        <div className="w-full h-full flex px-[220px] justify-between">
          <div className="w-[60%] pt-40 flex flex-col pr-4">
            <WobbleCardShow/>
          </div>
          <div className="w-[40%] h-full">
            <div className="flex flex-col pl-[120px]">
              <WordReveal/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[90vh]">
        <div className="w-full h-full flex px-[220px] justify-between">
          <div className="w-[60%] pt-40 flex flex-col pr-4">
            <div className="px-[120px]">
              <Questions/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full h-full flex flex-col px-[220px] pt-10 pb-[100px] items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 relative text-left dark:text-zinc-100 max-w-4xl">What People Are Saying</h1>
          </div>
          <div className="text-xl md:text-xl mb-6 dark:text-zinc-100 max-w-4xl">
            Don’t just take our word for it. Here’s what <span className="font-bold">real people</span> are saying about Saasfly.
          </div>

          <div>
            <Comments/>
          </div>
        </div>
      </section>
    </>
  );
}
