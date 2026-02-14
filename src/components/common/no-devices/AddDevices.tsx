import Monitor from "@/assets/jamboard.svg?react";
import { useShareAgentLink } from "@/hooks/useShareAgentLink";
import { Space, theme, Typography } from "antd";
import Button from "../button/Button";
import OutlinedButton from "../button/OutlinedButton";
const { Text, Paragraph } = Typography;

const AddDevices = () => {
  const { copyLink, shareLink, downloadAgent, isDownloading } =
    useShareAgentLink();
  const { token } = theme.useToken();

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Monitor className="w-8 h-8 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold">No devices found</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Add a new device to get started
      </p>

      <Paragraph
        style={{
          padding: "8px 12px",
          background: token.colorBgLayout,
          borderRadius: 6,
          wordBreak: "break-all",
        }}
      >
        <Text strong>{shareLink}</Text>
      </Paragraph>

      <Space>
        <OutlinedButton onClick={copyLink}>Copy Link</OutlinedButton>
        <Button onClick={downloadAgent} loading={isDownloading}>
          Download Agent
        </Button>
      </Space>
    </div>
  );
};

export default AddDevices;
