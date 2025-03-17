"use client";

import React, { ReactNode } from "react";
import { Icon } from "@/components/icon/icon";
import { cn } from "@/lib/utils";

export interface FeaturesItem {
  headline: string;
  description: string;
  icon: string;
}

export interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
  features: FeaturesItem[];
}

const Features = React.forwardRef<HTMLDivElement, FeaturesProps>(
  ({ features, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4", props.className)}
        {...props}
      >
        <div className="flex flex-1 flex-wrap items-stretch justify-between gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-tertiary-container flex min-w-[30ch] flex-1 flex-row items-center gap-3 rounded-xl p-4"
            >
              <Icon className="w-9">{feature.icon}</Icon>
              <div className="flex flex-col gap-3 self-baseline">
                <div className="text-on-tertiary-container text-label-medium">
                  {feature.headline}
                </div>
                <p className="text-on-tertiary-container text-body-small">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

Features.displayName = "Features";

export { Features };
