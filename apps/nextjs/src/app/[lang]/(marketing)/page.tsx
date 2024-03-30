import Link from "next/link";

import { HoverEffects } from "~/components/card-hover-effect";
import { Globes } from "~/components/globe";
import { InfiniteMovingCardss } from "~/components/infiniteMovingCards";
import { Meteorss } from "~/components/meteors-card";
import ShimmerButton from "~/components/shimmer-button";
import { Sparkless } from "~/components/sparkles";
import TextGenerateEffects from "~/components/textGenerateEffect";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { Meteor } from "~/types/meteors";

const meteors_data: Meteor[] = [
  {
    name: "Saasfly Github",
    description: "What are you waiting for? Just kickoff your next App",
    button_content: "Get Started",
  },
  {
    name: "Saasfly Docs",
    description:
      "Your complete All-in-One solution for building SaaS services.",
    button_content: "Explore",
  },
  {
    name: "Discord",
    description:
      "Join our Discord server to chat with other developers and get help.",
    button_content: "Chat with us",
  },
];

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
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <Sparkless />
          </h1>
          <TypewriterEffectSmooths />
          <div className="">
            <Link href={`${lang}/login`}>
              <ShimmerButton>
                <span className="z-10 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent ">
                  {dict.marketing.get_started}
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="saasfly"
        className="container mb-8 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Welcome to Saasfly
          </h2>
          <TextGenerateEffects />
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {meteors_data.map((meteor, index) => (
            <Meteorss key={index} meteor={meteor} />
          ))}
        </div>
      </section>

      <section
        id="company"
        className="container mb-8 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <InfiniteMovingCardss />
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
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
      </section>
      <section
        id="Globes"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <Globes />
      </section>
    </>
  );
}
