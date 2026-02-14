import Image from "next/image";

import Button from "@/components/common/button/Button";
import OutlinedButton from "@/components/common/button/OutlinedButton";
import { Icon } from "@/components/icon/icon";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Link from "next/link";

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

const AppCardVariants = cva(
  "@container/app-card flex flex-row flex-wrap gap-6",
  {
    variants: {
      reverseImage: {
        true: "flex-row-reverse",
        false: "",
      },
    },
    defaultVariants: {
      reverseImage: false,
    },
  },
);

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
          className="aspect-video w-full rounded-2xl @[845px]/app-card:w-[456.89px]"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-headline-large">{title}</h1>
            <p className="text-on-surface-variant text-body-large text-justify leading-5">
              {description}
            </p>
          </div>
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
          </div>
        </div>
      </div>
    );
  },
);

AppCard.displayName = "AppCard";

export { AppCard, AppCardVariants };
