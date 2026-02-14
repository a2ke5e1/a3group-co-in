import type { ReactNode } from "react";
import BaseButton, { type BaseButtonProps } from "../button/BaseButton";
import { NavItemDefaults } from "./NavItemDefaults";

type NavItemProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  height?: number;
  horizontalAlignment?: BaseButtonProps["horizontalAlignment"];
  verticalAlignment?: BaseButtonProps["verticalAlignment"];
};

const NavItem = ({
  children,
  active = false,
  onClick,
  height = 40,
  horizontalAlignment = "center",
  verticalAlignment = "center",
}: NavItemProps) => {
  return (
    <BaseButton
      onClick={onClick}
      height={height}
      padding="0 16px"
      shape={NavItemDefaults.shape()}
      colors={NavItemDefaults.colors(active)}
      className="text-xs! leading-4!"
      horizontalAlignment={horizontalAlignment}
      verticalAlignment={verticalAlignment}
    >
      {children}
    </BaseButton>
  );
};

export default NavItem;
