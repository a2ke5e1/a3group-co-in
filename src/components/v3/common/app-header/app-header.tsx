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

export interface AppHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  icon: string;
  links: {
    download: string | undefined;
    sourceCode?: string;
    webApp?: string;
    terminalApp?: string;
    learnMore?: string;
  };
}

const AppHeader = React.forwardRef<HTMLDivElement, AppHeaderProps>(
  ({ name, description, icon, links, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-row items-center justify-between",
          props.className,
        )}
        {...props}
      >
        <div className="flex max-w-[26.25rem] flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-headline-large text-on-surface">{name}</h1>
            <p className="text-on-surface-variant text-body-large">
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
            {links.sourceCode && (
              <TextButton href={links.sourceCode}>
                <Icon slot="icon">code</Icon>
                Get Source Code
              </TextButton>
            )}
            {links.webApp && (
              <TextButton href={links.webApp}>
                <Icon slot="icon">language</Icon>
                Web App
              </TextButton>
            )}
            {links.terminalApp && (
              <TextButton href={links.terminalApp}>
                <Icon slot="icon">terminal</Icon>
                Terminal App
              </TextButton>
            )}
          </div>
        </div>
        <Image
          src={icon}
          alt={`${name}`}
          width={128}
          height={128}
          className="h-fit w-fit"
        />
      </div>
    );
  },
);

AppHeader.displayName = "AppHeader";

export { AppHeader };
