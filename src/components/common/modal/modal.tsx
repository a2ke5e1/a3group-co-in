import { Modal, type ModalProps } from "antd";
import styled from "styled-components";

const InternalStyledModal = styled(Modal)`
  .ant-modal-container {
    padding: 0px !important;
    border-radius: 16px !important;
    // height: 688px !important;
    background-color: var(--md-sys-color-surface-container-low) !important;
  }

  .ant-modal-header {
    margin-bottom: 0 !important;
  }

  .ant-modal-close {
    width: 48px !important;
    height: 48px !important;
    border-radius: 50% !important;
    color: var(--md-sys-color-on-surface) !important;
  }

  .ant-modal-wrap {
    transform-origin: center center !important;
  }
`;

export const StyledModal = (props: ModalProps) => {
  return (
    <InternalStyledModal
      {...props}
      mousePosition={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }} // Opens modal from the center of the page
    />
  );
};

export default StyledModal;
