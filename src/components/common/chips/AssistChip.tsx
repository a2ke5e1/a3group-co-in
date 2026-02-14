import { type ReactNode } from "react";
import BaseChip from "./BaseChip";

type AssistChipProps = {
  onClick: () => void;
  enabled?: boolean;

  leading?: ReactNode;
  label: ReactNode;
};

const AssistChip = ({
  onClick,
  enabled = true,
  leading,
  label,
}: AssistChipProps) => {
  return (
    <BaseChip
      enabled={enabled}
      onClick={onClick}
      leading={leading}
      label={label}
      border={{
        width: 1,
        color: "var(--md-sys-color-outline-variant)",
      }}
      colors={{
        container: "transparent",
        content: "var(--md-sys-color-on-surface)",

        hoverOverlay: "rgba(73,69,79,0.08)",
        focusOverlay: "rgba(73,69,79,0.10)",
        pressedOverlay: "rgba(73,69,79,0.10)",

        disabledContainer: "transparent",
        disabledContent: "var(--md-sys-color-on-surface)",
      }}
    />
  );
};

export default AssistChip;
