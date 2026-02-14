import { type ReactNode } from "react";
import BaseChip from "./BaseChip";

type FilterChipProps = {
  selected: boolean;
  onChange: () => void;
  enabled?: boolean;

  leading?: ReactNode;
  label: ReactNode;
};

const FilterChip = ({
  selected,
  onChange,
  enabled = true,
  leading,
  label,
}: FilterChipProps) => {
  return (
    <BaseChip
      enabled={enabled}
      onClick={onChange}
      ariaRole="checkbox"
      ariaChecked={selected}
      leading={leading}
      label={label}
      border={
        selected
          ? {
              width: 1,
              color: "transparent",
            }
          : {
              width: 1,
              color: "var(--md-sys-color-outline-variant)",
            }
      }
      colors={{
        container: selected
          ? "var(--md-sys-color-secondary-container)"
          : "transparent",

        content: selected
          ? "var(--md-sys-color-on-secondary-container)"
          : "var(--md-sys-color-on-surface-variant)",

        hoverOverlay: selected ? "rgba(74,68,89,0.08)" : "rgba(73,69,79,0.08)",

        focusOverlay: selected ? "rgba(74,68,89,0.10)" : "rgba(73,69,79,0.10)",

        pressedOverlay: selected
          ? "rgba(74,68,89,0.10)"
          : "rgba(73,69,79,0.10)",

        disabledContainer: selected ? "rgba(73,69,79,0.10)" : "transparent",

        disabledContent: "var(--md-sys-color-on-surface)",
      }}
    />
  );
};

export default FilterChip;
