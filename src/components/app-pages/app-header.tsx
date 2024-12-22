import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FilledTonalButton } from "../button/button";
import { Icon } from "../icon/icon";

// Cover component
const coverVariants = cva("object-contain sm:rounded-2xl rounded-lg", {
  variants: {
    dynamic: {
      true: "lg:aspect-[4.5/1] md:aspect-[2.5/1] aspect-[2/1] w-full",
      false: "",
    },
  },
  defaultVariants: {
    dynamic: true,
  },
});

interface CoverProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof coverVariants> {
  src: string;
  alt: string;
  className?: string;
  dynamic?: boolean;
}

const Cover = React.forwardRef<HTMLImageElement, CoverProps>(
  ({ src, alt, dynamic, className, ...props }, ref) => (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      className={cn(coverVariants({ dynamic, className }))}
      width={1546}
      height={423}
      quality={100}
      {...props}
    />
  )
);

// AppInfo component
const appInfoVariants = cva(
  "flex flex-row justify-between items-center flex-wrap gap-4",
  {
    variants: {},
    defaultVariants: {},
  }
);

interface AppInfoProps {
  appIcon: string;
  appName: string;
  appPublisher: string;
  playStoreLink: string;
  playStoreBadge: string;
  className?: string;
}

const AppInfo: React.FC<AppInfoProps> = ({
  appIcon,
  appName,
  appPublisher,
  playStoreLink,
  playStoreBadge,
  className,
}) => (
  <section className={appInfoVariants({ className })}>
    <div className="flex flex-row gap-2">
      <Image
        src={appIcon}
        width={56}
        height={56}
        className="rounded-md h-fit"
        alt={appName}
      />
      <div>
        <h1 className="text-headline-small">{appName}</h1>
        <p className="text-label-small ml-1 text-tertiary">{appPublisher}</p>
      </div>
    </div>
    <div>
      <div className="flex flex-col items-start sm:items-end">
        <FilledTonalButton href={playStoreLink}>
          <Icon slot="icon">shop</Icon>
          Get on Play Store
        </FilledTonalButton>
      </div>
    </div>
  </section>
);

// ScreenshotGallery component
const screenshotGalleryVariants = cva(
  "flex flex-row overflow-x-auto gap-4 my-2 py-2",
  {
    variants: {},
    defaultVariants: {},
  }
);

interface ScreenshotGalleryProps {
  screenshots: { src: string; alt: string }[];
  className?: string;
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({
  screenshots,
  className,
}) => (
  <div>
    <strong>Screenshot</strong>
    <div className={screenshotGalleryVariants({ className })}>
      {screenshots.map((screenshot, index) => (
        <Image
          key={index}
          src={screenshot.src}
          width={120}
          quality={100}
          height={260}
          alt={screenshot.alt}
        />
      ))}
    </div>
  </div>
);

export { Cover, AppInfo, ScreenshotGallery };
