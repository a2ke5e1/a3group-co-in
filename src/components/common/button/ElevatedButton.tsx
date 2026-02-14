import BaseButton from "./BaseButton";
import { ButtonDefaults } from "./ButtonDefaults";
import styled from "styled-components";

const ElevatedWrapper = styled.div`
  display: inline-block;

  & > button {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    transition: box-shadow 150ms linear;
  }

  & > button:active {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

type ElevatedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  minWidth?: number;
  width?: number;
  height?: number;
};

const ElevatedButton = (props: ElevatedButtonProps) => {
  return (
    <ElevatedWrapper>
      <BaseButton
        {...props}
        shape={ButtonDefaults.shape()}
        colors={ButtonDefaults.elevatedColors()}
      />
    </ElevatedWrapper>
  );
};

export default ElevatedButton;
