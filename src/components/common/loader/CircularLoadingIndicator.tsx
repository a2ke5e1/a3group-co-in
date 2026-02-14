import { cn } from "@/lib/utils";
import "./loader.css";

export const CircularLoadingIndicator = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div className={cn("circular-loader", className)}>
      <div className="circular-loader-container">
        <svg viewBox="0 0 50 50" className="circular-loader-svg">
          <circle className="circular-loader-track" cx="25" cy="25" r="20" />
          <circle className="circular-loader-progress" cx="25" cy="25" r="20" />
        </svg>
      </div>
    </div>
  );
};

export default CircularLoadingIndicator;
