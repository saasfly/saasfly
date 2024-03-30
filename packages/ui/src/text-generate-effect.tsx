"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "./utils/cn";
import dynamic from "next/dynamic";

const TextGenerateEffectImpl = ({
                                    words,
                                    className,
                                }: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        void animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.1),
            }
        );
    }, [scope.current, words]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("", className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};

export const TextGenerateEffect = dynamic(
    () => Promise.resolve(TextGenerateEffectImpl),
    {
        ssr: false,
    }
);