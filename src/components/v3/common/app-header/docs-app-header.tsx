"use client";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import {
  FilledButton,
  FilledTonalButton,
  OutlinedButton,
  TextButton,
} from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon/icon";
import { cn } from "@/lib/utils";

export interface DocsAppHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  appname: string;
  lastUpdate: Date;
  icon: string;
}

const DocsAppHeader = React.forwardRef<HTMLDivElement, DocsAppHeaderProps>(
  ({ appname, title, icon, lastUpdate, ...props }, ref) => {
    const dateFormat = Intl.DateTimeFormat("en", {
      dateStyle: "long",
    });

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap-reverse items-center justify-between gap-2 md:flex-wrap",
          props.className,
        )}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-headline-large text-on-surface">{title}</h1>
            <div className="flex flex-col gap-1">
              <h2 className="text-on-surface-variant text-headline-small max-w-[26.25rem]">
                {appname}
              </h2>
              <p className="text-on-surface-variant text-body-medium font-bold">
                <span>Last Updated: </span>
                {dateFormat.format(lastUpdate)}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={icon}
          alt={`${appname}`}
          width={128}
          height={128}
          className="h-fit w-fit"
        />
      </div>
    );
  },
);

DocsAppHeader.displayName = "DocsAppHeader";

export { DocsAppHeader };
