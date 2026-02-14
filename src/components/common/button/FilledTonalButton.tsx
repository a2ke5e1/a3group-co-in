import BaseButton from "./BaseButton";
import { ButtonDefaults } from "./ButtonDefaults";

type FilledTonalButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  minWidth?: number;
  width?: number;
  height?: number;
};

const FilledTonalButton = (props: FilledTonalButtonProps) => {
  return (
    <BaseButton
      {...props}
      shape={ButtonDefaults.shape()}
      colors={ButtonDefaults.filledTonalColors()}
    />
  );
};

export default FilledTonalButton;
