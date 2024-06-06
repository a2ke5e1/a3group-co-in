"use client";

import {
  getDay,
  getProgress,
  getMonthName,
  getWeek,
  getYear,
  getEndOfTimeMillis,
  getStartOfTimeMillis,
  getOrdinal,
  getWeekName,
} from "@/YearlyProgressManager";
import { useEffect, useState } from "react";

type YearlyProgressWidgetProps = {
  type: "year" | "month" | "week" | "day";
};
const YearlyProgressWidget: React.FC<YearlyProgressWidgetProps> = ({
  type,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState<Number>(0);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      const _progress = getProgress(type);
      // console.log(_progress);
      setProgress(_progress);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [type]);

  const getTypeValue = (type: string) => {
    switch (type) {
      case "year":
        return getYear();
      case "month":
        return getMonthName();
      case "week":
        return getWeekName();
      case "day":
        return <>{getDay()}<sup>{getOrdinal(getDay())}</sup></>;
    }
  };

  const styledProgress = () => {
    const progress = getProgress(type);
    
    const progressText = progress.toString().split(".");
    const progressInteger = progressText[0];
    const progressDecimal = progressText[1] ?? "00"

    return (
      <>
        <span className="font-bold text-2xl">{progressInteger}</span>
        <span className="font-semibold text-xl">{"."}</span>
        <span className="font-semibold text-xl">{progressDecimal}</span>
        <span className="font-semibold text-xl">{"%"}</span>
      </>
    )
  }

  return (
    isClient ? <div className="relative bg-blue-50 py-2 px-4 min-w-fit rounded-2xl overflow-hidden text-blue-800">
      <div
        className="absolute top-0 left-0 h-full bg-blue-200 transition-all duration-1000 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
      <h2 className="relative text-sm font-light uppercase p-0 m-0">{type}</h2>
      <p className="relative text-lg p-0 ">{getTypeValue(type)}</p>
      <p className="relative pt-4">{styledProgress()}</p>
      <p className="relative text-sm">of {((getEndOfTimeMillis(type) - getStartOfTimeMillis(type)) /  1000).toFixed(0)}s</p>
    </div>: <div></div>
  );
};

export default YearlyProgressWidget;
