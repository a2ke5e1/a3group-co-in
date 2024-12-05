import React from "react";
import type {MDXComponents} from "mdx/types";
import "./app/globals.css";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,

        // p : ({children, ...props}) => (
        //     <p className="mt-2 mb-2 text-justify">
        //       {children}
        //     </p>
        // ),

        // a: ({children, ...props}) => (
        //   <Link href={props.href!} {...props} className="text-blue-700 underline " >
        //       {children}
        //     </Link>
        // ),

        // h1: ({ children, ...props }) => (
        //   <h1 className="text-2xl font-semibold mt-2 mb-2" {...props}>
        //     {children}
        //   </h1>
        // ),
    };
}