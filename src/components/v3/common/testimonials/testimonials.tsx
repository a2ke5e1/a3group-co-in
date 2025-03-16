"use client";

import React from "react";
import { Icon } from "@/components/icon/icon";
import { cn } from "@/lib/utils";

export interface TestimonialsItem {
  reviewer: string;
  review: string;
  rating: number;
}

export interface TestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: TestimonialsItem[];
}

const Testimonials = React.forwardRef<HTMLDivElement, TestimonialsProps>(
  ({ testimonials, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4", props.className)}
        {...props}
      >
        <h1 className="text-title-large text-on-surface">Testimonials</h1>

        <div className="flex flex-1 flex-row items-stretch justify-between gap-4">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-surface-container flex flex-1 flex-col gap-4 rounded-xl p-4"
            >
              <div className="flex flex-col">
                <div className="text-on-surface text-label-medium">
                  {review.reviewer}
                </div>
                <div className="flex flex-row gap-1">
                  {Array.from({ length: Number(review.rating) }, (_, i) => (
                    <Icon
                      key={i}
                      className="material-symbols-rounded-selected text-primary w-4"
                    >
                      star
                    </Icon>
                  ))}
                </div>
              </div>
              <p className="text-on-surface-variant text-body-small">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

Testimonials.displayName = "Testimonials";

export { Testimonials };
