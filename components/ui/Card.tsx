"use client";

import { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, HTMLMotionProps } from "framer-motion";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    className?: string;
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-sm transition-all",
                    hoverEffect && "hover:shadow-lg hover:border-primary/30 hover:bg-card/80",
                    className
                )}
                whileHover={hoverEffect ? { y: -5 } : undefined}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export { Card };
