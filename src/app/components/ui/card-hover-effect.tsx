import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useTransform,useMotionValue,useSpring } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AnimatedTooltip } from "./animated-tooltip";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number,
    image:string,
    name:string,
    designation:string,
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid lg:grid-cols-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="col-span-2 relative group block p-3 gap-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div style={{padding:"8%"}}>
                <AnimatedTooltip 
                items={[
                {
                    id: item.id,
                    name: item.name,
                    designation: item.designation,
                    image: item.image
                }
                ]} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            </div>
          
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-2",
        className
      )}
    >
      <div className="relative z-1">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
