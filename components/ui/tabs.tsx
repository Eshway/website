"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start perspective-[1000px] relative overflow-x-auto overflow-y-hidden sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative shrink-0 whitespace-nowrap rounded-full px-3 py-2 sm:px-4",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block whitespace-nowrap text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        hovering={hovering}
        className={cn("mt-10 sm:mt-12", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  hovering?: boolean;
}) => {
  const MAX_STACK = 5; // keep all 5 tabs in the animation stack
  const stackTabs = tabs.slice(0, MAX_STACK);

  return (
    <div className={cn(className)}>
      {/* Mobile: render only the active card (no stacked absolute layers) */}
      <div className="sm:hidden">{tabs[0]?.content}</div>

      {/* Desktop/tablet: stacked animation */}
      <div className="relative hidden w-full min-h-[640px] sm:block sm:min-h-[700px] md:min-h-[800px]">
        {stackTabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            animate={{
              // Base stack offset so the lower items "peek" below the active card.
              y: idx * 22 + (hovering ? idx * -10 : 0),
              scale: 1 - idx * 0.045,
              opacity: idx < MAX_STACK ? 1 - idx * 0.14 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 38,
              mass: 0.6,
            }}
            style={{
              zIndex: stackTabs.length - idx,
              pointerEvents: idx === 0 ? "auto" : "none",
            }}
            className="absolute left-0 top-0 h-full w-full will-change-transform"
          >
            {idx === 0 ? (
              tab.content
            ) : (
              <div className="pointer-events-none absolute bottom-6 left-1/2 w-[92%] -translate-x-1/2">
                <div className="rounded-2xl border border-fuchsia-500/20 bg-background/35 px-5 py-3 shadow-[0_14px_55px_-40px_rgba(0,0,0,0.85)] backdrop-blur-md">
                  <div className="font-inter text-sm text-foreground/85">
                    {tab.title}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
