import BaseButton from "./BaseButton";
import { ButtonDefaults } from "./ButtonDefaults";

type OutlinedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  minWidth?: number;
  width?: number;
  height?: number;
};

const OutlinedButton = (props: OutlinedButtonProps) => {
  return (
    <BaseButton
      {...props}
      shape={ButtonDefaults.shape()}
      colors={ButtonDefaults.outlinedColors()}
      border={{
        width: 1,
        color: "var(--md-sys-color-outline-variant)",
      }}
    />
  );
};

export default OutlinedButton;
