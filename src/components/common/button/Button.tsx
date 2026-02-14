import BaseButton, { type BaseButtonProps } from "./BaseButton";
import { ButtonDefaults } from "./ButtonDefaults";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  minWidth?: number;
  width?: number;
  height?: number;
  loading?: BaseButtonProps["loading"];
  htmlType?: BaseButtonProps["htmlType"];
  className?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      shape={ButtonDefaults.shape()}
      colors={ButtonDefaults.filledColors()}
    />
  );
};

export default Button;
