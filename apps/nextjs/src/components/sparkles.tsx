// "use client";

import React from "react";

// import { useTheme } from "next-themes";

// import { SparklesCore } from "@saasfly/ui/sparkles";

export function Sparkless() {
  // const { theme } = useTheme();
  // let color = "#FFFFFF";
  // if (theme == "light") {
  //   color = "#000000";
  // }
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="relative z-20 text-center font-bold text-black dark:text-white">
        Saasfly: A new SaaS player?
      </h1>
      {/*<div className="relative h-40 w-[40rem]">*/}
      {/*  /!* Gradients *!/*/}
      {/*  <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm dark:via-indigo-300" />*/}
      {/*  <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent dark:via-indigo-300" />*/}
      {/*  <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm dark:via-sky-300" />*/}
      {/*  <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent dark:via-sky-300" />*/}

      {/*  /!* Core component *!/*/}
      {/*  <SparklesCore*/}
      {/*    background="transparent"*/}
      {/*    minSize={0.4}*/}
      {/*    maxSize={1}*/}
      {/*    particleDensity={1200}*/}
      {/*    className="h-full w-full"*/}
      {/*    particleColor={color}*/}
      {/*  />*/}

      {/*  /!* Radial Gradient to prevent sharp edges *!/*/}
      {/*  <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] dark:bg-gray-950"></div>*/}
      {/*</div>*/}
    </div>
  );
}
