"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FilledButton,
  FilledTonalButton,
  OutlinedButton,
  TextButton,
} from "@/components/button/button";
import { Icon } from "@/components/icon/icon";
import { cva, type VariantProps } from "class-variance-authority";
import React, { Component } from "react";
import { cn } from "@/lib/utils";

export interface AppCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AppCardVariants> {
  name: string;
  description: string;
  coverImage: string;
  links: {
    download: string | undefined;
    learnMore: string;
  };
  reverseImage?: boolean;
}

const AppCardVariants = cva("flex flex-row gap-6", {
  variants: {
    reverseImage: {
      true: "flex-row-reverse",
      false: "",
    },
  },
  defaultVariants: {
    reverseImage: false,
  },
});

const AppCard = React.forwardRef<HTMLDivElement, AppCardProps>(
  (
    { name: title, description, coverImage, links, reverseImage, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(AppCardVariants({ reverseImage }), props.className)}
        {...props}
      >
        <Image
          src={coverImage}
          alt={`${title} Cover`}
          width={456.89}
          height={257}
          className="aspect-video h-full rounded-2xl"
        />
        <div className="flex flex-col">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-headline-large">{title}</h1>
            <p className="text-on-surface-variant text-body-large text-justify">
              {description}
            </p>
          </div>
          <div className="my-8 flex flex-row flex-wrap gap-4">
            {links.download && (
              <FilledButton href={links.download}>
                <Icon slot="icon">download</Icon>
                Download
              </FilledButton>
            )}

            {links.learnMore && (
              <OutlinedButton href={links.learnMore}>Learn More</OutlinedButton>
            )}
          </div>
        </div>
      </div>
    );
  },
);

AppCard.displayName = "AppCard";

export { AppCard, AppCardVariants };
