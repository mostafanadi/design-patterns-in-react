import { Notification } from "../abstractions-and-implementations";

// Bridge: NotificationComponent
interface NotificationComponentProps {
  notification: Notification;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  notification,
}) => {
  return notification.display();
};
export default NotificationComponent;
