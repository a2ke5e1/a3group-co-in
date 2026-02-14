import React, { ReactNode } from "react";
import { Accordion } from "@/components/v3/common/accordion/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface FAQListProps {
  items: FAQItem[];
  className?: string;
}

export const FAQList: React.FC<FAQListProps> = ({ items, className }) => {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      {items.map((faq, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        const radiusClass =
          items.length > 1
            ? isFirst
              ? "rounded-t-[12px]! rounded-b-[4px]!"
              : isLast
                ? "rounded-b-[12px]! rounded-t-[4px]!"
                : "rounded-[4px]!"
            : "";

        return (
          <Accordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            className={radiusClass}
          />
        );
      })}
    </div>
  );
};
