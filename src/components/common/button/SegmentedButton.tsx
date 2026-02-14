import type { ReactNode } from "react";
import type { RoundedCornerShape } from "../shapes/RoundedCornerShape";
import BaseButton from "./BaseButton";
import { SegmentedButtonDefaults } from "./ButtonDefaults";

type SegmentedButtonProps = {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  shape: RoundedCornerShape;
  minWidth?: number;
  height?: number;
};

export function SegmentedButton({
  children,
  selected,
  onClick,
  shape,
  minWidth = 48,
  height = 40,
}: SegmentedButtonProps) {
  const colors = SegmentedButtonDefaults.colors();

  return (
    <BaseButton
      ariaRole="radio"
      ariaChecked={selected}
      onClick={onClick}
      minWidth={minWidth}
      height={height}
      padding="0 16px"
      shape={{
        shape,
        pressedShape: shape,
      }}
      colors={{
        container: selected
          ? colors.checked.background
          : colors.unchecked.background,
        content: selected ? colors.checked.content : colors.unchecked.content,

        hoverOverlay: colors.hoverOverlay,
        focusOverlay: colors.focusOverlay,
        pressedOverlay: colors.pressedOverlay,

        disabledContainer: colors.unchecked.background,
        disabledContent: colors.unchecked.content,
      }}
      border={{
        width: 1,
        color: "var(--md-sys-color-outline)",
      }}
    >
      {children}
    </BaseButton>
  );
}

type SegmentedButtonRowProps = {
  children: ReactNode;
};

export function SegmentedButtonRow({ children }: SegmentedButtonRowProps) {
  return (
    <div
      role="radiogroup"
      style={{
        display: "inline-flex",
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                marginLeft: index === 0 ? 0 : -1,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
