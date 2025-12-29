"use client";

import BackIcon from "@/ui/svg/back.svg";
import { useTransitionRouter } from "next-view-transitions";

export const HistoryBack = () => {
  const router = useTransitionRouter();

  return (
    <div className="flex p-6">
      <button
        className="bg-background text-foreground flex items-center justify-centerh-8 w-8"
        onClick={() => router.back()}
      >
        <BackIcon className="w-6 h-6" />
      </button>
    </div>
  );
};
