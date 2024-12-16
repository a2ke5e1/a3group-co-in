import React from "react";
import { Icon } from "../icon/icon";

export interface AppStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  downloads: number;
  rating: number;
  reviews: number;
}

export const AppStats = React.forwardRef<HTMLDivElement, AppStatsProps>(
  ({ downloads, rating, reviews, ...props }, ref) => {
    return (
      <div
        className="flex flex-row flex-wrap gap-10 items-center sm:mx-0 mx-auto"
        ref={ref}
        {...props}
      >
        <div className="flex flex-row gap-2 items-center">
          <Icon>download</Icon>
          <div className="flex flex-col items-center">
            <h1 className="text-title-large font-bold">{downloads.toLocaleString()}</h1>
            <p className="text-body-small">Downloads</p>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Icon>star</Icon>
          <div className="flex flex-col items-center">
            <h1 className="text-title-large font-bold">{rating}</h1>
            <p className="text-body-small">Rating</p>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Icon>reviews</Icon>
          <div className="flex flex-col items-center">
            <h1 className="text-title-large font-bold">{reviews.toLocaleString()}</h1>
            <p className="text-body-small">Reviews</p>
          </div>
        </div>
      </div>
    );
  }
);
