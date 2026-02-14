import Button from "@/components/common/button/Button";
import OutlinedButton from "@/components/common/button/OutlinedButton";
import { Icon } from "@/components/icon/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface AppHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  icon: string;
  stats?: {
    downloads: string;
    rating: string;
    reviews: string;
  };
  links: {
    download: string | undefined;
    sourceCode?: string;
    webApp?: string;
    terminalApp?: string;
    learnMore?: string;
  };
}

const AppHeader = React.forwardRef<HTMLDivElement, AppHeaderProps>(
  ({ name, description, icon, links, stats, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap-reverse items-start justify-between gap-2 md:flex-wrap",
          props.className,
        )}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-headline-large text-on-surface">{name}</h1>
            <p className="text-on-surface-variant text-body-large max-w-[26.25rem] leading-5">
              {description}
            </p>
          </div>
          {stats && (
            <div className="text-label-large text-on-surface flex flex-wrap items-center gap-4 py-4 text-center *:flex *:flex-row *:items-center *:gap-2">
              {stats.downloads && (
                <div>
                  <Icon>download</Icon>
                  {stats.downloads} Downloads
                </div>
              )}
              {stats.rating && (
                <div>
                  <Icon>star</Icon>
                  {stats.rating} Rating
                </div>
              )}
              {stats.reviews && (
                <div>
                  <Icon>reviews</Icon>
                  {stats.reviews} Reviews
                </div>
              )}
            </div>
          )}
          <div className="my-4 flex flex-row flex-wrap gap-4">
            {links.download && (
              <Link href={links.download}>
                <Button>
                  <Icon slot="icon">download</Icon>
                  Download
                </Button>
              </Link>
            )}
            {links.learnMore && (
              <Link href={links.learnMore}>
                <OutlinedButton>Learn More</OutlinedButton>
              </Link>
            )}
            {links.terminalApp && (
              <Link href={links.terminalApp}>
                <OutlinedButton>
                  <Icon slot="icon">terminal</Icon>
                  Terminal
                </OutlinedButton>
              </Link>
            )}
            {links.sourceCode && (
              <Link href={links.sourceCode}>
                <OutlinedButton>
                  <Icon slot="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_25_109)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.65123 0C3.86732 0 0 3.89583 0 8.71551C0 12.5681 2.47793 15.8293 5.91547 16.9835C6.34525 17.0703 6.50268 16.796 6.50268 16.5653C6.50268 16.3632 6.48851 15.6706 6.48851 14.949C4.08195 15.4686 3.5808 13.9101 3.5808 13.9101C3.19405 12.9 2.62101 12.6404 2.62101 12.6404C1.83334 12.1065 2.67839 12.1065 2.67839 12.1065C3.55211 12.1642 4.01058 13.0011 4.01058 13.0011C4.78391 14.3285 6.03004 13.9535 6.53136 13.7225C6.60291 13.1598 6.83223 12.7702 7.07572 12.5538C5.15631 12.3517 3.13685 11.6014 3.13685 8.25368C3.13685 7.30132 3.4804 6.52216 4.02475 5.91618C3.93886 5.69978 3.638 4.80498 4.11081 3.60736C4.11081 3.60736 4.84128 3.37645 6.48833 4.50199C7.19349 4.31121 7.92072 4.21416 8.65123 4.21334C9.3817 4.21334 10.1263 4.31446 10.8139 4.50199C12.4612 3.37645 13.1916 3.60736 13.1916 3.60736C13.6645 4.80498 13.3634 5.69978 13.2775 5.91618C13.8362 6.52216 14.1656 7.30132 14.1656 8.25368C14.1656 11.6014 12.1461 12.3372 10.2124 12.5538C10.5276 12.8279 10.7996 13.3473 10.7996 14.1699C10.7996 15.3386 10.7854 16.2766 10.7854 16.5651C10.7854 16.796 10.943 17.0703 11.3726 16.9837C14.8102 15.8291 17.2881 12.5681 17.2881 8.71551C17.3023 3.89583 13.4208 0 8.65123 0Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_25_109">
                          <rect width="17.3542" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Icon>
                  Source Code
                </OutlinedButton>
              </Link>
            )}
            {links.webApp && (
              <Link href={links.webApp}>
                <OutlinedButton>
                  <Icon slot="icon">language</Icon>
                  Web
                </OutlinedButton>
              </Link>
            )}
          </div>
        </div>
        <Image
          src={icon}
          alt={`${name}`}
          width={128}
          height={128}
          className="h-12 w-12 sm:h-fit sm:w-fit"
        />
      </div>
    );
  },
);

AppHeader.displayName = "AppHeader";

export { AppHeader };
