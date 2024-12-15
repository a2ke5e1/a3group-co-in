import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Image from "next/image";
import Link from "next/link";


// Cover component
const coverVariants = cva("w-full bg-primary-container object-contain rounded-2xl aspect-[4.5/1] ", {
  variants: {},
  defaultVariants: {},
});

interface CoverProps {
  src: string;
  alt: string;
  className?: string;
}

const Cover: React.FC<CoverProps> = ({ src, alt, className }) => (
  <Image
    src={src}
    className={coverVariants({ className })}
    width={1280}
    height={720}
    quality={100}
    alt={alt}
  />
);

// AppInfo component
const appInfoVariants = cva("flex flex-row justify-between my-8 items-center flex-wrap gap-4", {
  variants: {},
  defaultVariants: {},
});

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
        <Link href={playStoreLink}>
          <Image
            alt="Get it on Google Play"
            width={160}
            height={62}
            src={playStoreBadge}
          />
        </Link>
        <a className="text-label-small">
          Google Play and the Google Play logo are trademarks of Google LLC.
        </a>
      </div>
    </div>
  </section>
);

// ScreenshotGallery component
const screenshotGalleryVariants = cva("flex flex-row overflow-x-auto gap-4 my-2 py-2", {
  variants: {},
  defaultVariants: {},
});

interface ScreenshotGalleryProps {
  screenshots: { src: string; alt: string }[];
  className?: string;
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots, className }) => (
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
