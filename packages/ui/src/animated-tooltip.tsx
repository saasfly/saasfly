"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };

  return (
    <>
      {items.map((item, index) => (
        <div
          className="group relative"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} // 初始状态位于下方10px处，不透明度为0
              animate={{
                opacity: 1,
                y: 0, // 结束状态回到初始位置，不透明度为1
                transition: { type: "spring", ...springConfig },
              }}
              exit={{ opacity: 0, y: 10 }} // 离开时回到初始状态
              className="absolute bottom-0 z-50 mb-14 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              // 注意：这里的mb-14是根据需要调整的，确保工具提示出现在元素下方
            >
              <div className="text-base font-bold text-white">{item.name}</div>
              <div className="text-xs text-white">{item.designation}</div>
            </motion.div>
          )}
          <Image
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
