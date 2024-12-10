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

type YearlyProgressWidgetCustomProps = {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
};

type YearlyProgressWidgetProps = {
  type: "year" | "month" | "week" | "day" | "custom";
  custom?: YearlyProgressWidgetCustomProps;
};
const YearlyProgressWidget: React.FC<YearlyProgressWidgetProps> = ({
  type,
  custom,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState<Number>(0);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      const _progress = Math.min(
        Math.max(
          getProgress(type, custom?.startTimestamp, custom?.endTimestamp),
          0
        ),
        100.0
      );
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
        return (
          <>
            {getDay()}
            <sup>{getOrdinal(getDay())}</sup>
          </>
        );
      case "custom":
        return custom?.title ?? "Custom";
    }
  };

  const styledProgress = () => {
    var progress = Math.min(
      Math.max(
        getProgress(type, custom?.startTimestamp, custom?.endTimestamp),
        0
      ),
      100.0
    );

    const progressText = progress.toString().split(".");
    const progressInteger = progressText[0];
    const progressDecimal = progressText[1] ?? "00";

    return (
      <>
        <span className="font-bold text-2xl">{progressInteger}</span>
        <span className="font-semibold text-xl">{"."}</span>
        <span className="font-semibold text-xl">{progressDecimal}</span>
        <span className="font-semibold text-xl">{"%"}</span>
      </>
    );
  };

  return isClient ? (
    <div className="relative  bg-primary-container py-2 px-4 rounded-2xl overflow-hidden text-on-primary-fixed flex flex-col justify-between">
      <div
        className="absolute top-0 left-0 h-full bg-primary-fixed-dim transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="relative">
        {!custom && (
          <>
            <h2 className="text-label-medium uppercase p-0 m-0">
              {type}
            </h2>
            <p className="text-title-large p-0 ">{getTypeValue(type)}</p>
          </>
        )}
        {custom?.title && (
          <h2 className="text-label-medium uppercase p-0 m-0">
            {custom.title}
          </h2>
        )}
        {custom?.description && (
          <p className="relative text-sm p-0 text-on-primary-fixed-variant">
            {custom.description}
          </p>
        )}
      </div>
      <div className="relative  text-body-large">
        <p className="pt-4">{styledProgress()}</p>
        <p className="">
          of{" "}
          {(
            (getEndOfTimeMillis(type, custom?.endTimestamp) -
              getStartOfTimeMillis(type, custom?.startTimestamp)) /
            1000
          ).toFixed(0)}
          s
        </p>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default YearlyProgressWidget;
