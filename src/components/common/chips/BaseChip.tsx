import { type ReactNode } from "react";
import BaseButton from "../button/BaseButton";
import { RoundedCornerShape } from "../shapes/RoundedCornerShape";

export type BaseChipProps = {
  enabled?: boolean;
  onClick?: () => void;

  leading?: ReactNode;
  label: ReactNode;

  border?: {
    width: number;
    color: string;
  };

  colors: {
    container: string;
    content: string;

    hoverOverlay: string;
    focusOverlay: string;
    pressedOverlay: string;

    disabledContainer: string;
    disabledContent: string;
  };

  ariaRole?: string;
  ariaChecked?: boolean;
};

const BaseChip = ({
  enabled = true,
  onClick,
  leading,
  label,
  border,
  colors,
  ariaRole,
  ariaChecked,
}: BaseChipProps) => {
  const hasLeading = Boolean(leading);

  return (
    <BaseButton
      enabled={enabled}
      onClick={onClick}
      ariaRole={ariaRole}
      ariaChecked={ariaChecked}
      height={32}
      minWidth={hasLeading ? 85 : 67}
      padding={hasLeading ? "6px 16px 6px 8px" : "6px 16px"}
      horizontalAlignment="start"
      shape={{
        shape: RoundedCornerShape.all(8),
        pressedShape: RoundedCornerShape.all(8),
      }}
      border={border}
      colors={colors}
    >
      {hasLeading && (
        <span
          style={{
            display: "inline-flex",
            width: 18,
            height: 18,
            alignItems: "center",
            justifyContent: "center",
            opacity: enabled ? 1 : 0.38,
          }}
        >
          {leading}
        </span>
      )}

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        {label}
      </span>
    </BaseButton>
  );
};

export default BaseChip;
