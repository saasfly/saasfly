"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

import { cn } from "./utils/cn";

export const TypewriterEffectImpl = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      void animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        },
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.span ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <React.Fragment key={`word-${idx}`}>
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn(`hidden text-zinc-500 opacity-0`, word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </React.Fragment>
        ))}
      </motion.span>
    );
  };

  return (
    <p className={cn("", className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-4 w-[4px] rounded-sm  bg-blue-500",
          cursorClassName,
        )}
      ></motion.span>
    </p>
  );
};

export const TextGenerateEffect = dynamic(
  () => Promise.resolve(TypewriterEffectImpl),
  {
    ssr: false,
  },
);
