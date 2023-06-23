import { BorderTopOutlined } from "@ant-design/icons";
import { Button, Space, notification } from "antd";
const Test = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.success({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification("bottom")}
          icon={<BorderTopOutlined />}
        >
          top
        </Button>
      </Space>
    </>
  );
};
export default Test;
