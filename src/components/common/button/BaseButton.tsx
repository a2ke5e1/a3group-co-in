import { type ReactNode } from "react";
import styled from "styled-components";
import { Spinner } from "../loader/Spinner";
import {
  RoundedCornerShape,
  roundedCornerShapeToCss,
} from "../shapes/RoundedCornerShape";
import { cn } from "@/lib/utils";

export type ButtonShapeSet = {
  shape: RoundedCornerShape;
  pressedShape: RoundedCornerShape;
};

export type ButtonColors = {
  container: string;
  content: string;

  hoverOverlay?: string;
  focusOverlay?: string;
  pressedOverlay: string;

  disabledContainer: string;
  disabledContent: string;
};

export type ButtonBorder = {
  width: number;
  color: string;
};

export type HorizontalAlignment = "start" | "center" | "end";
export type VerticalAlignment = "top" | "center" | "bottom";

export type BaseButtonProps = {
  children: ReactNode;
  className?: string;

  onClick?: (item?: any) => void;
  enabled?: boolean;

  minWidth?: number;
  width?: number;
  height?: number;
  padding?: string | number;

  shape: ButtonShapeSet;
  colors: ButtonColors;
  border?: ButtonBorder;

  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;

  ariaRole?: string;
  ariaChecked?: boolean;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
};

type StyledButtonProps = {
  $shape: string;
  $pressedShape: string;
  $colors: ButtonColors;
  $border?: ButtonBorder;
  $height: number;
  $minWidth?: number;
  $width?: number;
  $padding: string | number;
  $enabled: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ $minWidth }) =>
    $minWidth !== undefined ? `${$minWidth}px` : "auto"};
  width: ${({ $width }) => ($width !== undefined ? `${$width}px` : "auto")};
  height: ${({ $height }) => `${$height}px`};
  padding: ${({ $padding }) =>
    typeof $padding === "number" ? `${$padding}px` : $padding};

  border-radius: ${({ $shape }) => $shape};

  background-color: ${({ $enabled, $colors }) =>
    $enabled ? $colors.container : $colors.disabledContainer};
  color: ${({ $enabled, $colors }) =>
    $enabled ? $colors.content : $colors.disabledContent};

  border: ${({ $border }) =>
    $border ? `${$border.width}px solid ${$border.color}` : "none"};

  cursor: ${({ $enabled }) => ($enabled ? "pointer" : "not-allowed")};
  user-select: none;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  opacity: ${({ $enabled }) => ($enabled ? 1 : 0.38)};
  pointer-events: ${({ $enabled }) => ($enabled ? "auto" : "none")};

  transform: translateZ(0);

  transition:
    border-radius 220ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms linear,
    color 150ms linear,
    border-color 150ms linear;

  /* -------------------------------
   * State Layer (Material 3)
   * ------------------------------- */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: transparent;
    pointer-events: none;
    transition: background-color 150ms linear;
  }

  &:hover::after {
    background-color: ${({ $colors }) => $colors.hoverOverlay ?? "transparent"};
  }

  &:focus-visible::after {
    background-color: ${({ $colors }) => $colors.focusOverlay ?? "transparent"};
  }

  &:active {
    border-radius: ${({ $pressedShape }) => $pressedShape};
  }

  &:active::after {
    background-color: ${({ $colors }) => $colors.pressedOverlay};
  }
`;

type ContentProps = {
  $horizontal: HorizontalAlignment;
  $vertical: VerticalAlignment;
};

const Content = styled.span<ContentProps>`
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 100%;
  gap: 8px;
  margin-top: 1px; /* optical alignment */

  align-items: ${({ $vertical }) => {
    switch ($vertical) {
      case "top":
        return "flex-start";
      case "bottom":
        return "flex-end";
      default:
        return "center";
    }
  }};

  justify-content: ${({ $horizontal }) => {
    switch ($horizontal) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      default:
        return "center";
    }
  }};
`;

const BaseButton = ({
  children,
  onClick,
  enabled = true,

  minWidth,
  width,
  height = 40,
  padding = "0 16px",

  shape,
  colors,
  border,

  horizontalAlignment = "center",
  verticalAlignment = "center",

  ariaRole,
  ariaChecked,
  loading = false,
  htmlType = "button",
  className,
}: BaseButtonProps) => {
  return (
    <StyledButton
      className={cn(className)}
      type={htmlType}
      disabled={!enabled}
      role={ariaRole}
      aria-checked={ariaChecked}
      onClick={enabled ? onClick : undefined}
      $enabled={enabled}
      $minWidth={minWidth}
      $width={width}
      $height={height}
      $padding={padding}
      $shape={roundedCornerShapeToCss(shape.shape)}
      $pressedShape={roundedCornerShapeToCss(shape.pressedShape)}
      $colors={colors}
      $border={border}
    >
      <Content $horizontal={horizontalAlignment} $vertical={verticalAlignment}>
        {loading && <Spinner />}
        {children}
      </Content>
    </StyledButton>
  );
};

export default BaseButton;
