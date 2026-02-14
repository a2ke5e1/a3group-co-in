export type Dp = number; // px for now

export type RoundedCornerShape = {
  topStart: Dp;
  topEnd: Dp;
  bottomEnd: Dp;
  bottomStart: Dp;
};

// RoundedCornerShape.ts
export const RoundedCornerShape = {
  all(radius: Dp): RoundedCornerShape {
    return {
      topStart: radius,
      topEnd: radius,
      bottomEnd: radius,
      bottomStart: radius,
    };
  },

  only({
    topStart = 0,
    topEnd = 0,
    bottomEnd = 0,
    bottomStart = 0,
  }: Partial<RoundedCornerShape>): RoundedCornerShape {
    return {
      topStart,
      topEnd,
      bottomEnd,
      bottomStart,
    };
  },

  none(): RoundedCornerShape {
    return RoundedCornerShape.all(0);
  },

  full(): RoundedCornerShape {
    return RoundedCornerShape.all(999);
  },
};

export function roundedCornerShapeToCss(
  shape: RoundedCornerShape,
  dir: "ltr" | "rtl" = "ltr",
): string {
  const tl = dir === "ltr" ? shape.topStart : shape.topEnd;
  const tr = dir === "ltr" ? shape.topEnd : shape.topStart;
  const br = dir === "ltr" ? shape.bottomEnd : shape.bottomStart;
  const bl = dir === "ltr" ? shape.bottomStart : shape.bottomEnd;

  return `${tl}px ${tr}px ${br}px ${bl}px`;
}
