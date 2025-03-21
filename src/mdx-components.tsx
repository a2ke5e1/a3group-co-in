import React from "react";
import type { MDXComponents } from "mdx/types";
import "./app/globals.css";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    a: ({ children, ...props }) => (
      <Link {...props} className="text-primary underline">
        {children}
      </Link>
    ),
  };
}
