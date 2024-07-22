"use client";

import React from "react";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackBehavior = () => {
    if (pathname.startsWith("/yearly-progress/")) {
      router.push("/yearly-progress");
    }
    if (pathname.startsWith("/eye-care/")) {
      router.push("/eye-care");
    }
    router.push("/");
  };

  return (
    <Link
      href="/"
      onClick={handleBackBehavior}
      aria-description="Go Back"
      className="hover:bg-blue-50 hover:rounded-full p-2 hover:text-blue-900 dark:text-white"
    >
      <ArrowBack className="-mt-1 " /> {/** -mt-1 is for vertical centering */}
    </Link>
  );
};
