// @ts-ignore
// @ts-nocheck
"use client";

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Button, buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import { Switch } from "@saasfly/ui/switch";

import { BillingFormButton } from "~/components/price/billing-form-button";
import { priceDataMap } from "~/config/price/price-data";
import { useSigninModal } from "~/hooks/use-signin-modal";
import { UserSubscriptionPlan } from "~/types";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
  dict: Record<string, string>;
  params: {
    lang: string;
  };
}

export function PricingCards({
  userId,
  subscriptionPlan,
  dict,
  params: { lang },
}: PricingCardsProps) {
  const isYearlyDefault = true;
  const [isYearly, setIsYearly] = useState<boolean>(isYearlyDefault);
  const signInModal = useSigninModal();
  const pricingData = priceDataMap[lang];
  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };
  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {dict.pricing}
        </p>
        <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
          {dict.slogan}
        </h2>
      </div>

      <div className="mb-4 flex items-center gap-5">
        <span>{dict.monthly_bill}</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>{dict.annual_bill}</span>
      </div>

      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map(
          (offer: {
            title:
              | boolean
              | Key
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | PromiseLikeOfReactNode
              | null
              | undefined;
            prices: {
              monthly:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | PromiseLikeOfReactNode
                | null
                | undefined;
              yearly: number;
            };
            benefits: any[];
            limitations: any[];
            id: string;
          }) => (
            <div
              className="relative flex flex-col overflow-hidden rounded-xl border"
              key={offer?.title}
            >
              <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
                <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {offer?.title}
                </p>

                <div className="flex flex-row">
                  <div className="flex items-end">
                    <div className="flex text-left text-3xl font-semibold leading-6">
                      {isYearly && offer?.prices?.monthly > 0 ? (
                        <>
                          <span className="mr-2 text-muted-foreground line-through">
                            ${offer?.prices?.monthly}
                          </span>
                          <span>${offer?.prices?.yearly / 12}</span>
                        </>
                      ) : (
                        `$${offer?.prices?.monthly}`
                      )}
                    </div>
                    <div className="-mb-1 ml-2 text-left text-sm font-medium">
                      <div>{dict.mo}</div>
                    </div>
                  </div>
                </div>
                {offer.prices.monthly > 0 ? (
                  <div className="text-left text-sm text-muted-foreground">
                    {isYearly
                      ? `$${offer?.prices?.yearly} ${dict.annual_info}`
                      : `${dict.monthly_info}`}
                  </div>
                ) : null}
              </div>

              <div className="flex h-full flex-col justify-between gap-16 p-6">
                <ul className="space-y-2 text-left text-sm font-medium leading-normal">
                  {offer?.benefits.map((feature) => (
                    <li className="flex items-start" key={feature}>
                      <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                      <p>{feature}</p>
                    </li>
                  ))}

                  {offer?.limitations?.length > 0 &&
                    offer.limitations.map((feature) => (
                      <li
                        className="flex items-start text-muted-foreground"
                        key={feature}
                      >
                        <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                        <p>{feature}</p>
                      </li>
                    ))}
                </ul>

                {userId && subscriptionPlan ? (
                  offer?.id === "starter" ? (
                    <Link
                      href="/dashboard"
                      className={buttonVariants({
                        className: "w-full",
                        variant: "default",
                      })}
                    >
                      {dict.go_to_dashboard}
                    </Link>
                  ) : (
                    <BillingFormButton
                      year={isYearly}
                      offer={offer}
                      subscriptionPlan={subscriptionPlan}
                      dict={dict}
                    />
                  )
                ) : (
                  <Button onClick={signInModal.onOpen}>{dict.signup}</Button>
                )}
              </div>
            </div>
          ),
        )}
      </div>

      <p className="mt-3 text-center text-base text-muted-foreground">
        <Balancer>
          Email{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:support@saasfly.io"
          >
            support@saasfly.io
          </a>{" "}
          {dict.contact}
          <br />
          <strong>{dict.contact_2}</strong>
        </Balancer>
      </p>
    </section>
  );
}
