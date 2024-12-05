"use client";

import React from "react";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { IconButton } from "./button/button";
import { Icon } from "./icon/icon";

export const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackBehavior = () => {
    if (pathname.startsWith("/yearly-progress/")) {
      router.push("/yearly-progress");
      return;
    }
    if (pathname.startsWith("/eye-care/")) {
      router.push("/eye-care");
      return;
    }
    router.push("/");
  };

  return (
    <Link
      href="/"
      onClick={handleBackBehavior}
      aria-description="Go Back"
    >
      <IconButton>
        <Icon>arrow_back</Icon>
      </IconButton>
    </Link>
  );
};
