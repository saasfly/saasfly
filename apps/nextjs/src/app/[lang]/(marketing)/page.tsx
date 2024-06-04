import Link from "next/link";

import { HoverEffects } from "~/components/card-hover-effect";
// import { Globes } from "~/components/globe";
import { InfiniteMovingCardss } from "~/components/infiniteMovingCards";
import { Meteorss } from "~/components/meteors-card";
import { Meteors } from "@saasfly/ui/meteors";
import ShimmerButton from "~/components/shimmer-button";
import { Sparkless } from "~/components/sparkles";
import TextGenerateEffects from "~/components/textGenerateEffect";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { DocumentGuide } from "~/components/document-guide";
import { XBlogArticle } from "~/components/blog-card";
import { FeaturesCard } from "~/components/features-card";
import { WordReveal } from "~/components/word-reveal";
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
          <div className="pt-40 flex flex-col pr-4">
            <Link href="https://document.saasfly.io" target="_blank">
              <DocumentGuide/>
            </Link>

            <div className="mt-4 pr-12">
              <h1 className="text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 max-w-4xl">Saasfly: A new SaaS player? Make things easier.</h1>
            </div>

            <div>
              <span className="text-zinc-500 sm:text-xl">Your complete All-in-One solution for building SaaS services.</span>
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
                    View on GitHub
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="pt-40 flex flex-col pl-[120px]">
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
          <div className="pt-40 flex flex-col pr-4">
            {/* <NeonGradientCardDemo/> */}
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col pl-[120px]">
              <WordReveal/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[100vh]"></section>

      <section className="w-full h-[100vh]"></section>

      {/* <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <Sparkless />
          </h1>
          <TypewriterEffectSmooths />
          <div className="flex justify-center items-center">
            <Link href={`${lang}/login`}>
              <ShimmerButton>
                <span className="z-10 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                  {dict.marketing.get_started}
                </span>
              </ShimmerButton>
            </Link>
            <Link href="https://github.com/saasfly/saasfly" target="_blank">
              <div className="ml-10 flex justify-center items-center">
                <Icons.GitHub className="w-6 h-6 mr-2"/>
                <span className="font-semibold text-base">
                  View on GitHub
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="saasfly"
        className="container mb-8 space-y-6 py-4 dark:bg-transparent md:py-4 lg:py-4"
      >
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          {meteors_data.map((meteor, index) => (
            <Meteorss key={index} meteor={meteor} />
          ))}
        </div>
      </section>

      <section
        id="company"
        className="container mb-8 space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-center text-3xl font-semibold leading-tight md:text-5xl lg:leading-[1.1]">
            Welcome to Saasfly
          </h2>
          <TextGenerateEffects />
        </div>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <InfiniteMovingCardss />
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6  py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {dict.marketing.features}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {dict.marketing.sub_features}
          </p>
        </div>
        <div>
          <HoverEffects />
        </div>
      </section> */}
    </>
  );
}
