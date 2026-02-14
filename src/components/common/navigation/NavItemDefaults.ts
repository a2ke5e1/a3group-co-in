import { RoundedCornerShape } from "../shapes/RoundedCornerShape";

export const NavItemDefaults = {
  shape() {
    return {
      shape: RoundedCornerShape.all(20),
      pressedShape: RoundedCornerShape.all(14),
    };
  },

  colors(active: boolean) {
    return {
      container: active
        ? "var(--md-sys-color-secondary-container)"
        : "transparent",
      content: active
        ? "var(--md-sys-color-on-secondary-container)"
        : "var(--md-sys-color-on-surface-variant)",
      hoverOverlay: "rgba(0,0,0,0.06)",
      focusOverlay: "rgba(0,0,0,0.10)",
      pressedOverlay: "rgba(0,0,0,0.12)",
      disabledContainer: "transparent",
      disabledContent: "var(--md-sys-color-on-surface-variant)",
    };
  },
};
