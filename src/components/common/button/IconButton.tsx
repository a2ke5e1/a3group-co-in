import { type ReactNode } from "react";
import BaseButton, {
  type ButtonColors,
  type ButtonShapeSet,
} from "../button/BaseButton";
import { RoundedCornerShape } from "../shapes/RoundedCornerShape";

export type IconButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  className?: string;
};

const ICON_BUTTON_SHAPE: ButtonShapeSet = {
  shape: RoundedCornerShape.full(),
  pressedShape: RoundedCornerShape.all(8),
};

const iconButtonColors: ButtonColors = {
  container: "transparent",
  content: "var(--md-sys-color-on-surface-variant)",

  hoverOverlay: "var(--md-sys-state-layers-on-surface-variant-opacity-08)",

  focusOverlay: "var(--md-sys-state-layers-on-surface-variant-opacity-10)",

  pressedOverlay: "var(--md-sys-state-layers-on-surface-variant-opacity-10)",

  disabledContainer: "transparent",
  disabledContent: "var(--md-sys-color-on-surface)",
};

const IconButton = ({
  icon,
  onClick,
  enabled = true,
  className,
}: IconButtonProps) => {
  return (
    <BaseButton
      className={className}
      onClick={onClick}
      enabled={enabled}
      shape={ICON_BUTTON_SHAPE}
      colors={iconButtonColors}
      height={48}
      width={48}
      padding={0}
      ariaRole="button"
    >
      {icon}
    </BaseButton>
  );
};

export default IconButton;
