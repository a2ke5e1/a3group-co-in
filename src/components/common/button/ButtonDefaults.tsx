import { RoundedCornerShape } from "../shapes/RoundedCornerShape";
import type { ButtonColors, ButtonShapeSet } from "./BaseButton";
import type { ToggleButtonColors, ToggleButtonShape } from "./ToggleButton";

const MAX_RADIUS = 41;
const MIN_RADIUS = 8;

export const ButtonGroupDefaults = {
  connectedLeadingButtonShapes(): ToggleButtonShape {
    return {
      shape: RoundedCornerShape.only({
        topStart: MAX_RADIUS,
        bottomStart: MAX_RADIUS,
        topEnd: MIN_RADIUS,
        bottomEnd: MIN_RADIUS,
      }),
      pressedShape: RoundedCornerShape.only({
        topStart: MAX_RADIUS,
        bottomStart: MAX_RADIUS,
        topEnd: 6,
        bottomEnd: 6,
      }),
      checkedShape: RoundedCornerShape.all(MAX_RADIUS),
    };
  },

  connectedMiddleButtonShapes(): ToggleButtonShape {
    return {
      shape: RoundedCornerShape.all(MIN_RADIUS),
      pressedShape: RoundedCornerShape.all(4),
      checkedShape: RoundedCornerShape.all(MAX_RADIUS),
    };
  },

  connectedTrailingButtonShapes(): ToggleButtonShape {
    return {
      shape: RoundedCornerShape.only({
        topEnd: MAX_RADIUS,
        bottomEnd: MAX_RADIUS,
        topStart: MIN_RADIUS,
        bottomStart: MIN_RADIUS,
      }),
      pressedShape: RoundedCornerShape.only({
        topEnd: MAX_RADIUS,
        bottomEnd: MAX_RADIUS,
        topStart: 6,
        bottomStart: 6,
      }),
      checkedShape: RoundedCornerShape.all(MAX_RADIUS),
    };
  },
};

export const ToggleButtonDefaults = {
  colors(): ToggleButtonColors {
    return {
      checked: {
        background: "var(--md-sys-color-secondary)",
        content: "var(--md-sys-color-on-secondary)",
      },
      unchecked: {
        background: "var(--md-sys-color-secondary-container)",
        content: "var(--md-sys-color-on-secondary-container)",
      },
      hoverOverlay: "rgba(0,0,0,0.04)",
      focusOverlay: "rgba(0,0,0,0.08)",
      pressedOverlay: "rgba(0,0,0,0.12)",
    };
  },
};

export const ButtonDefaults = {
  shape(): ButtonShapeSet {
    return {
      shape: RoundedCornerShape.all(32),
      pressedShape: RoundedCornerShape.all(8),
    };
  },

  outlinedColors(): ButtonColors {
    return {
      container: "transparent",
      content: "var(--md-sys-color-on-surface)",

      hoverOverlay: "rgba(0,0,0,0.04)",
      focusOverlay: "rgba(0,0,0,0.08)",
      pressedOverlay: "rgba(0,0,0,0.12)",

      disabledContainer: "transparent",
      disabledContent: "var(--md-sys-color-on-surface)",
    };
  },

  filledTonalColors(): ButtonColors {
    return {
      container: "var(--md-sys-color-secondary-container)",
      content: "var(--md-sys-color-on-secondary-container)",

      hoverOverlay: "rgba(0,0,0,0.04)",
      focusOverlay: "rgba(0,0,0,0.08)",
      pressedOverlay: "rgba(0,0,0,0.12)",

      disabledContainer: "rgba(27,27,27,0.10)",
      disabledContent: "var(--md-sys-color-on-surface)",
    };
  },

  filledColors(): ButtonColors {
    return {
      container: "var(--md-sys-color-primary)",
      content: "var(--md-sys-color-on-primary)",

      hoverOverlay: "rgba(255,255,255,0.08)",
      focusOverlay: "rgba(255,255,255,0.12)",
      pressedOverlay: "rgba(255,255,255,0.16)",

      disabledContainer: "rgba(27,27,27,0.10)", // on-surface @ 10%
      disabledContent: "var(--md-sys-color-on-surface)",
    };
  },

  textColors(): ButtonColors {
    return {
      container: "transparent",
      content: "var(--md-sys-color-primary)",

      hoverOverlay: "rgba(0,0,0,0.04)",
      focusOverlay: "rgba(0,0,0,0.08)",
      pressedOverlay: "rgba(0,0,0,0.12)",

      disabledContainer: "transparent",
      disabledContent: "var(--md-sys-color-on-surface)",
    };
  },

  elevatedColors(): ButtonColors {
    return {
      container: "var(--md-sys-color-surface)",
      content: "var(--md-sys-color-primary)",

      hoverOverlay: "rgba(0,0,0,0.04)",
      focusOverlay: "rgba(0,0,0,0.08)",
      pressedOverlay: "rgba(0,0,0,0.12)",

      disabledContainer: "rgba(27,27,27,0.10)",
      disabledContent: "var(--md-sys-color-on-surface)",
    };
  },
};

export const SegmentedButtonDefaults = {
  itemShape(index: number, count: number): RoundedCornerShape {
    const R = MAX_RADIUS;

    if (count === 1) {
      return RoundedCornerShape.all(R);
    }

    if (index === 0) {
      return RoundedCornerShape.only({
        topStart: R,
        bottomStart: R,
        topEnd: 0,
        bottomEnd: 0,
      });
    }

    if (index === count - 1) {
      return RoundedCornerShape.only({
        topStart: 0,
        bottomStart: 0,
        topEnd: R,
        bottomEnd: R,
      });
    }

    return RoundedCornerShape.all(0);
  },

  colors(): ToggleButtonColors {
    return {
      checked: {
        background: "var(--md-sys-color-secondary-container)",
        content: "var(--md-sys-color-on-secondary-container)",
      },
      unchecked: {
        background: "transparent",
        content: "var(--md-sys-color-on-surface-variant)",
      },
      hoverOverlay: "rgba(0,0,0,0.04)",
      focusOverlay: "rgba(0,0,0,0.08)",
      pressedOverlay: "rgba(0,0,0,0.12)",
    };
  },
};
