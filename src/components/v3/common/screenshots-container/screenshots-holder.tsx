import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const screenshotsVariants = cva("flex flex-row overflow-x-auto gap-4 mt-4", {
  variants: {},
  defaultVariants: {},
});

interface ScreenshotGalleryProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof screenshotsVariants> {
  screenshots: { src: string; alt: string }[];
}

const Screenshots = React.forwardRef<HTMLDivElement, ScreenshotGalleryProps>(
  ({ screenshots, ...props }, ref) => {
    // console.log(screenshots);
    return (
      <div {...props} ref={ref}>
        <h1 className="text-title-large text-on-surface">Screenshot</h1>
        <div className={cn(screenshotsVariants())}>
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
  },
);

export { Screenshots };
