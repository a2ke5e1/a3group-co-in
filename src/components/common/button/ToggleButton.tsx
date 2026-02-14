import { type ReactNode } from "react";
import BaseButton from "../button/BaseButton";
import { RoundedCornerShape } from "../shapes/RoundedCornerShape";
import { ButtonGroupDefaults, ToggleButtonDefaults } from "./ButtonDefaults";

export type ToggleButtonColors = {
  checked: {
    background: string;
    content: string;
  };
  unchecked: {
    background: string;
    content: string;
  };

  hoverOverlay: string;
  focusOverlay: string;
  pressedOverlay: string;
};

export type ToggleButtonShape = {
  shape: RoundedCornerShape;
  pressedShape: RoundedCornerShape;
  checkedShape: RoundedCornerShape;
};

type ToggleButtonProps = {
  children: ReactNode;
  shapes?: ToggleButtonShape;
  checked: boolean;
  onCheckedChange: () => void;
  minWidth?: number;
  height?: number;
};

const ToggleButton = ({
  children,
  shapes = ButtonGroupDefaults.connectedMiddleButtonShapes(),
  checked,
  onCheckedChange,
  minWidth,
  height,
}: ToggleButtonProps) => {
  const colors = ToggleButtonDefaults.colors();

  return (
    <BaseButton
      ariaRole="radio"
      ariaChecked={checked}
      minWidth={minWidth}
      height={height}
      padding="0 16px"
      onClick={onCheckedChange}
      shape={{
        shape: checked ? shapes.checkedShape : shapes.shape,
        pressedShape: shapes.pressedShape,
      }}
      colors={{
        container: checked
          ? colors.checked.background
          : colors.unchecked.background,
        content: checked ? colors.checked.content : colors.unchecked.content,

        hoverOverlay: colors.hoverOverlay,
        focusOverlay: colors.focusOverlay,
        pressedOverlay: colors.pressedOverlay,

        disabledContainer: colors.unchecked.background,
        disabledContent: colors.unchecked.content,
      }}
    >
      {children}
    </BaseButton>
  );
};

export default ToggleButton;
