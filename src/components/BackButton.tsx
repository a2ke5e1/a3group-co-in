"use client";

import React from "react";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Link
      href={"/"}
      onClick={() => router.back()}
      aria-description="Go Back"
      className="hover:bg-blue-50 hover:rounded-full p-2 hover:text-blue-900"
    >
      <ArrowBack className="-mt-1 " /> {/** -mt-1 is for vertical centering */}
    </Link>
  );
};
