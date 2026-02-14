import { RoundedCornerShape } from "../shapes/RoundedCornerShape";
import type { ButtonShapeSet } from "./BaseButton";

const R = 20;
const INNER_CLOSED = 4;
const LEADING_INNER_OPEN = 8;
const TRAILING_INNER_OPEN = 20;
const PRESSED = 8;

export const SplitButtonDefaults = {
  leadingShape(open: boolean): ButtonShapeSet {
    return {
      shape: RoundedCornerShape.only({
        topStart: R,
        bottomStart: R,
        topEnd: open ? LEADING_INNER_OPEN : INNER_CLOSED,
        bottomEnd: open ? LEADING_INNER_OPEN : INNER_CLOSED,
      }),
      pressedShape: RoundedCornerShape.only({
        topStart: R,
        bottomStart: R,
        topEnd: PRESSED,
        bottomEnd: PRESSED,
      }),
    };
  },

  trailingShape(open: boolean, width: number, height: number): ButtonShapeSet {
    const isCircle = open && width === height;

    if (isCircle) {
      // Perfect circle when open + square
      return {
        shape: RoundedCornerShape.all(height / 2),
        pressedShape: RoundedCornerShape.all(height / 2),
      };
    }

    return {
      shape: RoundedCornerShape.only({
        topStart: open ? TRAILING_INNER_OPEN : INNER_CLOSED,
        bottomStart: open ? TRAILING_INNER_OPEN : INNER_CLOSED,
        topEnd: R,
        bottomEnd: R,
      }),
      pressedShape: RoundedCornerShape.only({
        topStart: PRESSED,
        bottomStart: PRESSED,
        topEnd: R,
        bottomEnd: R,
      }),
    };
  },
};
