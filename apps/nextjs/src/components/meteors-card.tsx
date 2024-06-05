import { Meteors } from "@saasfly/ui/meteors";

import type { Meteor } from "~/types/meteors";

export function Meteorss({ meteor }: { meteor: Meteor }) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 px-4 py-8 shadow-xl dark:bg-gray-900 dark:bg-opacity-70">
          <h1 className="relative z-50 mb-4 text-2xl font-bold">
            {meteor.name}
          </h1>

          <p className="light:text-slate-600 relative z-50 mb-4 text-base font-normal dark:text-slate-400">
            {meteor.description}
          </p>
          <a href={meteor.url} target="_blank" rel="noopener noreferrer">
            <button className="light:text-gray-400 rounded-lg border border-gray-500 px-4 py-1 dark:text-gray-300">
              {meteor.button_content}
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
