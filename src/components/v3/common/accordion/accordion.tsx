"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { Icon } from "@/components/icon/icon";
import { cn } from "@/lib/utils";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string;
  answer: ReactNode;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ question, answer, ...props }, ref) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    return (
      <div
        ref={ref}
        className={cn(
          "bg-secondary-container rounded-2xl p-4",
          props.className,
        )}
        {...props}
      >
        <h2>
          <button
            className="text-on-secondary-container text-title-medium flex w-full items-center justify-between py-2 text-left"
            onClick={(e) => {
              e.preventDefault();
              setAccordionOpen(!accordionOpen);
            }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-01`}
          >
            <span>{question}</span>
            <Icon
              className={`origin-center rotate-0 transform transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
            >
              keyboard_arrow_down
            </Icon>
          </button>
        </h2>
        <div
          id={`accordion-text-01`}
          role="region"
          aria-labelledby={`accordion-title-01`}
          className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${accordionOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <p className="text-body-large">{answer}</p>
          </div>
        </div>
      </div>
    );
  },
);

Accordion.displayName = "Accordian";

export { Accordion };
