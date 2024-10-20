import React from 'react';
import clsx from 'clsx';

export type Variant = "h1" | "h2" | "h3" | "h4" | "p";

interface TypographyProps {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
}

export function Typography({ variant, children, className }: TypographyProps) {
    const baseClasses = {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6"
    };

    const Component = variant;

    return (
        <Component className={clsx(baseClasses[variant], className)}>
            {children}
        </Component>
    );
}
