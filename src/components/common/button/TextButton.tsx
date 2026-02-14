import BaseButton from "./BaseButton";
import { ButtonDefaults } from "./ButtonDefaults";

type TextButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  minWidth?: number;
  width?: number;
  height?: number;
};

const TextButton = (props: TextButtonProps) => {
  return (
    <BaseButton
      {...props}
      shape={ButtonDefaults.shape()}
      colors={ButtonDefaults.textColors()}
      padding="0 12px" // matches Material TextButton horizontal padding
    />
  );
};

export default TextButton;
