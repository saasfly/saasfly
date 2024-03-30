"use client";

import { cn } from "./utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";

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
                }
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
                                className={cn(
                                    `dark:text-white text-black opacity-0 hidden`,
                                    word.className
                                )}
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
        <p
            className={cn(
                "",
                className
            )}
        >
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
                    "inline-block rounded-sm w-[4px] h-4   bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </p>
    );
};

export const TextGenerateEffect = dynamic(
    () => Promise.resolve(TypewriterEffectImpl),
    {
        ssr: false,
    }
);